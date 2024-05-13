import { getUser } from "@services/user/user.requests";
import { useAuthStore } from "@store/auth.store";
import { useQuery } from "@tanstack/react-query";

export const userKeys = {
  all: ["users"] as const,
  getUser: () => [...userKeys.all, "getUser"] as const,
};

export const useGetUser = () => {
  const { accessToken } = useAuthStore();
  return useQuery({
    queryKey: userKeys.getUser(),
    queryFn: () => getUser(),
    enabled: !!accessToken,
    staleTime: Infinity,
  });
};
