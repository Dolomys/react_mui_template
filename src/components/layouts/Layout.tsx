import { Stack } from "@mui/material";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Stack>
      <Topbar />
      <Outlet />
    </Stack>
  );
};

export default Layout;
