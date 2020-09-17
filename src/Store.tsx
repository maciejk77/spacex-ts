import React, { createContext, useReducer } from 'react';
import { reducer } from './reducers/index';
import { IState } from './interfaces/index';

const initialState = {
  rockets: [],
  dragons: [],
};

export const Store = createContext<IState>(initialState);

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ store, dispatch }}>{children}</Store.Provider>
  );
}
