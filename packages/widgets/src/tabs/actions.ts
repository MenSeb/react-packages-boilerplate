import { State, PayloadEvent, PayloadChilds, PayloadTarget } from './types';

export function firstTab(
  state: State,
  { currentTarget }: PayloadEvent & PayloadTarget,
): State {
  return {
    ...state,
    currentTarget: currentTarget.parentNode.firstChild,
  };
}

export function lastTab(
  state: State,
  { currentTarget }: PayloadEvent & PayloadTarget,
): State {
  return {
    ...state,
    currentTarget: currentTarget.parentNode.lastChild,
  };
}

export function nextTab(
  state: State,
  { currentTarget }: PayloadEvent & PayloadTarget,
): State {
  return {
    ...state,
    currentTarget: currentTarget.nextSibling
      ? currentTarget.nextSibling
      : currentTarget.parentNode.firstChild,
  };
}

export function prevTab(
  state: State,
  { currentTarget }: PayloadEvent & PayloadTarget,
): State {
  return {
    ...state,
    currentTarget: currentTarget.previousSibling
      ? currentTarget.previousSibling
      : currentTarget.parentNode.lastChild,
  };
}

export function registerTab(state: State, { childs }: PayloadChilds): State {
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

export function removeTab(
  state: State,
  { currentTarget }: PayloadEvent & PayloadTarget,
): State {
  const indexTab = state.datas.findIndex(
    (data) => data.id === currentTarget.id,
  );

  if (!state.datas[indexTab]?.removable) return state;

  const datas = [...state.datas];

  datas[indexTab].deleted = true;

  return {
    ...state,
    datas,
    currentTarget:
      state.idActiveTab === currentTarget.id
        ? currentTarget.nextSibling
          ? currentTarget.nextSibling
          : currentTarget.previousSibling
        : state.currentTarget,
  };
}

export function selectTab(
  state: State,
  { currentTarget }: PayloadEvent & PayloadTarget,
): State {
  return {
    ...state,
    idActiveTab: currentTarget.id,
    currentTarget: currentTarget,
  };
}
