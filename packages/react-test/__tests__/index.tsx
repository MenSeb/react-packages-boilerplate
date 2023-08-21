import * as React from 'react';
import { screen } from '@testing-library/react';

export interface ContextValue {
  context: string;
  test?: string;
}

export interface HookProps {
  hook: string;
  test?: string;
}

export interface ProviderProps extends React.PropsWithChildren {
  test?: string;
}

export function Provider({ children, test }: ProviderProps) {
  return (
    <Context.Provider value={{ ...contextValue, test }}>
      {children}
    </Context.Provider>
  );
}

export function ProviderTest({ children }: React.PropsWithChildren) {
  return (
    <Context.Provider value={{ ...contextValue, test: 'test' }}>
      {children}
    </Context.Provider>
  );
}

export function useHook(props: HookProps): HookProps {
  return props;
}

export function useTest(): ContextValue {
  return React.useContext(Context);
}

export function getTest() {
  return screen.getByTestId('test');
}

export const contextValue = { context: 'test' };

export const Context = React.createContext<ContextValue>(contextValue);

export const propsHook = {
  hook: 'test',
};

export const propsProvider = {
  test: 'test',
};
