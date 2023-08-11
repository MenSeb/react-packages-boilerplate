import * as React from 'react';
import * as UI from '@packages/react-ui';

export type FormProps = Omit<UI.FormProps, 'onSubmit'> & {
  onSubmit: (formData: FormData) => void;
};

export function Form({ onSubmit, ...props }: FormProps) {
  const submitForm = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onSubmit(new FormData(event.currentTarget));
    },
    [onSubmit],
  );

  return <UI.Form {...props} onSubmit={submitForm} />;
}
