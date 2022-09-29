import { IProfileState } from "../../utils/types";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, TProfileActions } from "../actions/profile";

const initialProfile: IProfileState = {
  loginRequest: false,
  loginSuccess: false,
  loginFailed: false,

  isAuth: false,
};

export const profileReducer = (state = initialProfile, action: TProfileActions) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginSuccess: false,
        loginFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginSuccess: true,
        loginFailed: false,
        isAuth: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginSuccess: false,
        loginFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
