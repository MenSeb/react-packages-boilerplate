import * as React from 'react';
import { Dispatch, State } from '../utilities';

export const TabsContextDispatch = React.createContext<Dispatch>(
  (): void => undefined,
);

export const TabsContextState = React.createContext<State>({} as State);
