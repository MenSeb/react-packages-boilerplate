// export enum ActionsType {
//   first = 'FIRST_TAB',
//   last = 'LAST_TAB',
// }

// export type ActionType = {
//   type: Action;
//   payload: { target: HTMLElement };
// };

export function firstTab(target: HTMLElement): {
  type: 'FIRST_TAB';
  payload: { target: HTMLElement };
} {
  return {
    type: 'FIRST_TAB',
    payload: { target },
  };
}

export function lastTab(target: HTMLElement): {
  type: 'LAST_TAB';
  payload: { target: HTMLElement };
} {
  return {
    type: 'LAST_TAB',
    payload: { target },
  };
}

export type Action = ReturnType<typeof firstTab> | ReturnType<typeof lastTab>;

export type State = {
  target: null | HTMLElement;
};

export const initialState = {
  target: null,
};

export function reducer(state: State, action: Action) {
  const { payload } = action;
  const { target } = payload;
  const { parentNode } = target;

  switch (action.type) {
    case 'FIRST_TAB':
      return { ...state, target: parentNode ? parentNode.firstChild : null };

    case 'LAST_TAB':
      return { ...state, target: parentNode ? parentNode.lastChild : null };
  }
}
