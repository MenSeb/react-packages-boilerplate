import * as React from 'react';
import { Dispatch, State, TabsContextDispatch, TabsContextState } from './';

export function useTabsContextDispatch(): Dispatch {
  return React.useContext(TabsContextDispatch);
}

export function useTabsContextState(): State {
  return React.useContext(TabsContextState);
}

export function useTabsContext(): [Dispatch, State] {
  return [useTabsContextDispatch(), useTabsContextState()];
}
