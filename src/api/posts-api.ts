import { PostType } from "../redux/homePage-reducer";
import { instance } from "./api";

export const postsApi = {
  getPosts: () => {
    return instance.get<Array<PostType>>("posts").then((resp) => resp.data);
  },
};
