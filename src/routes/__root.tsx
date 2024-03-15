import { Stack } from "@mui/material";
import Sidebar from "src/features/sidebar/Sidebar";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import Topbar from "@features/topbar/Topbar";
import { COLORS } from "@constants/colors.constant";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Stack bgcolor={COLORS.defaultbg} direction={"row"} spacing={3}>
      <Sidebar />
      <Stack spacing={5} width="100%" p={"20px"}>
        <Topbar />
        <Outlet />
      </Stack>
    </Stack>
  );
}