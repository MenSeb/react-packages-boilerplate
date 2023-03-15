import * as actions from './actions';

export type Target = HTMLElement & {
  parentNode: HTMLElement;
};

export type State = {
  idActiveTab: string | null;
  target: Target | ChildNode | null;
};

export type Payload = {
  target: Target;
};

export type Action = {
  type: keyof typeof actions;
  payload: Payload;
};
