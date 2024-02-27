import { CircularProgress, Grow, Pagination, Skeleton, Stack, Typography } from "@mui/material";
import { COLORS } from "@constants/colors.constant.ts";
import { ReactNode, useState } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import Map from "@components/Map";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import OpenMapIcon from "@svgs/openMapIcon.svg?react";

export type ObjectKeys<T> = keyof T;
const isDate = (x: any): x is Date => !isNaN(x) && x instanceof Date;

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

export function Table<T>(props: TableProps<T>) {
  const { total, name, cells, totalPage, currentPage, showTotal, onChangePage, isLoading } = props;

  const { t } = useTranslation();

  return (
    <Stack width="100%" height="100%">
      <TableHeader {...props} />
      <Stack height="100%">
        {isLoading ? <CircularProgress sx={{ alignSelf: "center", mt: "5%" }} /> : <TableCells {...props} />}
      </Stack>
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
    </Stack>
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
      <Typography textOverflow={"ellipsis"} fontSize="14px" fontWeight="400" pb={"10px"}>
        {value?.toString() ?? "-"}
      </Typography>
    );
  };

  const toCell = (cell: T, i: number) => {
    const isCellSelected = onClickCell && selectedCell === cell;
    return (
      <Stack key={i} py="15px" borderBottom={`1px solid ${COLORS.grey[300]}`}>
        <Stack
          bgcolor={COLORS.white}
          direction="row"
          alignItems="center"
          spacing={2}
          onClick={() => {
            onClickCell?.(cell);
          }}
        >
          {headers.map((x, index) => (
            <Stack overflow={"hidden"} key={index} flex={x.flex ?? 1} width={"250px"}>
              {toCellRow(cell, x)}
            </Stack>
          ))}
          <Stack sx={{ cursor: "pointer" }} onClick={() => setSelectedCell(!isCellSelected ? cell : undefined)}>
            {!isCellSelected ? <OpenMapIcon /> : <HighlightOffIcon />}
          </Stack>
        </Stack>
        {isCellSelected && (
          <Grow in={!!isCellSelected}>
            <Stack mt={"10px"}>
              <Map />
            </Stack>
          </Grow>
        )}
      </Stack>
    );
  };

  return (
    <Stack height="100%" mt="12px" spacing="10px">
      {cells.map(toCell)}
    </Stack>
  );
}

function TableHeader<T>(props: TableProps<T>) {
  const { headers, onClickCell } = props;

  return (
    <Stack direction="row" spacing={2}>
      {headers.map((x, i) => (
        <Stack flex={x.flex ?? 1} key={i} width={"250px"}>
          {(x.display || x.display == undefined) && (
            <Typography fontWeight="700" fontSize="14px" color={COLORS.grey[500]}>
              {x.name?.toUpperCase() ?? x.field?.toString()}
            </Typography>
          )}
        </Stack>
      ))}
      {onClickCell && <Stack width="25px" />}
    </Stack>
  );
}
