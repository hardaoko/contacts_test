
import { AppDispatch, AppThunk, IContact} from "../../utils/types";
import { addContactRequest, contactsRequest, deleteContactRequest, putContactRequest } from "../Api";

export const GET_CONTACTS_REQUEST = "GET_CONTACTS_REQUEST" as const;
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS" as const;
export const GET_CONTACTS_FAILED = "GET_CONTACTS_FAILED" as const;

export const ADD_CONTACTS_REQUEST = "ADD_CONTACTS_REQUEST" as const;
export const ADD_CONTACTS_SUCCESS = "ADD_CONTACTS_SUCCESS" as const;
export const ADD_CONTACTS_FAILED = "ADD_CONTACTS_FAILED" as const;

export const DELETE_CONTACTS_REQUEST = "DELETE_CONTACTS_REQUEST" as const;
export const DELETE_CONTACTS_SUCCESS = "DELETE_CONTACTS_SUCCESS" as const;
export const DELETE_CONTACTS_FAILED = "DELETE_CONTACTS_FAILED" as const;

export const EDIT_CONTACTS_REQUEST = "EDIT_CONTACTS_REQUEST" as const;
export const EDIT_CONTACTS_SUCCESS = "EDIT_CONTACTS_SUCCESS" as const;
export const EDIT_CONTACTS_FAILED = "EDIT_CONTACTS_FAILED" as const;


export const MODAL_OPEN = "MODAL_OPEN" as const;
export const MODAL_CLOSE = "MODAL_CLOSE" as const;

export interface IModalClose  {type: typeof MODAL_CLOSE;}
export interface IModalOpen  {
  type: typeof MODAL_OPEN;
  payload: IContact | null
}


export interface IGetContactsRequest  {type: typeof GET_CONTACTS_REQUEST;}
export interface IGetContactsFailed  {type: typeof GET_CONTACTS_FAILED;}

export interface IAddContactsRequest  {type: typeof ADD_CONTACTS_REQUEST;}
export interface IAddContactsFailed  {type: typeof ADD_CONTACTS_FAILED;}
export interface IAddContactsSuccess  {type: typeof ADD_CONTACTS_SUCCESS;}

export interface IDeleteContactsRequest  {type: typeof DELETE_CONTACTS_REQUEST;}
export interface IDeleteContactsFailed  {type: typeof DELETE_CONTACTS_FAILED;}
export interface IDeleteContactsSuccess  {type: typeof DELETE_CONTACTS_SUCCESS;}

export interface IEditContactsRequest  {type: typeof EDIT_CONTACTS_REQUEST;}
export interface IEditContactsFailed  {type: typeof EDIT_CONTACTS_FAILED;}
export interface IEditContactsSuccess  {type: typeof EDIT_CONTACTS_SUCCESS;}

export interface IGetContactsSuccess  {
  type: typeof GET_CONTACTS_SUCCESS;
  payload: IContact[]
}

export type TContactsActions = IAddContactsRequest |
  IAddContactsFailed |
  IAddContactsSuccess |
  IDeleteContactsRequest |
  IDeleteContactsFailed |
  IDeleteContactsSuccess |
  IEditContactsRequest |
  IEditContactsFailed |
  IEditContactsSuccess |
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

function deleteContactsFailed() {
  return { type: DELETE_CONTACTS_FAILED };
}

function editContactsFailed() {
  return { type: EDIT_CONTACTS_FAILED };
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
            })
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
            dispatch({
              type: ADD_CONTACTS_SUCCESS
            });
            dispatch(getContacts());
          } else {
            dispatch(addContactsFailed());
          }
        })
        .catch((e) => {
          dispatch(addContactsFailed());
          console.error("Ошибка при добавлении контакта", e);
        });
    } catch (e) {
      dispatch(addContactsFailed());
      console.error("Ошибка при добавлении контакта", e);
    }
  };
}

export const deleteContact: AppThunk = (id: number) => {
  return function (dispatch: AppDispatch ) {
    dispatch({
      type: DELETE_CONTACTS_REQUEST,
    });
    try {
      deleteContactRequest(id)
        .then((data) => {
          if (data) {
            dispatch({
              type: DELETE_CONTACTS_SUCCESS
            });
            dispatch(getContacts());
          } else {
            dispatch(deleteContactsFailed());
          }
        })
        .catch((e) => {
          dispatch(deleteContactsFailed());
          console.error("Ошибка при удалении контакта", e);
        });
    } catch (e) {
      dispatch(deleteContactsFailed());
      console.error("Ошибка при удалении контакта", e);
    }
  };
}

export const editContact: AppThunk = (id: number, name: string, description: string) => {
  return function (dispatch: AppDispatch ) {
    dispatch({
      type: EDIT_CONTACTS_REQUEST,
    });
    try {
      putContactRequest(id, name,description)
        .then((data) => {
          if (data) {
            dispatch({
              type: EDIT_CONTACTS_SUCCESS
            });
            dispatch(getContacts());
          } else {
            dispatch(editContactsFailed());
          }
        })
        .catch((e) => {
          dispatch(editContactsFailed());
          console.error("Ошибка при редактировании контакта", e);
        });
    } catch (e) {
      dispatch(editContactsFailed());
      console.error("Ошибка при редактировании контакта", e);
    }
  };
}

