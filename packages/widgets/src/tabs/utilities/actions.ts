import { State, Target } from './types';

export function first(state: State, target: Target): State {
  return { ...state, target: target.parentNode.firstChild };
}

export function last(state: State, target: Target): State {
  return { ...state, target: target.parentNode.lastChild };
}

export function next(state: State, target: Target): State {
  return {
    ...state,
    target: target.nextSibling
      ? target.nextSibling
      : target.parentNode.firstChild,
  };
}

export function prev(state: State, target: Target): State {
  return {
    ...state,
    target: target.previousSibling
      ? target.previousSibling
      : target.parentNode.lastChild,
  };
}
