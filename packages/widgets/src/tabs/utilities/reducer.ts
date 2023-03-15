import { Action, Actions } from './';

export type State = {
  target: HTMLElement;
};

export function reducer(state: State, action: Action) {
  const { payload } = action;
  const { target } = payload;
  const { parentNode } = target;

  switch (action.type) {
    case Actions.first:
      return { ...state, target: parentNode ? parentNode.firstChild : null };

    case Actions.last:
      return { ...state, target: parentNode ? parentNode.lastChild : null };
  }
}

export const actions = {
  first: (state: State, target: HTMLElement): State => ({ ...state, target }),
};

export type MyAction = {
  type: keyof typeof actions;
  payload: { target: HTMLElement };
};

export function nyreducer(state: State, action: MyAction) {
  const { payload, type } = action;
  const { target } = payload;

  return actions[type](state, target);
}
