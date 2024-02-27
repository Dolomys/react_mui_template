import { User } from "src/services/user/user.model";
import { getUser } from "src/services/user/user.service";
import { create } from "zustand";

interface UserState {
  user?: User;
}

interface UserActions {
  setUser: () => void;
}

export const UserStore = create<UserState & UserActions>()((set) => ({
  user: undefined,
  setUser: () => {
    set({ user: getUser() });
  },
}));
