import * as actions from './actions';
import { Action, State } from './';

export function reducer(state: State, action: Action): State {
  return actions[action.type](state, action.payload.target);
}
