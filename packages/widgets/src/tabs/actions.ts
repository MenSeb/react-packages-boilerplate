import {
  State,
  Payload,
  PayloadEvent,
  PayloadChilds,
  PayloadTarget,
} from './types';

export function firstTab(state: State, payload: Payload): State {
  const { target } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    target: target.parentNode.firstChild,
  };
}

export function lastTab(state: State, payload: Payload): State {
  const { target } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    target: target.parentNode.lastChild,
  };
}

export function nextTab(state: State, payload: Payload): State {
  const { target } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    target: target.nextSibling
      ? target.nextSibling
      : target.parentNode.firstChild,
  };
}

export function prevTab(state: State, payload: Payload): State {
  const { target } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    target: target.previousSibling
      ? target.previousSibling
      : target.parentNode.lastChild,
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
  const { target } = payload as PayloadEvent & PayloadTarget;

  const indexTab = state.datas.findIndex((data) => data.idTab === target.id);

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

export function selectTab(state: State, payload: Payload): State {
  const { target } = payload as PayloadEvent & PayloadTarget;

  return {
    ...state,
    idActiveTab: target.id,
    target: target,
  };
}
