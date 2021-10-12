import { RootStateType } from "./store";

export const selectUsers = (state: RootStateType) => {
    return state.users.users;
}