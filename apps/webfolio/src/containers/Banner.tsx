import * as React from 'react';
import * as UI from '@packages/react-ui';
import { NavigationMain } from '../components';

export function Banner() {
  return (
    <UI.Header className="banner">
      <UI.Container className="wrapper">
        <UI.Logo brand="MenSeb" image="logo.svg" />
        <NavigationMain />
      </UI.Container>
    </UI.Header>
  );
}
