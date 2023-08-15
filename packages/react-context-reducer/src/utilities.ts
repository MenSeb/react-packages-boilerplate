import * as Types from './types';

export function createError(source: string): Error {
  return new Error(`Context missing, ${source} must be use with provider.`);
}

export function createDispatcher<Actions, State, Payload>(
  actions: Types.GenericActions<Actions, State, Payload>,
  dispatch: React.Dispatch<Types.GenericAction<keyof Actions, Payload>>,
) {
  const dispatcher = {} as Types.GenericDispatcher<Actions, Payload>;

  for (const type of Object.keys(actions) as (keyof Actions)[])
    dispatcher[type] = (payload = {} as Payload) => {
      dispatch({ payload, type });
    };

  return dispatcher;
}

export function createReducer<Actions, State, Payload>(
  actions: Types.GenericActions<Actions, State, Payload>,
) {
  return function reducer(
    state: State,
    action: Types.GenericAction<keyof Actions, Payload>,
  ) {
    return actions[action.type](state, action.payload);
  };
}
