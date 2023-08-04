import * as React from 'react';
import * as UI from '@packages/react-ui';
import classNames, { Argument } from 'classnames';

export type ScrollProps = Omit<UI.ButtonProps, 'onClick'> & {
  className: Argument;
  scrollOptions: ScrollToOptions;
};

export function Scroll({ className, scrollOptions, ...props }: ScrollProps) {
  const scroll = React.useCallback(() => {
    window.scroll(scrollOptions);
  }, [scrollOptions]);

  return (
    <UI.Button
      {...props}
      className={classNames('scroll', className)}
      onClick={scroll}
    />
  );
}
