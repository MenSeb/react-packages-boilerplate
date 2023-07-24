import * as React from 'react';
import { NavigationMenu } from '@packages/react-ui';
import { ROUTES_MAIN } from '../../utilities';

export function NavigationMain() {
  return (
    <NavigationMenu
      className="navigation-main"
      label="main"
      links={ROUTES_MAIN}
    />
  );
}
