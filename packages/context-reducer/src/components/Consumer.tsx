import * as React from 'react';
import { Context } from '../types';
import { ConsumerDispatch, ConsumerState } from './';

type ConsumerProps = {
  children: (context: Context) => React.ReactNode;
};

export default function Consumer({ children }: ConsumerProps): JSX.Element {
  return (
    <ConsumerDispatch>
      {(dispatch) => (
        <ConsumerState>
          {(state) => children({ dispatch, state })}
        </ConsumerState>
      )}
    </ConsumerDispatch>
  );
}
