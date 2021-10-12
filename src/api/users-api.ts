import { instance } from "./api";

export const usersApi = {
  getUsers: () => {
    return instance.get("users").then((resp) => resp.data);
  },
};
