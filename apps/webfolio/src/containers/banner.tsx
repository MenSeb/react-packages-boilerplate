import * as React from 'react';
import { Container, Header, Logo } from '@packages/react-ui';
import { NavigationMain } from '../components';

export default function Banner() {
  return (
    <Header className="banner">
      <Container className="wrapper">
        <Logo className="link" brand="MenSeb" image="logo.svg" />
        <NavigationMain />
      </Container>
    </Header>
  );
}
