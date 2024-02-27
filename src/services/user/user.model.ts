export interface UserInfos {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  addressComplement: string;
  postalCode: string;
  city: string;
  country: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  userInfos?: UserInfos;
}
