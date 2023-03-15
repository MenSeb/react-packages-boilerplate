import { Action, Actions } from '../utilities';

export function lastTab(target: HTMLElement): Action {
  return {
    type: Actions.last,
    payload: { target },
  };
}
