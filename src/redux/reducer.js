
import { addContacts, removeContacts, setFilter } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export const contactsReducer = createReducer([], {
  [addContacts]: (store, { payload }) => {
    store.push(payload);
  },
  [removeContacts]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});
