export enum Actions {
  first = 'FIRST_TAB',
  last = 'LAST_TAB',
  next = 'NEXT_TAB',
  prev = 'PREV_TAB',
  select = 'SELECT_TAB',
}

export type Payload = {
  target: HTMLElement;
};

export type Action = {
  type: Actions;
  payload: Payload;
};
