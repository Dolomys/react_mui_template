import { AuthenticationResponseDto } from 'src/services/auth/auth.model';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { UserStore } from './user.store';

interface AuthState {
  accessToken?: string;
}

interface AuthActions {
  login: (by: AuthenticationResponseDto) => void;
  logout: () => void;
}

// @ts-expect-error: The getToken function is expected to return a valid token, but it may return undefined.
const getToken = () => JSON.parse(localStorage.getItem('token'));

export const AuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      accessToken: getToken()?.state.accessToken,
      login: (auth: AuthenticationResponseDto) => {
        set({ accessToken: auth.accessToken });
        UserStore.setState({ user: auth.user });
      },
      logout: () => {
        set({ accessToken: undefined });
        window.location.replace('/');
        UserStore.setState({ user: undefined });
      }
    }),
    {
      name: 'token',
      storage: createJSONStorage(() => localStorage),
      partialize: ({ accessToken }) => ({ accessToken })
    }
  )
);
