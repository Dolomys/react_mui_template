import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  accessToken?: string;
  refreshToken?: string;
}

interface AuthActions {
  logout: () => void;
  setAccessToken: (accessToken?: string) => void;
  setRefreshToken: (refreshToken?: string) => void;
}

// @ts-expect-error: The getToken function is expected to return a valid token, but it may return undefined.
const getToken = () => JSON.parse(localStorage.getItem("token"));

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      accessToken: getToken()?.state.accessToken,
      refreshToken: getToken()?.state.refreshToken,
      logout: () => {
        set({ accessToken: undefined, refreshToken: undefined });
        window.location.replace("/");
      },
      setAccessToken: (accessToken?: string) => {
        set({ accessToken });
      },
      setRefreshToken: (refreshToken?: string) => {
        set({ refreshToken });
      },
    }),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
      partialize: ({ accessToken, refreshToken }) => ({ accessToken, refreshToken }),
    }
  )
);

export const useAccessToken = () => useAuthStore((state) => state.accessToken);
export const useLogout = () => useAuthStore((state) => state.logout);
