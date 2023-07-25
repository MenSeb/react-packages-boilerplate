import * as React from 'react';
import { Logo } from '@packages/react-ui';
import { NavigationMain } from '../components';

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <Logo className="logo" brand="MenSeb" image="logo.svg" />
        <NavigationMain />
      </div>
    </header>
  );
}
