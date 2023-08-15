export type Payload = React.UIEvent;

export interface State {
  theme: Theme;
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface DefaultState {
  theme: Theme;
}

export interface InitialState {
  theme?: Theme;
}
