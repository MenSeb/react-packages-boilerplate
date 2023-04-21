import * as React from 'react';

export type Action = {
  type: keyof Actions;
  payload: Payload;
};

export type Actions = {
  [key: string]: (state: State, payload: Payload) => State;
};

export type Context = {
  dispatch: Dispatcher;
  state: State;
};

export type Dispatch = React.Dispatch<Action>;

export type Dispatcher = {
  [key: keyof Actions]: (payload: Payload) => void;
};

export type Payload = {
  [key: string]: unknown;
};

export type Reducer = React.Reducer<State, Action>;

export type State = {
  [key: string]: unknown;
};
