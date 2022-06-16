import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  function createProducts(products) {
    dispatch({
      type: "CREATE_PRODUCTS",
      payload: products,
    });
  }
  function deleteProducts(id) {
    dispatch({
      type: "DELETE_PRODUCTS",
      payload: id,
    });
  }
  function editProducts(products) {
    dispatch({
      type: "EDIT_PRODUCTS",
      payload: products,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ products: state.products, createProducts, deleteProducts, editProducts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
