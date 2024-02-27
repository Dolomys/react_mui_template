import { GetHousingsDto, Housing, HousingInfos, HousingType } from "@services/housing/housing.model";
import { Tenant } from "@services/tenant/tenant.model";
import { faker } from "@faker-js/faker";

// Function to generate a random housing object
const generateRandomHousing = (): Housing => {
  const housingType = faker.helpers.arrayElement(Object.values(HousingType));

  return {
    type: housingType,
    pictures: [faker.image.urlPicsumPhotos(), faker.image.urlPicsumPhotos()],
    rooms: faker.number.int({ min: 1, max: 8 }),
    bedrooms: faker.number.int({ min: 1, max: 5 }),
    address: {
      address: faker.location.streetAddress(),
      complementaryAddress: faker.location.secondaryAddress(),
      zip: faker.location.zipCode(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
    price: faker.number.int({ min: 400, max: 3000 }),
    sizeInM2: faker.number.int({ min: 9, max: 300 }),
    sizeOutdoorInM2: faker.number.int({ min: 2, max: 50 }),
    floor: faker.number.int({ min: 1, max: 20 }),
    parking: faker.datatype.boolean(),
    pool: faker.datatype.boolean(),
    garden: faker.datatype.boolean(),
    terrasse: faker.datatype.boolean(),
    balcony: faker.datatype.boolean(),
  };
};

// Function to generate a random tenant object
const generateRandomTenant = (): Tenant => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  age: faker.number.int({ min: 18, max: 70 }),
  gender: faker.helpers.arrayElement(["Male", "Female"]),
});

// Function to generate housing infos with tenants
const generateHousingInfos = (numTenants: number): HousingInfos => {
  const housing: Housing = generateRandomHousing();
  const occupants: Tenant[] = Array.from({ length: numTenants }, generateRandomTenant);
  return { housing, occupants };
};

// Function to generate an array of HousingInfos
const generateData = (numHousingInfos: number, numTenantsPerHousing: number): HousingInfos[] => {
  return Array.from({ length: numHousingInfos }, () => generateHousingInfos(numTenantsPerHousing));
};

// Set the number of housing infos and tenants per housing you want
const numHousingInfos = 10;
const numTenantsPerHousing = 3;

// Call the function to generate data
export const generatedHousingInfos: HousingInfos[] = generateData(numHousingInfos, numTenantsPerHousing);

export const housingTableFakeData: GetHousingsDto = {
  housingInfos: generatedHousingInfos,
  total: generatedHousingInfos.length,
  page: 1,
};
