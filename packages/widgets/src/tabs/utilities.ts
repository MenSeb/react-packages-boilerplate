import { Data, DataID, DefaultState, InitialState, State } from './types';

export const defaultState: DefaultState = {
  initialTabIndex: 0,
  orientation: 'horizontal',
  removable: false,
};

export function initializer(state: DefaultState & InitialState): State {
  const datas: Data[] = [];

  for (let index = 0; index < state.numberOfTabs; index++) {
    const id: DataID = `${state.idWidget}-${index}`;

    datas.push({
      deleted: false,
      id,
      idPanel: `${id}-panel`,
      idTab: `${id}-tab`,
      removable: state.removable,
    });
  }

  return {
    ...state,
    datas,
    idActiveTab: datas[state.initialTabIndex].id,
    target: null,
  };
}
