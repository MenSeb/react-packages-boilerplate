import * as React from 'react';
import { Action, State } from '../utilities';

export const TabsContextDispatch =
  React.createContext<React.Dispatch<Action> | null>(null);

export const TabsContextState = React.createContext<State>({} as State);
