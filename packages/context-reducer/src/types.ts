import * as React from 'react';

export type Action = {
  type: keyof Actions;
  payload?: Payload;
};

export type Actions = {
  [key: string]: (state: State, payload?: Payload) => State;
};

export type Context = {
  dispatch: Dispatcher;
  state: State;
};

export type Dispatch = React.Dispatch<Action>;

export type Dispatcher = {
  [key: keyof Actions]: (payload?: Payload) => void;
};

export type Payload = Shape;

export type Reducer = React.Reducer<State, Action>;

export type Shape = {
  [key: string]: boolean | number | null | string | undefined;
  // | number[]
  // | string[]
  // | Shape[]
  // | Record<string, Shape>;
};

export type State = Shape;
