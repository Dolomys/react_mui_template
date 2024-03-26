import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { HandleRequestError } from "./handle-request-error";
import { useAuthStore } from "@store/auth.store";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_IDVERIF_API_URL + "api/v1",
};

export const IdverifAxios = axios.create(config);

IdverifAxios.interceptors.request.use((config) => {
  if (useAuthStore.getState().accessToken)
    config.headers["Authorization"] = `Bearer ${useAuthStore.getState().accessToken}`;
  return config;
});

const attemptTokenRenewalAndRetryRequest = async (error: any) => {
  const authStore = useAuthStore.getState();
  if (!authStore?.refreshToken) return;

  //TODO: ADD LOGIC FOR REFRESH TOKEN RENEWAL
  const newAccessToken = "todo";
  // Modify the failed request to use the new token
  error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

  // Retry the request with the new token
  return IdverifAxios.request(error.config);
};

IdverifAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark this request as retried
      return attemptTokenRenewalAndRetryRequest(error);
    }
    // For errors other than 401, or if the request has already been retried, just throw the error
    return Promise.reject(error);
  }
);

export interface Result<T = any> {
  status: number;
  message: string;
  data?: T;
}

class APIClient {
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "PUT" });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      IdverifAxios.request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          resolve(res.data as unknown as Promise<T>);
        })
        .catch((e: AxiosError) => {
          HandleRequestError(e);
          reject(e);
        });
    });
  }
}
export default new APIClient();
