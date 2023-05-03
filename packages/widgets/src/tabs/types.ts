import * as React from 'react';
import { Tab } from './components';

// export type OptionsBase = {
//   initialIndex: number;
//   numberOfTabs: number;
//   orientation?: 'horizontal' | 'vertical';
// };

// export type OptionsLabel = {
//   label: string;
//   labelledby?: never;
// };

// export type OptionsLabelledby = {
//   label?: never;
//   labelledby: string;
// };

// export type Options = OptionsBase & (OptionsLabel | OptionsLabelledby);

/* */

export type Data = {
  deleted?: boolean;
  id: string;
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

export type InitialState = {
  idWidget: string;
  initialTabIndex?: number;
  numberOfTabs: number;
  orientation?: Orientation;
  removable?: boolean;
};

export type Orientation = 'horizontal' | 'vertical';

export type State = Omit<InitialState, 'initialTabIndex'> & {
  datas: Data[];
  idActiveTab: string;
  target: Target | ChildNode | null;
};

export type Payload = {
  childs: React.ReactElement<React.ComponentProps<typeof Tab>>[];
} & (React.UIEvent & { target: Target });

export type Target = HTMLElement & {
  parentNode: HTMLElement;
};
