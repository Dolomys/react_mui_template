import { Button, Stack, Typography } from "@mui/material";
import { Housing } from "src/api/services/housing/housing.model";
import { HousingFilterStore } from "@store/tableFilters/table-filters.store";
import { createColumnHelper } from "@tanstack/react-table";
import { debounce } from "lodash";
import { useState } from "react";
import { housingTableFakeData } from "src/_mockData/faker";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { COLORS } from "@utils/constants/colors.constant";

const HousingScreen = () => {
  const { filters, setFilters } = HousingFilterStore();
  const [data, setData] = useState<Housing[]>([...housingTableFakeData.housing]);
  const [expanded, setExpanded] = useState<string>();

  const columnHelper = createColumnHelper<Housing>();
  const columns = [
    columnHelper.accessor("pictures", {
      header: () => {},
      cell: (info) => <img src={info.getValue()[0]} width="120px" style={{ borderRadius: "8px" }} />,
      size: 10,
    }),
    columnHelper.accessor("address.address", {
      header: () => <Typography>Addresse</Typography>,
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("type", {
      header: () => <Typography>Type</Typography>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("address", {
      header: () => {},
      size: 30,
      cell: ({ row }) => (
        <Stack
          sx={{ cursor: "pointer", width: "30px" }}
          onClick={() => setExpanded(row.id === expanded ? undefined : row.id)}
        >
          <FmdGoodIcon />
        </Stack>
      ),

      footer: (info) => info.column.id,
    }),
  ];

  const debouncedSetFilters = debounce((newValue) => {
    setFilters({ ...filters, page: 1, search: newValue });
  }, 500);

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} spacing={2} color={COLORS.primary}>
          <HomeWorkIcon style={{ fontSize: 50 }} />
          <Typography variant="h3">Logements</Typography>
        </Stack>
        <Button>Ajouter un Logement</Button>
      </Stack>
      {/* <TanTable
        data={data}
        columns={columns}
        expandedRow={expanded}
        minWidth={800}
        customExpandedNode={(rowData) => (
          <Grow in={!!expanded} timeout={500}>
            <Stack width="100%">
              <CustomMap data={rowData} />
            </Stack>
          </Grow>
        )}
      /> */}
    </Stack>
  );
};

export default HousingScreen;
