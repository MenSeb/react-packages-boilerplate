import * as React from 'react';
import { ActionsTypes, Store } from '../utilities';

export const ContextDispatch =
  React.createContext<React.Dispatch<ActionsTypes> | null>(null);

export const ContextState = React.createContext<Store>({} as Store);
