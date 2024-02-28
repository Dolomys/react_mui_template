import { Grow, Stack, Typography } from "@mui/material";
import { Housing } from "@services/housing/housing.model";
import { HousingFilterStore } from "@store/tableFilters/table-filters.store";
import { createColumnHelper } from "@tanstack/react-table";
import { debounce } from "lodash";
import { useState } from "react";
import { housingTableFakeData } from "src/fakeData/faker";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CustomMap from "@components/Map";
import TanTable from "@components/table/TanTable.component";

const HousingScreen = () => {
  const { filters, setFilters } = HousingFilterStore();
  const [data, setData] = useState<Housing[]>([...housingTableFakeData.housing]);
  const [expanded, setExpanded] = useState<string>();

  const columnHelper = createColumnHelper<Housing>();
  const columns = [
    columnHelper.accessor("pictures", {
      header: () => {},
      cell: (info) => <img src={info.getValue()[0]} width="50px" style={{ borderRadius: "8px" }} />,
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
    <Stack>
      <Typography>Logements</Typography>
      <TanTable
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
      />
    </Stack>
  );
};

export default HousingScreen;
