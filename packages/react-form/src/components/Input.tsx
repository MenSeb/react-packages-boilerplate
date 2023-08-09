import * as React from 'react';
import * as UI from '@packages/react-ui';

export type InputProps = Omit<UI.InputProps, 'defaultValue'> & {
  defaultValue?: string;
};

export function Input({ defaultValue = '', ...props }: InputProps) {
  const [value, setValue] = React.useState(defaultValue);

  const updateValue = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    [],
  );

  return <UI.Input {...props} value={value} onChange={updateValue} />;
}
