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
  - [Import](#import)
  - [Provider](#provider)
  - [Examples](#examples)
    - [ButtonDark with IconDark](#buttondark-with-icondark)
    - [ButtonLight with IconLight](#buttonlight-with-iconlight)
    - [ButtonToggle with icons](#buttontoggle-with-icons)
  - [Selectors](#selectors)
    - [ButtonDark](#buttondark)
    - [ButtonLight](#buttonlight)
    - [ButtonToggle](#buttontoggle)
    - [IconDark](#icondark)
    - [IconLight](#iconlight)

## Installation

```bash
npm install --save @packages/react-theme
```

**N.B.** This package depends on React.

## How it works

On load, check if the theme is stored in localStorage.

- If true, loads the theme from localStorage;
- If false, loads the theme from user system preference;

Whenever the user system preference change, i.e. `MediaQuery onChange`, or the theme change, i.e. `toggleTheme`, `setThemeDark` or `setThemeLight`, it updates the theme and saves it to localStorage.

## How to use

See how to use each hooks and consumers from [react-context-reducer](../context-reducer/README.md).

Available state and actions are:

```js
/* theme "light" or "dark" */
state.theme;

/* toggle between dark and light theme. */
dispatch.toggleTheme();

/* set the theme to dark. */
dispatch.setThemeDark();

/* set the theme to light. */
dispatch.setThemeLight();
```

You can pass any additional props, i.e. `className`, `style`, `id`, etc. onto each Theme components:

- `ButtonDark`
- `ButtonLight`
- `ButtonToggle`
- `IconDark`
- `IconLight`

### Import

```jsx
import * as Theme from '@packages/react-theme';

const {
  ButtonDark,
  ButtonLight,
  ButtonToggle,
  ConsumerDispatch,
  ConsumerReducer,
  ConsumerState,
  IconDark,
  IconLight,
  Provider,
  useContextDispatch,
  useContextReducer,
  useContextState,
} = Theme;
```

### Provider

```jsx
import * as React from 'react';
import * as Theme from '@packages/react-theme';

export function App() {
  return <Theme.Provider>{...}</Theme.Provider>;
}
```

### Examples

#### ButtonDark with IconDark

```jsx
import * as React from 'react';
import * as Theme from '@packages/react-theme';

export function Component() {
  return (
    <Theme.ButtonDark>
      <Theme.IconDark />
      Dark theme
    </Theme.ButtonDark>
  );
}
```

#### ButtonLight with IconLight

```jsx
import * as React from 'react';
import * as Theme from '@packages/react-theme';

export function Component() {
  return (
    <Theme.ButtonLight>
      <Theme.IconLight />
      Light theme
    </Theme.ButtonLight>
  );
}
```

#### ButtonToggle with icons

```jsx
import * as React from 'react';
import * as Theme from '@packages/react-theme';

export function Component() {
  return (
    <Theme.ButtonToggle>
      <Theme.IconDark />
      <Theme.IconLight />
      Toggle theme
    </Theme.ButtonToggle>
  );
}
```

### Selectors

#### ButtonDark

```css
[data-theme="dark"]
[type="button"]

/* when theme is dark */
[aria-pressed="true"]

/* when theme is light */
[aria-pressed="false"]
```

#### ButtonLight

```css
[data-theme="light"]
[type="button"]

/* when theme is dark */
[aria-pressed="false"]

/* when theme is light */
[aria-pressed="true"]
```

#### ButtonToggle

```css
[type="button"]

/* when theme is dark */
[data-theme="dark"]
[aria-pressed="true"]

/* when theme is light */
[data-theme="light"]
[aria-pressed="false"]
```

#### IconDark

```css
[data-theme="dark"]
[aria-hidden="true"]

/* when theme is dark */
[data-hidden="false"]

/* when theme is light */
[data-hidden="true"]
```

#### IconLight

```css
[data-theme="light"]
[aria-hidden="true"]

/* when theme is dark */
[data-hidden="true"]

/* when theme is light */
[data-hidden="false"]
```
