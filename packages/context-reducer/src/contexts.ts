import * as React from 'react';
import { Dispatcher, State } from './types';

export const ContextDispatch = React.createContext<Dispatcher | null>(null);
export const ContextState = React.createContext<State | null>(null);
