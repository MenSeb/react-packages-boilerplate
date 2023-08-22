import * as React from 'react';
import * as UI from '@packages/react-ui';
import { useValue } from '..';

export type InputProps = Omit<UI.InputProps, 'defaultValue'> & {
  defaultValue?: string;
};

export function Input({ defaultValue, ...props }: InputProps) {
  const { changeValue, value } = useValue<HTMLInputElement>({ defaultValue });

  return <UI.Input {...props} value={value} onChange={changeValue} />;
}
