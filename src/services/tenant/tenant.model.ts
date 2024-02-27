import { BasicPagination } from "@store/tableFilters/table-filters.store";

export interface Tenant {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
}

export interface TenantFilters extends Partial<Tenant>, BasicPagination {}
