import { IContactsState } from "../../utils/types";
import { ADD_CONTACTS_FAILED, ADD_CONTACTS_REQUEST, ADD_CONTACTS_SUCCESS, DELETE_CONTACTS_FAILED, DELETE_CONTACTS_REQUEST, DELETE_CONTACTS_SUCCESS, EDIT_CONTACTS_FAILED, EDIT_CONTACTS_REQUEST, EDIT_CONTACTS_SUCCESS, GET_CONTACTS_FAILED, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, MODAL_CLOSE, MODAL_OPEN, TContactsActions } from "../actions/contacts";

const initialProfile: IContactsState = {
  contactsRequest: false,
  contactsSuccess: false,
  contactsFailed: false,
  addContactRequest: false,
  addContactSuccess: false,
  addContactFailed: false,
  deleteContactRequest: false,
  deleteContactSuccess: false,
  deleteContactFailed: false,
  editContactRequest: false,
  editContactSuccess: false,
  editContactFailed: false,
  contacts: [],
  contactDetails: null,
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
        addContactRequest: true,
        addContactSuccess: false,
        addContactFailed: false,
      };
    }
    case ADD_CONTACTS_SUCCESS: {
      return {
        ...state,
        addContactRequest: false,
        addContactSuccess: true,
        addContactFailed: false,
      };
    }
    case ADD_CONTACTS_FAILED: {
      return {
        ...state,
        addContactRequest: false,
        addContactSuccess: false,
        addContactFailed: true,
      };
    }

    case DELETE_CONTACTS_REQUEST: {
      return {
        ...state,
        deleteContactRequest: true,
        deleteContactSuccess: false,
        deleteContactFailed: false,
      };
    }
    case DELETE_CONTACTS_SUCCESS: {
      return {
        ...state,
        deleteContactRequest: false,
        deleteContactSuccess: true,
        deleteContactFailed: false,
      };
    }
    case DELETE_CONTACTS_FAILED: {
      return {
        ...state,
        deleteContactRequest: false,
        deleteContactSuccess: false,
        deleteContactFailed: true,
      };
    }

    case EDIT_CONTACTS_REQUEST: {
      return {
        ...state,
        editContactRequest: true,
        editContactSuccess: false,
        editContactFailed: false,
      };
    }
    case EDIT_CONTACTS_SUCCESS: {
      return {
        ...state,
        editContactRequest: false,
        editContactSuccess: true,
        editContactFailed: false,

      };
    }
    case EDIT_CONTACTS_FAILED: {
      return {
        ...state,
        editContactRequest: false,
        editContactSuccess: false,
        editContactFailed: true,
      };
    }

    case MODAL_OPEN: {
      return {
        ...state,
        modalVisible: true,
        contactDetails: action.payload,
      };
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        modalVisible: false,
        contactDetails: null,
      };
    }
    default: {
      return state;
    }
  }
};
