import * as Types from './types';

export function createDispatcher<T>(
  actions: Types.Actions<T>,
  dispatch: Types.Dispatch<T>,
): Types.Dispatcher<T> {
  const dispatcher = {} as Types.Dispatcher<T>;

  for (const type of Object.keys(actions) as (keyof typeof actions)[])
    dispatcher[type] = (payload?: Types.Payload) => dispatch({ payload, type });

  return dispatcher;
}

export function createError(source: string): Error {
  return new Error(`Context missing, ${source} must be use with provider.`);
}

export function createReducer<T>(actions: Types.Actions<T>): Types.Reducer<T> {
  return function reducer(state: T, action: Types.Action<T>) {
    return actions[action.type](state, action.payload ?? {});
  };
}
