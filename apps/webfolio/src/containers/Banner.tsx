import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Logo, NavigationMain } from '../components';

export function Banner() {
  return (
    <UI.Header className="banner">
      <UI.Container className="wrapper">
        <Logo
          brand="MenSeb"
          image={{ label: 'developer with React logo', name: 'ImageLogoReact' }}
        />
        <NavigationMain />
      </UI.Container>
    </UI.Header>
  );
}
