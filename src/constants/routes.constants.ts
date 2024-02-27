export const PAGES = {
  HOME: "/",
  LOGIN: "/login",
  CALENDAR: "/calendar",
  TENANTS: "/tenants",
  HOUSING: "/housing",
} as const;
export type PageType = keyof typeof PAGES;
export type PageValues = (typeof PAGES)[PageType];
