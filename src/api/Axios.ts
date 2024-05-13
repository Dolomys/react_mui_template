import axios, { AxiosRequestConfig } from "axios";
import { useAuthStore } from "@store/auth.store";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL + "api/v1",
};

export const Axios = axios.create(config);

Axios.interceptors.request.use((config) => {
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
  return Axios.request(error.config);
};

Axios.interceptors.response.use(
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
