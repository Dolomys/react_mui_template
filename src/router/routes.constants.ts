export const PAGES = {
  HOME: "/",
  LOGIN: "/login",
  USERS: "/users",
  PRODUCTS: "/products",
} as const;
export type PageType = keyof typeof PAGES;
export type PageValues = (typeof PAGES)[PageType];
