import * as React from 'react';
import * as actions from './actions';

export type Data = {
  id: string;
  idTab: string;
  idPanel: string;
};

export type Target = HTMLElement & {
  parentNode: HTMLElement;
};

type OptionsLabel = {
  label: string;
  labelledby?: never;
};

type OptionsLabelledby = {
  label?: never;
  labelledby: string;
};

export type Options = (OptionsLabel | OptionsLabelledby) & {
  initialIndex: number;
  numberOfTabs: number;
  orientation?: 'horizontal' | 'vertical';
};

export type InitializerState = Options & {
  idTabs: string;
};

export type State = InitializerState & {
  datas: Data[];
  idActiveTab: string;
  target: Target | ChildNode | null;
};

export type Payload = {
  target: Target;
};

export type Action = {
  type: keyof typeof actions;
  payload: Payload;
};

export type Dispatch = React.Dispatch<Action>;

export type Reducer = React.Reducer<State, Action>;
