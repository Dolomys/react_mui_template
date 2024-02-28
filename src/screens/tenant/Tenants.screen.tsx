import { Stack, Typography } from "@mui/material";
import { Tenant } from "@services/tenant/tenant.model";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { tenantTableFakeData } from "src/fakeData/faker";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TanTable from "@components/table/TanTable.component";
import CustomMap from "@components/Map";

const TenantsScreen = () => {
  const [data, setData] = useState<Tenant[]>([...tenantTableFakeData.tenants]);
  const [expanded, setExpanded] = useState<string>();

  const columnHelper = createColumnHelper<Tenant>();
  const columns = [
    columnHelper.accessor("firstname", {
      header: () => <Typography>Prénom</Typography>,
      cell: (info) => info.getValue(),
      size: 10,
    }),
    columnHelper.accessor("lastname", {
      header: () => <Typography>Nom de famille</Typography>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("age", {
      header: () => <Typography>Age</Typography>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("address.address", {
      header: () => <Typography>Address</Typography>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("address", {
      header: () => {},
      cell: ({ row }) => (
        <Stack sx={{ cursor: "pointer" }} onClick={() => setExpanded(row.id === expanded ? undefined : row.id)}>
          <FmdGoodIcon />
        </Stack>
      ),

      footer: (info) => info.column.id,
    }),
  ];

  return (
    <Stack>
      <TanTable
        data={data}
        columns={columns}
        expandedRow={expanded}
        minWidth={1200}
        customExpandedNode={(rowData) => <CustomMap data={rowData} />}
      />
    </Stack>
  );
};

export default TenantsScreen;
