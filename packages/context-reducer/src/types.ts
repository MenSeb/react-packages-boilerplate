export type GenericAction<Type, Payload> = {
  type: Type;
  payload: Payload;
};

export type GenericActions<Actions, State, Payload> = {
  [key in keyof Actions]:
    | ((state: State) => State)
    | ((state: State, payload: Payload) => State)
    | ((state: State, payload?: Payload) => State);
};

export type GenericDispatcher<Actions, Payload> = {
  [key in keyof Actions]: (payload?: Payload) => void;
};

export type Initializer<State> = (state?: State | Partial<State>) => State;

export type Options<Actions, State, Payload> = {
  actions: GenericActions<Actions, State, Payload>;
  defaultState?: Partial<State>;
  initializer: Initializer<State>;
};

export type ConsumerStateProps<State> = {
  children: ({ state }: { state: State }) => React.ReactNode;
};

export type ConsumerDispatchProps<Actions, Payload> = {
  children: ({
    dispatch,
  }: {
    dispatch: GenericDispatcher<Actions, Payload>;
  }) => React.ReactNode;
};

export type ConsumerReducerProps<Actions, State, Payload> = {
  children: ({
    dispatch,
    state,
  }: {
    dispatch: GenericDispatcher<Actions, Payload>;
    state: State;
  }) => React.ReactNode;
};

export type ProviderProps<S> = React.PropsWithChildren & {
  initialState?: Partial<S>;
};
