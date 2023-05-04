export type Action<S, P> = {
  type: keyof Actions<S, P>;
  payload: P;
};

export type ActionPayload<S, P> =
  | ((state: S, payload?: P) => S)
  | ((state: S, payload: P) => S);

export type ActionState<S> = (state: S) => S;

export type Actions<S, P> = {
  [key: string]: ActionState<S> | ActionPayload<S, P>;
};

export type ConsumerDispatchProps<S, P> = {
  children: ({ dispatch }: { dispatch: Dispatcher<S, P> }) => React.ReactNode;
};

export type ConsumerReducerProps<S, P> = {
  children: ({
    dispatch,
    state,
  }: {
    dispatch: Dispatcher<S, P>;
    state: S;
  }) => React.ReactNode;
};

export type ConsumerStateProps<S> = {
  children: ({ state }: { state: S }) => React.ReactNode;
};

export type Dispatch<S, P> = React.Dispatch<Action<S, P>>;

export type Dispatcher<S, P> = {
  [Property in keyof Actions<S, P>]: (payload?: P) => void;
};

export type Initializer<S> = (state?: S | Partial<S>) => S;

export type Options<S, P> = {
  actions: Actions<S, P>;
  defaultState?: Partial<S>;
  initializer: Initializer<S>;
};

export type Payload = Record<string, unknown>;

export type ProviderProps<S> = React.PropsWithChildren & {
  initialState?: Partial<S>;
};

export type Reducer<S, P> = React.Reducer<S, Action<S, P>>;
