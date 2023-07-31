import * as React from 'react';
import * as UI from '@packages/react-ui';
import * as ROUTES from '../../utilities/routes';

export function NavigationInfos() {
  return (
    <UI.NavigationMenu
      className="navigation-infos"
      label="informations"
      links={ROUTES.ROUTES_INFOS}
    />
  );
}

export function NavigationMain() {
  return (
    <UI.NavigationMenu
      className="navigation-main"
      label="main"
      links={ROUTES.ROUTES_MAIN}
    />
  );
}

export function NavigationSocials() {
  return (
    <UI.Socials
      className="navigation-socials"
      label="socials media"
      socials={ROUTES.ROUTES_SOCIALS}
    />
  );
}
