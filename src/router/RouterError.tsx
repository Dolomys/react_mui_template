import { Navigate, useRouteError } from "react-router-dom";

export const RouterError = () => {
  const error = useRouteError();
  console.log(error);

  return <Navigate to="/" />;
};
