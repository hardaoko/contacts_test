
import { AppDispatch, AppThunk, IContact} from "../../utils/types";
import { addContactRequest, contactsRequest } from "../Api";

export const GET_CONTACTS_REQUEST = "GET_CONTACTS_REQUEST" as const;
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS" as const;
export const GET_CONTACTS_FAILED = "GET_CONTACTS_FAILED" as const;

export const ADD_CONTACTS_REQUEST = "ADD_CONTACTS_REQUEST" as const;
export const ADD_CONTACTS_SUCCESS = "ADD_CONTACTS_SUCCESS" as const;
export const ADD_CONTACTS_FAILED = "ADD_CONTACTS_FAILED" as const;

export const MODAL_OPEN = "MODAL_OPEN" as const;
export const MODAL_CLOSE = "MODAL_CLOSE" as const;

export interface IModalClose  {type: typeof MODAL_CLOSE;}
export interface IModalOpen  {type: typeof MODAL_OPEN;}

export interface IGetContactsRequest  {type: typeof GET_CONTACTS_REQUEST;}
export interface IGetContactsFailed  {type: typeof GET_CONTACTS_FAILED;}

export interface IAddContactsRequest  {type: typeof ADD_CONTACTS_REQUEST;}
export interface IAddContactsFailed  {type: typeof ADD_CONTACTS_FAILED;}

export interface IAddContactsSuccess  {
  type: typeof ADD_CONTACTS_SUCCESS;
  payload: IContact;
}

export interface IGetContactsSuccess  {
  type: typeof GET_CONTACTS_SUCCESS;
  payload: IContact[]
}

export type TContactsActions = IAddContactsRequest |
  IAddContactsFailed |
  IAddContactsSuccess |
  IGetContactsRequest |
  IGetContactsSuccess |
  IGetContactsFailed |
  IModalClose |
  IModalOpen

function getContactsFailed() {
  return { type: GET_CONTACTS_FAILED };
}

function addContactsFailed() {
  return { type: ADD_CONTACTS_FAILED };
}

export const getContacts: AppThunk = () => {
  return function (dispatch: AppDispatch ) {
    dispatch({
      type: GET_CONTACTS_REQUEST,
    });
    try {
      contactsRequest()
        .then((data) => {
          if (data) {
            dispatch({
              type: GET_CONTACTS_SUCCESS,
              payload: data,
            });
          } else {
            dispatch(getContactsFailed());
          }
        })
        .catch((e) => {
          dispatch(getContactsFailed());
          console.error("Ошибка при передаче контактов", e);
        });
    } catch (e) {
      dispatch(getContactsFailed());
      console.error("Ошибка при передаче контактов", e);
    }
  };
}

export const addContact: AppThunk = (name: string, description: string) => {
  return function (dispatch: AppDispatch ) {
    dispatch({
      type: ADD_CONTACTS_REQUEST,
    });
    try {
      addContactRequest(name, description)
        .then((data) => {
          if (data) {
            console.log("data", data)
            dispatch({
              type: ADD_CONTACTS_SUCCESS,
              payload: data,
            });
          } else {
            dispatch(addContactsFailed());
          }
        })
        .catch((e) => {
          dispatch(addContactsFailed());
          console.error("Ошибка при передаче ингредиентов", e);
        });
    } catch (e) {
      dispatch(addContactsFailed());
      console.error("Ошибка при передаче ингредиентов", e);
    }
  };
}

