import { AppDispatch } from "../../utils/types";
import { loginRequest } from "../Api";

export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAILED = "LOGIN_FAILED" as const;
export const SIGN_OUT = "SIGN_OUT" as const;

export interface ILoginRequest {
  type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: boolean;
}
export interface ILoginFailed {
  type: typeof LOGIN_FAILED;
}

export interface ISignOut {
  type: typeof SIGN_OUT;
}

export type TProfileActions =
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailed
  | ISignOut;

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
        if (data[0]) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data[0].auth,
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
