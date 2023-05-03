import { Data, DataID, DefaultState, InitialState, State } from './types';

export const defaultState: DefaultState = {
  initialTabIndex: 0,
  orientation: 'horizontal',
  removable: false,
};

export function initializer(initialState: InitialState): State {
  const datas: Data[] = [];

  for (let index = 0; index < initialState.numberOfTabs; index++) {
    const id: DataID = `${initialState.idWidget}-${index}`;

    datas.push({
      deleted: false,
      id,
      idPanel: `${id}-panel`,
      idTab: `${id}-tab`,
      removable: initialState.removable,
    });
  }

  return {
    ...initialState,
    datas,
    idActiveTab: datas[initialState.initialTabIndex].id,
    target: null,
  };
}
