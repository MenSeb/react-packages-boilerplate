import * as React from 'react';
import { Socials } from '@packages/react-ui';
import { ROUTES_SOCIALS } from '../../utilities';

export function NavigationSocials() {
  return (
    <Socials
      className="navigation-socials"
      label="socials media"
      socials={ROUTES_SOCIALS}
    />
  );
}
