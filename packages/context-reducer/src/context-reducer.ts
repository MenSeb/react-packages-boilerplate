import { createContext, useContext } from 'react';

export const ContextReducer = createContext(null);

export function useContextReducer() {
  return useContext(ContextReducer);
}
