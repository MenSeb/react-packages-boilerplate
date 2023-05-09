import { GenericAction, GenericActions, GenericDispatcher } from './types';

export function createError(source: string): Error {
  return new Error(`Context missing, ${source} must be use with provider.`);
}

export function createDispatcher<Actions, State, Payload>(
  actions: GenericActions<Actions, State, Payload>,
  dispatch: React.Dispatch<GenericAction<keyof Actions, Payload>>,
) {
  const dispatcher = {} as GenericDispatcher<Actions, Payload>;

  for (const type of Object.keys(actions) as (keyof Actions)[])
    dispatcher[type] = (payload = {} as Payload) => dispatch({ payload, type });

  return dispatcher;
}

export function createReducer<Actions, State, Payload>(
  actions: GenericActions<Actions, State, Payload>,
) {
  return function reducer(
    state: State,
    action: GenericAction<keyof Actions, Payload>,
  ) {
    return actions[action.type](state, action.payload);
  };
}
