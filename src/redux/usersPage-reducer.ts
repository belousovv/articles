import { ThunkAction } from "redux-thunk";
import { usersApi } from "../api/users-api";
import { InferValueType, RootStateType } from "./store";

const initialState: InitialStateType = {
  users: null,
};

const USERS_RECEIVED = "articles/users/USERS_RECEIVED";

const actions = {
  usersReceived: (payload: UsersType[]) =>
    ({ type: USERS_RECEIVED, payload } as const),
};

const usersPageReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case USERS_RECEIVED:
      return {
        ...state,
        users: [...action.payload],
      };
    default:
      return state;
  }
};

export const getUsers = (): ThunkAction<
  Promise<void>,
  RootStateType,
  {},
  ActionsType
> => {
  return async (dispatch) => {
    const resp = await usersApi.getUsers();
    dispatch(actions.usersReceived(resp));
  };
};

export default usersPageReducer;

// Types

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;

  phone: string;
  website: string;
  company: CompanyType;
};

type InitialStateType = {
  users: Array<UsersType> | null;
};

type ActionsType = ReturnType<InferValueType<typeof actions>>;
