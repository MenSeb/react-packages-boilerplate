import * as React from 'react';
import { Container, Logo } from '@packages/react-ui';
import { NavigationMain } from '../components';

export default function Header() {
  return (
    <header>
      <Container className="wrapper">
        <Logo className="link" brand="MenSeb" image="logo.svg" />
        <NavigationMain />
      </Container>
    </header>
  );
}
