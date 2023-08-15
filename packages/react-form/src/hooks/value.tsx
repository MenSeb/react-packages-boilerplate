import * as React from 'react';

export type ChangeElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export function useValue<GenericElement extends ChangeElement>(
  defaultValue = '',
) {
  const [value, setValue] = React.useState(defaultValue);

  const changeValue = React.useCallback(
    (event: React.ChangeEvent<GenericElement>) => {
      setValue(event.currentTarget.value);
    },
    [],
  );

  return { changeValue, value };
}
