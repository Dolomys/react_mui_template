import { Tenant } from "@services/tenant/tenant.model";
import { BasicPagination, GetFiltersDto } from "@store/tableFilters/table-filters.store";

export interface HousingAddress {
  address: string;
  complementaryAddress: string;
  zip: string;
  city: string;
  country?: string;
}

export enum HousingType {
  HOUSE = "HOUSE",
  APPARTMENT = "APPARTMENT",
}

export interface Housing {
  type: HousingType;
  pictures: string[];
  rooms: number;
  bedrooms: number;
  tenants?: Tenant[];
  address: HousingAddress;
  price: number;
  sizeInM2: number;
  sizeOutdoorInM2?: number;
  floor?: number;
  parking?: boolean;
  pool?: boolean;
  garden?: boolean;
  terrasse?: boolean;
  balcony?: boolean;
}

export interface GetHousingsDto extends GetFiltersDto {
  housing: Housing[];
}

export interface HousingFilters extends Partial<Housing>, BasicPagination {}
