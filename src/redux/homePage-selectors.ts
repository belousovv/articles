import { RootStateType } from "./store"

export const selectPosts = (state: RootStateType) => {
    return state.home.posts;
}

export const selectPostsPerRow = (state: RootStateType) => {
    return state.home.postsPerRow;
}