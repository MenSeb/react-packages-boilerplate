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

## Installation

```bash
npm install --save @react/theme
```

**N.B.** This package depends on React.

## How it works

On load, check if theme is stored in localStorage.

- If true, loads theme from localStorage;
- If false, loads theme from user system preference;

On `toggleTheme` or `MediaQuery onChange`, updates theme and saves to localStorage.

## How to use

See how to use each hooks and consumers from [react-context-reducer](../context-reducer/README.md).

You can pass any props to `ThemeButton` and `ThemeIcon` i.e. `className`, `style`, etc.

### Imports

```jsx
import * as Theme from '@react/theme';
```

```jsx
import {
  ConsumerDispatch,
  ConsumerReducer,
  ConsumerState,
  Provider,
  ThemeButton,
  ThemeIcon,
  useContextDispatch,
  useContextReducer,
  useContextState,
} from '@react/theme';
```

### Provider

```jsx
import * as React from 'react';
import * as Theme from '@react/theme';

export function ComponentProvider({ children }) {
  return <Theme.Provider>{children}</Theme.Provider>;
}
```
