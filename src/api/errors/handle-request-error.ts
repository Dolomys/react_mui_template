import { toast } from "sonner";
import { AxiosError } from "axios";
import { ERRORS_CODE } from "./errors.constants";

//TODO Handle all the erros the backend can throw, the code below is an exemple
// You can/have to implement your own logic into this function
export const HandleRequestError = (err: AxiosError) => {
  if (err?.response?.status) {
    toast.error(ERRORS_CODE[err?.response.status]);
  }
  throw err?.response?.data;
};
