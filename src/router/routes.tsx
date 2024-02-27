import Layout from "@screens/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { RouterError } from "./RouterError";
import { PAGES } from "@constants/routes.constants";
import HomeScreen from "@screens/home/Home.screen";
import CalendarScreen from "@screens/calendar/Calendar.screen";
import HousingScreen from "@screens/housing/Housing.screen";
import TenantsScreen from "@screens/tenant/Tenants.screen";

const router = createBrowserRouter([
  {
    path: PAGES.HOME,
    element: <Layout />,
    errorElement: <RouterError />,
    children: [
      { path: PAGES.HOME, element: <HomeScreen /> },
      { path: PAGES.CALENDAR, element: <CalendarScreen /> },
      { path: PAGES.TENANTS, element: <TenantsScreen /> },
      { path: PAGES.HOUSING, element: <HousingScreen /> },
    ],
  },
]);

export default router;
