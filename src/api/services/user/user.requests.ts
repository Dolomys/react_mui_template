import { Axios } from "src/api/Axios";
import { User } from "./user.model";

export enum UserRequests {
  profile = "users/profile",
}

export const getUser = () => Axios.get<User>(UserRequests.profile).then((x) => x.data);
