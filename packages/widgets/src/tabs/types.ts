import * as React from 'react';
import { Tab } from './components';

export type Data = {
  deleted?: boolean;
  idTab: `${DataID}-tab`;
  idPanel: `${DataID}-panel`;
  removable?: boolean;
};

export type DataID = `${InitialState['idWidget']}-${number}`;

export type DefaultState = {
  initialTabIndex: number;
  orientation: Orientation;
  removable: boolean;
};

export type InitialState = Partial<DefaultState> & {
  idWidget: string;
  numberOfTabs: number;
} & (Label | Labelledby);

export type Label = {
  label: string;
  labelledby?: never;
};

export type Labelledby = {
  label?: never;
  labelledby: string;
};

export type Options = Omit<InitialState, 'idWidget'> & (Label | Labelledby);

export type Orientation = 'horizontal' | 'vertical';

export type Payload = PayloadChilds | PayloadEvent | PayloadTarget;

export type PayloadChilds = {
  childs: React.ReactElement<React.ComponentProps<typeof Tab>>[];
};

export type PayloadEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type PayloadTarget = {
  target: HTMLButtonElement & {
    parentNode: ParentNode;
  };
};

export type State = (DefaultState & Omit<InitialState, 'initialTabIndex'>) & {
  datas: Data[];
  idActiveTab: string;
  target: EventTarget | ChildNode | null;
};
