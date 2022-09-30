import { IContactsState } from "../../utils/types";
import { ADD_CONTACTS_FAILED, ADD_CONTACTS_REQUEST, ADD_CONTACTS_SUCCESS, GET_CONTACTS_FAILED, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, MODAL_CLOSE, MODAL_OPEN, TContactsActions } from "../actions/contacts";

const initialProfile: IContactsState = {
  contactsRequest: false,
  contactsSuccess: false,
  contactsFailed: false,
  contacts: [],
  modalVisible: false,
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
    case ADD_CONTACTS_REQUEST: {
      return {
        ...state,
        contactsRequest: true,
        contactsSuccess: false,
        contactsFailed: false,
      };
    }
    case ADD_CONTACTS_SUCCESS: {
      return {
        ...state,
        contactsRequest: false,
        contactsSuccess: true,
        contactsFailed: false,

      };
    }
    case ADD_CONTACTS_FAILED: {
      return {
        ...state,
        contactsRequest: false,
        contactsSuccess: false,
        contactsFailed: true,
      };
    }
    case MODAL_OPEN: {
      return {
        ...state,
        modalVisible: true,
      };
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        modalVisible: false,
      };
    }
    default: {
      return state;
    }
  }
};
