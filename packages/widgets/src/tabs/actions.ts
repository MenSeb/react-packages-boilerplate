import {
  State,
  Payload,
  PayloadEvent,
  PayloadChilds,
  PayloadTarget,
} from './types';

export function firstTab(state: State, payload: Payload): State {
  const { currentTarget } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    currentTarget: currentTarget.parentNode.firstChild,
  };
}

export function lastTab(state: State, payload: Payload): State {
  const { currentTarget } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    currentTarget: currentTarget.parentNode.lastChild,
  };
}

export function nextTab(state: State, payload: Payload): State {
  const { currentTarget } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    currentTarget: currentTarget.nextSibling
      ? currentTarget.nextSibling
      : currentTarget.parentNode.firstChild,
  };
}

export function prevTab(state: State, payload: Payload): State {
  const { currentTarget } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    currentTarget: currentTarget.previousSibling
      ? currentTarget.previousSibling
      : currentTarget.parentNode.lastChild,
  };
}

export function registerTab(state: State, payload: Payload): State {
  const { childs } = payload as PayloadChilds;

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

export function removeTab(state: State, payload: Payload): State {
  const { currentTarget } = payload as PayloadEvent & PayloadTarget;

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

export function selectTab(state: State, payload: Payload): State {
  const { currentTarget } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    idActiveTab: currentTarget.id,
    currentTarget: currentTarget,
  };
}
