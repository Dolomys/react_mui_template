import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Stack direction={"row"} p={"20px"} spacing={3}>
      <Sidebar />
      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Layout;
