import * as React from 'react';
import * as UI from '@packages/react-ui';

export type TextAreaProps = Omit<UI.TextAreaProps, 'defaultValue'> & {
  defaultValue?: string;
};

export function TextArea({ defaultValue = '', ...props }: TextAreaProps) {
  const [value, setValue] = React.useState(defaultValue);

  const updateValue = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.currentTarget.value);
    },
    [],
  );

  return <UI.TextArea {...props} value={value} onChange={updateValue} />;
}
