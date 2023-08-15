import * as React from 'react';
import * as UI from '@packages/react-ui';
import { useValue } from '..';

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
  const { changeValue, value } = useValue<HTMLSelectElement>(
    options.includes(defaultValue) ? defaultValue : '',
  );

  return (
    <UI.Select {...props} value={value} onChange={changeValue}>
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
