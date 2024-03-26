import { toast } from "sonner";
import { AxiosError } from "axios";
import { ERRORS_CODE } from "./errors.constants";

export const HandleRequestError = (err: AxiosError) => {
  if (err?.response?.status) {
    toast.error(ERRORS_CODE[err?.response.status]);
  }
  throw err?.response?.data;
};
