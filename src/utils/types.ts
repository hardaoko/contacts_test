import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TContactsActions } from "../services/actions/contacts";
import { TProfileActions } from "../services/actions/profile";
import { store } from "../services/store";

export type TAppActions = TProfileActions | TContactsActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, RootState, any, TAppActions>>;
export type AppDispatch = ThunkDispatch<RootState, any, TAppActions>;

export const useMySelector: TypedUseSelectorHook<RootState> = useSelector
export const useMyDispatch = () => useDispatch<AppDispatch>()

export interface IProfileState {
  loginRequest: boolean,
  loginSuccess: boolean,
  loginFailed: boolean,
  isAuth: boolean,
};

interface IContact {
  id: number,
  name: string,
  description: string
}

export interface IContactsState {
  contactsRequest: boolean,
  contactsSuccess: boolean,
  contactsFailed: boolean,
  contacts: IContact[],
}