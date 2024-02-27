import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RouterProvider } from "react-router-dom";
import router from "@router/routes";
import { UserStore } from "@store/user.store";
import { Toaster } from "sonner";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  const { setUser } = UserStore();

  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Toaster position={"bottom-center"} richColors toastOptions={{ duration: 1500 }} />
          <CssBaseline />
          <RouterProvider router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;