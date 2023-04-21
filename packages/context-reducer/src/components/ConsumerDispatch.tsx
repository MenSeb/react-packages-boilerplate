import * as React from 'react';
import { ContextDispatch } from '../contexts';
import { Dispatcher } from '../types';
import { createError } from '../utilities';

type ConsumerDispatchProps = {
  children: (dispatch: Dispatcher) => React.ReactNode;
};

export default function ConsumerDispatch({ children }: ConsumerDispatchProps) {
  return (
    <ContextDispatch.Consumer>
      {(dispatch) => {
        if (dispatch === null) throw createError('ConsumerDispatch');

        return children(dispatch);
      }}
    </ContextDispatch.Consumer>
  );
}
