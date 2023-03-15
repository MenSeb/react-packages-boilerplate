import { Action, Actions } from '../utilities/';

export function firstTab(target: HTMLElement): Action {
  return {
    type: Actions.first,
    payload: { target },
  };
}
