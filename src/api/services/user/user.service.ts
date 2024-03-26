import { QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "./user.model";

const keys: Record<string, QueryKey> = {
  getUser: ["getUser"],
  getFamilyMembers: ["getFamilyMembers"],
};

//TODO add react query by accessToken
export const getUser = (): User => {
  return {
    id: "1",
    name: "Alexandre",
  };
};

export function useGetUser() {
  return useQuery({
    queryFn: async () => {
      //   const resp = randomVerifResultsArray
      //   return resp.json;
      return;
    },
    queryKey: keys.getUser,
    initialData: undefined,
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      console.log(data);
      //   const resp = randomVerifResultsArray
      //   return resp.json;
      return;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.getUser });
    },
  });
}

export function useGetFamilyMembers() {
  return useQuery({
    queryFn: async () => {
      //   const resp = randomVerifResultsArray
      //   return resp.json;
      return;
    },
    queryKey: keys.getFamilyMembers,
  });
}

export function useUpdateFamilyMember() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      console.log(data);
      //   const resp = randomVerifResultsArray
      //   return resp.json;
      return;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.getFamilyMembers });
    },
  });
}
