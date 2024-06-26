import { createBrowserRouter, useLocation } from "react-router-dom";
import { RouterError } from "src/router/RouterError";
import AuthGuard from "./guards/auth-guard";

import { UserRole } from "@services/user/user.model";
import { PAGES } from "./routes.constants";
import Home from "@features/common/Home/Home";
import Demo from "@features/Demo";
import Layout from "@components/layouts/Layout";
import Login from "@features/auth/login/Login";
import Users from "@features/admin/users/Users";
import Products from "@features/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouterError />,
    children: [
      ...(import.meta.env.VITE_ENVIRONMENT === "dev" ? [{ path: "/demo", element: <Demo /> }] : [{}]),
      { path: PAGES.HOME, element: <Home /> },
      {
        path: PAGES.LOGIN,
        element: <Login />,
      },
      {
        path: PAGES.USERS,
        element: (
          <AuthGuard roleGuard={UserRole.SUPER_ADMIN}>
            <Users />
          </AuthGuard>
        ),
      },
      {
        path: PAGES.PRODUCTS,
        element: (
          <AuthGuard roleGuard={UserRole.ADMIN}>
            <Products />
          </AuthGuard>
        ),
      },
    ],
  },
]);

export const useRouteMatch = (patterns: readonly string[] = []) => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");
  const lastPathSegment = [pathSegments[pathSegments.length - 1]];
  const match = patterns.find((pattern) => lastPathSegment.includes(pattern));
  return match || null;
};

export default router;
