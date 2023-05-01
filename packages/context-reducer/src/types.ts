export type Action<T> = {
  type: keyof Actions<T>;
  payload: Payload;
};

export type Actions<T> = {
  [key: string]:
    | ((state: T) => T)
    | ((state: T, payload?: Payload) => T)
    | ((state: T, payload: Payload) => T);
};

export type ConsumerDispatchProps<T> = {
  children: ({ dispatch }: { dispatch: Dispatcher<T> }) => React.ReactNode;
};

export type ConsumerReducerProps<T> = {
  children: ({
    dispatch,
    state,
  }: {
    dispatch: Dispatcher<T>;
    state: T;
  }) => React.ReactNode;
};

export type ConsumerStateProps<T> = {
  children: ({ state }: { state: T }) => React.ReactNode;
};

export type Dispatch<T> = React.Dispatch<Action<T>>;

export type Dispatcher<T> = {
  [Property in keyof Actions<T>]: (payload?: Payload) => void;
};

export type Initializer<T> = (initialState?: T) => T;

export type InitialState<T> = T | Partial<T>;

export type Options<T> = {
  actions: Actions<T>;
  initializer: Initializer<T>;
  initialState: T;
};

export type Payload = Record<string, unknown>;

export type ProviderProps = React.PropsWithChildren;

export type Reducer<T> = React.Reducer<T, Action<T>>;
