import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TContactsActions } from "../services/actions/contacts";
import { TProfileActions } from "../services/actions/profile";
import { store } from "../services/store";

export interface IProfileState {
  loginRequest: boolean,
  loginSuccess: boolean,
  loginFailed: boolean,
  isAuth: boolean,
};

export interface IContact {
  id: number,
  name: string,
  description: string
}

export interface IContactsState {
  contactsRequest: boolean,
  contactsSuccess: boolean,
  contactsFailed: boolean,
  addContactRequest: boolean,
  addContactSuccess: boolean,
  addContactFailed: boolean,
  deleteContactRequest: boolean,
  deleteContactSuccess: boolean,
  deleteContactFailed: boolean,
  editContactRequest: boolean,
  editContactSuccess: boolean,
  editContactFailed: boolean,
  contacts: IContact[],
  contactDetails: IContact | null,
  modalVisible: boolean,
}

export interface IContactsListProps {
  filteredContacts: IContact[],
}

export interface IAddContactProps {
  closeModal: () => void,
  isEdit: boolean,
  contact?: IContact
}

export interface IHeaderBarProps {
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IContactCardProps {
  contact: IContact,
  editModal: () => void
  deleteContact: () => void
}

export interface IModalOverlayProps {
  onClose: () => void
}

export interface IModalProps {
  title?: string,
  children: React.ReactNode,
  onClose: () => void
}

export type TAppActions = TProfileActions | TContactsActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, RootState, any, TAppActions>>;
export type AppDispatch = ThunkDispatch<RootState, any, TAppActions>;

export const useMySelector: TypedUseSelectorHook<RootState> = useSelector
export const useMyDispatch = () => useDispatch<AppDispatch>()
