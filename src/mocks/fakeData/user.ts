import { User, UserRole } from "@services/user/user.model";
import { faker } from "@faker-js/faker";

export const createFakeUser = (): User => ({
  id: faker.database.mongodbObjectId(),
  name: faker.person.firstName(),
  role: faker.helpers.enumValue(UserRole),
});
