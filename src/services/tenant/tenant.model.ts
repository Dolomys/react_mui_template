import { HousingAddress } from "@services/housing/housing.model";
import { BasicPagination, GetFiltersDto } from "@store/tableFilters/table-filters.store";

export interface Tenant {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  address: HousingAddress;
}

export interface TenantFilters extends Partial<Tenant>, BasicPagination {}

export interface GetTenantsDto extends GetFiltersDto {
  tenants: Tenant[];
}
