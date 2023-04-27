<div align="center">
    <img
        alt="react theme logo"
        height="250"
        src="logo.svg"
        width="250"
    />
    <h1>
        React Theme
    </h1>
    <p>
        Dark and Light theme with React.
    </p>
</div>

<hr>

## Table of contents

- [Installation](#installation)
- [How it works](#how-it-works)
- [How to use](#how-to-use)
  - [Imports](#imports)
  - [Provider](#provider)
  - [Hooks](#hooks)
    - [useTheme](#usetheme)
    - [useThemeDispatch](#usethemedispatch)
    - [useThemeState](#usethemestate)
  - [Consumers](#consumers)
    - [Consumer](#consumer)
    - [ConsumerDispatch](#consumerdispatch)
    - [ConsumerState](#consumerstate)

## Installation

```
npm install --save @menseb/react-theme
```

**N.B.** This package depends on React.

## How it works

On load, check if theme is stored in localStorage.

- If true, loads theme from localStorage;
- If false, loads theme from user system preference;

On `toggleTheme` or `MediaQuery onChange`, updates theme and saves to localStorage.

## How to use

You can pass any props to `ThemeButton` and `ThemeIcon` i.e. `className`, `style`, etc.

### Imports

```jsx
import * as Theme from '@menseb/react-theme';
```

```jsx
import {
  useTheme,
  useThemeDispatch,
  useThemeState,
  Consumer,
  ConsumerDispatch,
  ConsumerState,
  Providder,
} from '@menseb/react-theme';
```

### Provider

```jsx
import * as React from 'react';
import * as Theme from '@menseb/react-theme';

export function ComponentProvider({ children }) {
  return <Theme.Provider>{children}</Theme.Provider>;
}
```

### Hooks

#### useTheme

```jsx
import * as React from 'react';
import * as Theme from '@menseb/react-theme';

export function ComponentHook() {
  const { dispatch, state } = Theme.useTheme();

  return (
    <div>
      <p>Current theme: {state.theme}</p>
      <button onClick={dispatch.toggle}>Toggle Theme</button>
    </div>
  );
}
```

#### useThemeDispatch

```jsx
import * as React from 'react';
import * as Theme from '@menseb/react-theme';

export function ComponentHookDispatch() {
  const { dispatch } = Theme.useThemeDispatch();

  return <button onClick={dispatch.toggle}>Toggle Theme</button>;
}
```

#### useThemeState

```jsx
import * as React from 'react';
import * as Theme from '@menseb/react-theme';

export function ComponentHookState() {
  const { state } = Theme.useThemeState();

  return <p>Current theme: {state.theme}</p>;
}
```

### Consumers

#### Consumer

```jsx
import * as React from 'react';
import * as Theme from '@menseb/react-theme';

export function ComponentConsumer() {
  return (
    <Theme.Consumer>
      {({ dispatch, state }) => (
        <div>
          <p>Current theme: {state.theme}</p>
          <button onClick={dispatch.toggle}>Toggle Theme</button>
        </div>
      )}
    </Theme.Consumer>
  );
}
```

#### ConsumerDispatch

```jsx
import * as React from 'react';
import * as Theme from '@menseb/react-theme';

export function ComponentConsumerDispatch() {
  return (
    <Theme.ConsumerDispatch>
      {({ dispatch }) => (
        <button onClick={dispatch.toggle}>Toggle Theme</button>
      )}
    </Theme.ConsumerDispatch>
  );
}
```

#### ConsumerState

```jsx
import * as React from 'react';
import * as Theme from '@menseb/react-theme';

export function ComponentConsumerState() {
  return (
    <Theme.ConsumerState>
      {({ state }) => <p>Current theme: {state.theme}</p>}
    </Theme.ConsumerState>
  );
}
```
