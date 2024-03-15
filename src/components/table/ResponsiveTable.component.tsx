import { Button, CircularProgress, Grid, Grow, Pagination, Skeleton, Stack, Typography } from "@mui/material";
import { COLORS } from "@constants/colors.constant.ts";
import { ReactNode, useState } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MapIconResponsive from "@svgs/mapIconResponsive.svg?react";
import Map from "@components/Leaflet.map";

export type ObjectKeys<T> = keyof T;
export const isDate = (x: any): x is Date => !isNaN(x) && x instanceof Date;

interface TableHeaderProps<T> {
  field?: ObjectKeys<T>;
  name?: string;
  display?: boolean;
  flex?: number;
  format?: (value: any) => ReactNode | string | number;
  type?: "picture" | "date" | "custom";
  customContent?: (cell: T) => ReactNode; // Fonction pour le contenu personnalisé
}

export interface TableProps<T> {
  headers: TableHeaderProps<T>[];
  onClickCell?: (cell: T) => void;
  numberElementCanShow?: (nbr: number) => void;
  cells: T[];
  total?: number;
  totalPage?: number;
  showTotal?: boolean;
  onChangePage?: (page: number) => void;
  isLoading?: boolean;
  name?: string;
  currentPage: number;
}

export function ResponsiveTable<T>(props: TableProps<T>) {
  const { total, name, cells, totalPage, currentPage, showTotal, onChangePage, isLoading } = props;

  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12}>
        {isLoading ? <CircularProgress sx={{ alignSelf: "center", mt: "5%" }} /> : <TableCells {...props} />}
      </Grid>
      <Stack mt={"20px"} direction="row" alignItems="center">
        {showTotal && (
          <>
            <Typography fontWeight="400" fontSize="14" mr="6px">
              {t("global:totalCount", { name: name })}
            </Typography>
            <Typography fontWeight="700" fontSize="14">
              {total ?? cells.length}
            </Typography>
          </>
        )}
        <Stack flex={1} />
        {totalPage && (
          <Pagination
            page={currentPage}
            count={Math.ceil(totalPage)}
            size="small"
            onChange={(_e, p) => onChangePage?.(p)}
          />
        )}
      </Stack>
    </Grid>
  );
}

function TableCells<T>(props: TableProps<T>) {
  const { headers, cells, onClickCell } = props;
  const [selectedCell, setSelectedCell] = useState<T>();

  const rowDate = (date: Date) => dayjs(date).format("DD/MM/YYYY");

  const toCellRow = (cell: T, header: TableHeaderProps<T>) => {
    const value = header.field && cell[header.field];

    if (isDate(value) && !header.format) return rowDate(value as Date);
    if (header.type === "custom") {
      if (header.customContent) {
        return header.customContent(cell);
      }
    }
    if (header.type === "date" && !header.format) return rowDate(new Date(value as string));
    if (header.type === "picture") {
      if (value) return <Stack component="img" borderRadius="30px" src={value.toString()} width="30px" height="30px" />;
      else
        return (
          <Stack>
            <Skeleton width="30px" height="30px" variant="circular" />
          </Stack>
        );
    }

    return header.format ? (
      header.format(value ?? cell)
    ) : (
      <Typography fontSize="14px" fontWeight="400" pb={"10px"}>
        {value?.toString() ?? "-"}
      </Typography>
    );
  };

  const toCell = (cell: T, i: number) => {
    const isCellSelected = onClickCell && selectedCell === cell;
    return (
      <Grid container item xs={12} key={i} bgcolor={COLORS.white} rowGap={2} borderRadius={"20px"} p="30px 15px">
        {headers.map((x, index, array) => {
          const isLastRow = array.length - 2 === index || array.length - 1 === index;
          return (
            <Grid
              item
              key={index}
              xs={6}
              pb={"10px"}
              sx={{ borderBottom: !isLastRow ? `1px solid ${COLORS.grey[200]}` : "" }}
            >
              <Typography fontWeight="700" fontSize="14px" color={COLORS.grey[400]}>
                {x.name?.toUpperCase() ?? x.field?.toString()}
              </Typography>
              {toCellRow(cell, x)}
            </Grid>
          );
        })}

        <Stack
          width={"100%"}
          sx={{ cursor: "pointer" }}
          onClick={() => setSelectedCell(!isCellSelected ? cell : undefined)}
        >
          <Button
            sx={{ width: "100%" }}
            color={"black"}
            startIcon={!isCellSelected ? <MapIconResponsive /> : <HighlightOffIcon />}
          >
            <Typography fontSize={"14px"}>Afficher la carte</Typography>
          </Button>
        </Stack>
        {isCellSelected && (
          <Grow in={!!isCellSelected}>
            <Stack width={"100%"} mt={"10px"}>
              <Map />
            </Stack>
          </Grow>
        )}
      </Grid>
    );
  };

  return (
    <Grid container rowGap={3}>
      {cells.map(toCell)}
    </Grid>
  );
}
