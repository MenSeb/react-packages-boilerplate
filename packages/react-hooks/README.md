<div align="center">
    <img
        alt="react hooks logo"
        height="250"
        src="logo.svg"
        width="250"
    />
    <h1>
        React Hooks
    </h1>
    <p>
        Functional hooks for React components.
    </p>
</div>

<hr>

## Table of contents

- [Installation](#installation)
- [Import](#import)
- [Hooks](#hooks)

## Installation

```bash
npm install --save @packages/react-hooks
```

## Import

```js
import * as ReactHooks from '@packages/react-hooks';

const { useMatchMedia } = ReactHooks;
```

## Hooks

### useMatchMedia

```js
import * as React from 'react';
import * as ReactHooks from '@packages/react-hooks';

function Component() {
  const mediaListener = React.useCallback((event) => {
    const { matches } = event;

    // Do something with matches
  }, []);

  const { matches } = ReactHooks.useMatchMedia(
    '(max-width: 480px)',
    mediaListener,
  );

  return (
    <span>
      {matches
        ? 'screen is smaller or equal to 480px'
        : 'screen is larger than 480px'}
    </span>
  );
}
```
