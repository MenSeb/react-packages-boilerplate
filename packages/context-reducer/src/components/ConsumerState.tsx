import * as React from 'react';
import { ContextState } from '../contexts';
import { State } from '../types';
import { createError } from '../utilities';

type ConsumerStateProps = {
  children: (state: State) => React.ReactNode;
};

export default function ConsumerState({
  children,
}: ConsumerStateProps): JSX.Element {
  return (
    <ContextState.Consumer>
      {(state) => {
        if (state === null) throw createError('ConsumerState');

        return children(state);
      }}
    </ContextState.Consumer>
  );
}
