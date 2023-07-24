import * as React from 'react';
import { NavigationMenu } from '@packages/react-ui';
import { ROUTES_INFOS } from '../../utilities';

export function NavigationInfos() {
  return (
    <NavigationMenu
      className="navigation-infos"
      label="informations"
      links={ROUTES_INFOS}
    />
  );
}
