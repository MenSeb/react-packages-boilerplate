import * as React from 'react';
import { screen } from '@testing-library/react';

export interface ContextValue {
  context: string;
  hook?: string;
  test?: string;
}

export interface HookProps {
  hook: string;
  test?: string;
}

export interface ProviderProps extends React.PropsWithChildren {
  test?: string;
}

export interface TestProps {
  className: string;
  id: string;
  onClick: () => void;
}

export interface WrapperProps extends React.PropsWithChildren {
  className?: string;
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

export function Test(props: TestProps) {
  return <input {...props} data-testid="test" />;
}

export function Wrapper(props: WrapperProps) {
  return <div {...props} data-testid="wrapper" />;
}

export function useHook(props: HookProps): HookProps {
  return props;
}

export function useTest(props?: HookProps): ContextValue {
  return { ...React.useContext(Context), ...props };
}

export function getTest() {
  return screen.getByTestId('test');
}

export function getWrapper() {
  return screen.getByTestId('wrapper');
}

export function queryWrapper() {
  return screen.queryByTestId('wrapper');
}

export const contextValue = { context: 'test' };

export const Context = React.createContext<ContextValue>(contextValue);

export const propsHook = {
  hook: 'hook',
};

export const propsProvider = {
  test: 'provider',
};

export const propsTest = {
  className: 'className',
  id: 'id',
  onClick: jest.fn(),
};

export const propsWrapper = {
  children: 'children',
  className: 'className',
};

export const options = {
  wrapper: Wrapper,
};

export const setup = {
  skipClick: true,
};

export const settings = { options, setup };

afterEach(() => {
  propsTest.onClick.mockReset();
});
