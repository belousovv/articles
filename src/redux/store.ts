import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import homePageReducer from "./homePage-reducer";
import usersPageReducer from "./usersPage-reducer";

const rootReducer = combineReducers({
    home: homePageReducer,
    users: usersPageReducer,
});

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

export default store;

// Types

export type RootStateType = ReturnType<typeof rootReducer>
export type InferValueType<T> = T extends {[key: string]: infer U} ? U : never;