import { createContextReducer } from '@react/context-reducer';
import * as actions from './actions';
import { State, Payload } from './types';
import { defaultState, initializer } from './utilities';

export default createContextReducer<State, Payload>({
  actions,
  defaultState,
  initializer,
});
