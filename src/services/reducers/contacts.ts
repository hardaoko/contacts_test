import { IContactsState } from "../../utils/types";
import { GET_CONTACTS_FAILED, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, TContactsActions } from "../actions/contacts";

const initialProfile: IContactsState = {
  contactsRequest: false,
  contactsSuccess: false,
  contactsFailed: false,

  contacts: [],
};

export const contactsReducer = (state = initialProfile, action: TContactsActions) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST: {
      return {
        ...state,
        contactsRequest: true,
        contactsSuccess: false,
        contactsFailed: false,
      };
    }
    case GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        contactsRequest: false,
        contactsSuccess: true,
        contactsFailed: false,
        contacts: action.payload,
      };
    }
    case GET_CONTACTS_FAILED: {
      return {
        ...state,
        contactsRequest: false,
        contactsSuccess: false,
        contactsFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
