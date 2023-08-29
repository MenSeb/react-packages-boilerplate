import * as React from 'react';
import * as UI from '@packages/react-ui';
import { useValue } from '..';

export type TextAreaProps = Omit<UI.TextAreaProps, 'defaultValue'> & {
  defaultValue?: string;
};

export function TextArea({ defaultValue, ...props }: TextAreaProps) {
  const { changeValue, value } = useValue<HTMLTextAreaElement>({
    defaultValue,
  });

  return <UI.TextArea {...props} value={value} onChange={changeValue} />;
}
