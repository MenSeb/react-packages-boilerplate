import * as React from 'react';
import * as UI from '@packages/react-ui';

export type SelectProps = Omit<UI.SelectProps, 'defaultValue'> & {
  defaultValue?: string;
  options: string[];
  placeholder: string;
};

export function Select({
  defaultValue = '',
  options,
  placeholder,
  ...props
}: SelectProps) {
  const [value, setValue] = React.useState(
    options.includes(defaultValue) ? defaultValue : '',
  );

  const updateValue = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.currentTarget.value);
    },
    [],
  );

  return (
    <UI.Select {...props} value={value} onChange={updateValue}>
      <UI.Option value="">{placeholder}</UI.Option>
      {options.map((option) => {
        return (
          <UI.Option key={option} value={option}>
            {option}
          </UI.Option>
        );
      })}
    </UI.Select>
  );
}
