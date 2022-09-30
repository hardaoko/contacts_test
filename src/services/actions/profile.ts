import { AppDispatch } from "../../utils/types";
import { loginRequest } from "../Api";


export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAILED = "LOGIN_FAILED" as const;

export interface ILoginRequest  {type: typeof LOGIN_REQUEST;}
export interface ILoginSuccess  {
  type: typeof LOGIN_SUCCESS,
  accessToken: string,
  password: string
}
export interface ILoginFailed  {type: typeof LOGIN_FAILED;}

export type TProfileActions = ILoginRequest |
ILoginSuccess  |
ILoginFailed

function getLoginFailed() {
  return { type: LOGIN_FAILED };
}

export const getLogin = (login: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    loginRequest(login, password)
      .then((data) => {

        if (data) {
          dispatch({
            type: LOGIN_SUCCESS,
            accessToken: data.token,
            password: password,
          });
        } else {
          dispatch(getLoginFailed());
        }
      })
      .catch((e) => {
        dispatch(getLoginFailed());
        console.error("Ошибка при входе", e);
      });
  };
};
