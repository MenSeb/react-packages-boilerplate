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

export type Initializer<State, DefaultState, InitialState> = (
  state: DefaultState & InitialState,
) => State;

export type Options<
  Actions,
  Payload,
  State,
  DefaultState = Record<string, unknown>,
  InitialState = Record<string, unknown>,
> = {
  actions: GenericActions<Actions, State, Payload>;
  defaultState?: DefaultState;
  initializer: Initializer<State, DefaultState, InitialState>;
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

export type ProviderProps<InitialState> = React.PropsWithChildren & {
  initialState?: InitialState;
};
