import { HousingFilters } from "@services/housing/housing.model";
import { TenantFilters } from "@services/tenant/tenant.model";
import { create } from "zustand";

export interface GetFiltersDto {
  page: number;
  total: number;
}

export interface BasicPagination {
  page: number;
  pageSize: number;
  sortDirection: "asc" | "desc";
  search?: string;
}

interface FiltersState<T extends BasicPagination> {
  filters: T;
}

interface FiltersActions<T extends BasicPagination> {
  setFilters: (filters?: Partial<T>) => void;
}

const initialFilters: BasicPagination = {
  page: 1,
  pageSize: 8,
  sortDirection: "asc",
};

export const HousingFilterStore = create<FiltersState<HousingFilters> & FiltersActions<HousingFilters>>()((set) => ({
  filters: {
    ...initialFilters,
  },
  setFilters: (filters?: Partial<HousingFilters>) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
}));
export const TenantFilterStore = create<FiltersState<TenantFilters> & FiltersActions<TenantFilters>>()((set) => ({
  filters: { ...initialFilters },
  setFilters: (filters?: Partial<TenantFilters>) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
}));
