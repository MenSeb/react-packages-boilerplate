<div align="center">
    <img
        alt="context reducer logo"
        height="250"
        src="logo.svg"
        width="250"
    />
    <h1>
        React Context Reducer
    </h1>
    <p>
        React context with reducer and actions.
    </p>
</div>

<hr>

## Table of contents

- [Installation](#installation)
- [How it works](#how-it-works)
- [How to use](#how-to-use)
- [Import](#import)
- [Provider](#provider)
- [Hooks](#hooks)
  - [useContextReducer](#usecontextreducer)
  - [useContextDispatch](#usecontextdispatch)
  - [useContextState](#usecontextstate)
- [Consumers](#consumers)
  - [Consumer](#consumer)
  - [ConsumerDispatch](#consumerdispatch)
  - [ConsumerState](#consumerstate)

## Installation

```bash
npm install --save @packages/react-context-reducer
```

**N.B.** This package depends on React.

## How it works

The main goal of this package was to avoid having to define your own reducer function using a javascript [switch](https://react.dev/reference/react/useReducer#writing-the-reducer-function). Instead, it creates the reducer function with your own actions using the reducer hook from React, [useReducer](https://react.dev/reference/react/useReducer). It also enhance the `dispatch` function by binding it to your actions names.

**How you would normally use the dispatch function:**

```js
dispatch({ type: 'action2', payload: { foo: 'foo' } });
```

**How you would now use the dispatch function:**

```js
dispatch.action2({ foo: 'foo' });
```

Each of your action should be a function which receives the current state and a payload and returns an updated state.

**Example:**

```js
export function action1(state) {
  return { ...state, bar: 'bar' };
}

export function action2(state, payload) {
  return { ...state, foo: payload.foo };
}

export function action3(state, payload) {
  return { ...state, ...payload };
}
```

You may also provide an initial state and an initializer function to give you more flexibility on your initial setup.

**Example:**

```javascript
export const initialState = {
  bar: 'bar',
};

export function initializer(initialState) {
  return { ...initialState, baz: 'baz' };
}
```

## How to use

### Import

```js
import { createContextReducer } from '@packages/react-context-reducer';
```

### Setup

```js
const ContextReducer = createContextReducer({
  actions,
  initializer,
  initialState,
});

const {
  ConsumerDispatch,
  ConsumerReducer,
  ConsumerState,
  Provider,
  useContextDispatch,
  useContextReducer,
  useContextState,
} = ContextReducer;

export default ContextReducer;
```

### Provider

Setup the provider with your actions, initial state and initializer function.

```jsx
import * as React from 'react';
import ContextReducer from 'path-to-setup';

export function ComponentProvider({ children }) {
  return <ContextReducer.Provider>{children}</ContextReducer.Provider>;
}
```

### Hooks

#### useContextReducer

```jsx
import * as React from 'react';
import ContextReducer from 'path-to-setup';

export function ComponentHook() {
  const { dispatch, state } = ContextReducer.useContextReducer();

  return (
    <button onClick={() => dispatch.action2({ foo: 'foo' })}>
      {state.foo ? state.foo : state.bar}
    </button>
  );
}
```

#### useContextDispatch

```jsx
import * as React from 'react';
import ContextReducer from 'path-to-setup';

export function ComponentHookDispatch() {
  const { dispatch } = ContextReducer.useContextDispatch();

  return (
    <button onClick={() => dispatch.action2({ foo: 'foo' })}>
      Dispatch foo
    </button>
  );
}
```

#### useContextState

```jsx
import * as React from 'react';
import ContextReducer from 'path-to-setup';

export function ComponentHookState() {
  const { state } = ContextReducer.useContextState();

  return (
    <p>
      <span>{state.bar}</span>
      <span>{state.baz}</span>
    </p>
  );
}
```

### Consumers

#### Consumer

```jsx
import * as React from 'react';
import ContextReducer from 'path-to-setup';

export function ComponentConsumer() {
  return (
    <ContextReducer.Consumer>
      {({ dispatch, state }) => (
        <button onClick={() => dispatch.action2({ foo: 'foo' })}>
          {state.foo ? state.foo : state.bar}
        </button>
      )}
    </ContextReducer.Consumer>
  );
}
```

#### ConsumerDispatch

```jsx
import * as React from 'react';
import ContextReducer from 'path-to-setup';

export function ComponentConsumerDispatch() {
  return (
    <ContextReducer.ConsumerDispatch>
      {({ dispatch }) => (
        <button onClick={() => dispatch.action2({ foo: 'foo' })}>
          Dispatch foo
        </button>
      )}
    </ContextReducer.ConsumerDispatch>
  );
}
```

#### ConsumerState

```jsx
import * as React from 'react';
import ContextReducer from 'path-to-setup';

export function ComponentConsumerState() {
  return (
    <ContextReducer.ConsumerState>
      {({ state }) => (
        <p>
          <span>{state.bar}</span>
          <span>{state.baz}</span>
        </p>
      )}
    </ContextReducer.ConsumerState>
  );
}
```
