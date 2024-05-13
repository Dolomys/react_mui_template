export enum UserRole {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export interface UserToken {
  accessToken?: string;
  refreshToken?: string;
}
