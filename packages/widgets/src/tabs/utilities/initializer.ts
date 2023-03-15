import { InitializerState, State } from './';

export function initializer(state: InitializerState): State {
  const { idTabs, initialIndex, numberOfTabs } = state;

  const datas = [];

  for (let index = 0; index < numberOfTabs; index++) {
    const id = `${idTabs}-${index}`;

    datas.push({
      id,
      idPanel: `panel-${id}`,
      idTab: `tab-${id}`,
    });
  }

  return {
    ...state,
    datas,
    idActiveTab: datas[initialIndex].id,
    target: null,
  };
}
