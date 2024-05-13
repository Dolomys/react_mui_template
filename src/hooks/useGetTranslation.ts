import { useTranslation } from "react-i18next";

export const useGetTranslation = (keyPrefix: string) => {
  return useTranslation(undefined, { keyPrefix: keyPrefix }).t;
};
