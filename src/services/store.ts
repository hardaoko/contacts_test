import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./reducers/contacts";

import { profileReducer } from "./reducers/profile";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    contacts: contactsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

