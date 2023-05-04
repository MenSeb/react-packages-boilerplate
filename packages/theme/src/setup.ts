import { createContextReducer } from '@react/context-reducer';
import * as actions from './actions';
import { Payload, State } from './types';
import { initializer } from './utilities';

export default createContextReducer<State, Payload, State, State>({
  actions,
  initializer,
});
