import * as Types from './types';

export function createDispatcher<S, P>(
  actions: Types.Actions<S, P>,
  dispatch: Types.Dispatch<S, P>,
): Types.Dispatcher<S, P> {
  const dispatcher = {} as Types.Dispatcher<S, P>;

  for (const type of Object.keys(actions) as (keyof typeof actions)[])
    dispatcher[type] = (payload = {} as P) => dispatch({ payload, type });

  return dispatcher;
}

export function createError(source: string): Error {
  return new Error(`Context missing, ${source} must be use with provider.`);
}

export function createReducer<S, P>(
  actions: Types.Actions<S, P>,
): Types.Reducer<S, P> {
  return function reducer(state: S, action: Types.Action<S, P>) {
    return actions[action.type](state, action.payload);
  };
}
