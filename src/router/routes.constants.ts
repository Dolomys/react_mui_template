export const PAGES = {
  HOME: "/",
  LOGIN: "/login",
  USERS: "/calendar",
  PRODUCTS: "/tenants",
} as const;
export type PageType = keyof typeof PAGES;
export type PageValues = (typeof PAGES)[PageType];
