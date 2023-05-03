import { State, Payload } from './types';

export function firstTab(state: State, { target }: Payload): State {
  return { ...state, target: target.parentNode.firstChild };
}

export function lastTab(state: State, { target }: Payload): State {
  return { ...state, target: target.parentNode.lastChild };
}

export function nextTab(state: State, { target }: Payload): State {
  return {
    ...state,
    target: target.nextSibling
      ? target.nextSibling
      : target.parentNode.firstChild,
  };
}

export function prevTab(state: State, { target }: Payload): State {
  return {
    ...state,
    target: target.previousSibling
      ? target.previousSibling
      : target.parentNode.lastChild,
  };
}

export function registerTab(state: State, { childs }: Payload): State {
  return {
    ...state,
    datas: state.datas.map((data, index) => {
      const { removable } = childs[index].props;

      return {
        ...data,
        removable: removable === undefined ? data.removable : removable,
      };
    }),
  };
}

export function removeTab(state: State, { target }: Payload): State {
  const indexTab = state.datas.findIndex((data) => data.id === target.id);

  if (!state.datas[indexTab]?.removable) return state;

  const datas = [...state.datas];

  datas[indexTab].deleted = true;

  return {
    ...state,
    datas,
    target:
      state.idActiveTab === target.id
        ? target.nextSibling
          ? target.nextSibling
          : target.previousSibling
        : state.target,
  };
}

export default function selectTab(state: State, { target }: Payload): State {
  return { ...state, target };
}
