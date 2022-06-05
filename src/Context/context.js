import { createContext, useState, useReducer } from "react";
import rootReducer from '../Reducer'

export const contactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    users: {
      list: [],
      details: null,
    }
  });
  return (
    <contactsContext.Provider value={{ state, dispatch }}>
      {children}
    </contactsContext.Provider>
  );
};
