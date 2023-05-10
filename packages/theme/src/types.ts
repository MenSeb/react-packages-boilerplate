export type Payload = React.UIEvent;

export type State = {
  theme: Theme;
};

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type DefaultState = {
  theme: Theme;
};

export type InitialState = undefined;
