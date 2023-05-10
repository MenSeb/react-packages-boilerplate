import { createContextReducer } from '@react/context-reducer';
import * as actions from './actions';
import { Payload, State } from './types';
import { defaultState, initializer } from './utilities';

export default createContextReducer<typeof actions, State, Payload>({
  actions,
  defaultState,
  initializer,
});
