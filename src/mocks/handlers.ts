import { UserRequests } from "@services/user/user.requests";
import { http, HttpResponse } from "msw";
import { createFakeUser } from "./fakeData/user";

const url = (path: string) => {
  return import.meta.env.VITE_IDVERIF_API_URL + "api/v1" + path;
};

export const handlers = [
  http.get(url(UserRequests.profile), () => {
    return HttpResponse.json(createFakeUser());
  }),
];
