import { createContextReducer } from '@react/context-reducer';
import * as actions from './actions';
import { initializer, initialState } from './utilities';

export default createContextReducer({
  actions,
  initializer,
  initialState,
});
