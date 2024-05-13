import { PAGES } from "@router/routes.constants";
import { UserRole } from "@services/user/user.model";
import { useAuthStore } from "@store/auth.store";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGetUser } from "src/api/queries/user.queries";
import { useGetTranslation } from "src/hooks/useGetTranslation";

type AuthGuardProps = {
  children: React.ReactNode;
  roleGuard?: UserRole;
};

export default function AuthGuard({ children, roleGuard }: AuthGuardProps) {
  const { accessToken } = useAuthStore();
  const { data: user } = useGetUser();
  const t = useGetTranslation("global");
  const navigate = useNavigate();

  const check = useCallback(async () => {
    // TODO -- verify if user is auth
    if (!accessToken) navigate(PAGES.HOME);
    if (roleGuard && user?.role !== roleGuard) {
      toast.error(t("wrongRole"));
      navigate(PAGES.HOME);
    }
  }, [accessToken, navigate, roleGuard]);

  useEffect(() => {
    check();
  }, [check]);

  return children;
}
