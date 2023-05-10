import { createContextReducer } from '@react/context-reducer';
import * as actions from './actions';
import { DefaultState, InitialState, Payload, State } from './types';
import { defaultState, initializer } from './utilities';

const ContextReducer = createContextReducer<
  typeof actions,
  Payload,
  State,
  DefaultState,
  InitialState
>({
  actions,
  defaultState,
  initializer,
});

export default ContextReducer;
