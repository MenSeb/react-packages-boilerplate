import { Action, Actions, Dispatch, Dispatcher, State } from './types';

export function createDispatcher(
  actions: Actions,
  dispatch: Dispatch,
): Dispatcher {
  const dispatcher: Dispatcher = {};

  for (const type of Object.keys(actions))
    dispatcher[type] = (payload) => dispatch({ payload, type });

  return dispatcher;
}

export function createError(source: string): Error {
  return new Error(`Context missing, ${source} must be use with provider.`);
}

export function createReducer(actions: Actions): React.Reducer<State, Action> {
  return function reducer(state: State, action: Action) {
    return actions[action.type](state, action.payload);
  };
}
