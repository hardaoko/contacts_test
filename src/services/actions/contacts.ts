
import { AppDispatch, AppThunk, IContact} from "../../utils/types";
import { contactsRequest } from "../Api";

export const GET_CONTACTS_REQUEST = "GET_CONTACTS_REQUEST" as const;
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS" as const;
export const GET_CONTACTS_FAILED = "GET_CONTACTS_FAILED" as const;

export interface IGetContactsRequest  {type: typeof GET_CONTACTS_REQUEST;}
export interface IGetContactsFailed  {type: typeof GET_CONTACTS_FAILED;}

export interface IGetContactsSuccess  {
  type: typeof GET_CONTACTS_SUCCESS;
  payload: IContact[]
}

export type TContactsActions = IGetContactsRequest |
  IGetContactsSuccess |
  IGetContactsFailed

function getContactsFailed() {
  return { type: GET_CONTACTS_FAILED };
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
            console.log("data", data)
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
          console.error("Ошибка при передаче ингредиентов", e);
        });
    } catch (e) {
      dispatch(getContactsFailed());
      console.error("Ошибка при передаче ингредиентов", e);
    }
  };
}

