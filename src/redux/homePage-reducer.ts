// State

import { ThunkAction } from "redux-thunk";
import { postsApi } from "../api/posts-api";
import { InferValueType, RootStateType } from "./store";

const initialState: InitialStateType = {
  posts: [],
  postsPerRow: 3,
};

// Actions

const POSTS_RECEIVED = "articles/homePage/POSTS_RECEIVED";
const POSTS_PER_ROW_CHANGED = "articles/homePage/POSTS_PER_ROW_CHANGED";
const POST_ADDED = "articles/homePage/POST_ADDED";

// Action Creators

export const actions = {
  postsReceived: (posts: Array<PostType>) =>
    ({ type: POSTS_RECEIVED, posts } as const),
  postsPerRowChanged: () => ({ type: POSTS_PER_ROW_CHANGED } as const),
  postAdded: (payload: PostType) => ({ type: POST_ADDED, payload} as const),
};

// Reducer

const homePageReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case POST_ADDED:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
      case POSTS_PER_ROW_CHANGED: 
        return {
          ...state,
          postsPerRow: (state.postsPerRow === 3) ? 1 : 3,
        }
      case POSTS_RECEIVED:
          return {
              ...state,
              posts: [...action.posts]
          }
    default:
      return state;
  }
};

// Thunks

export const getPosts = (): ThunksType => {
  return async (dispatch) => {
    const resp = await postsApi.getPosts();
    dispatch(actions.postsReceived(resp));
  };
};

export default homePageReducer;

// Types

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type InitialStateType = {
  posts: Array<PostType>;
  postsPerRow: 1 | 3,
};

type ActionsType = ReturnType<InferValueType<typeof actions>>;

type ThunksType = ThunkAction<Promise<void>, RootStateType, {}, ActionsType>;
