import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@packages/react-ui';

export default function Main() {
  return (
    <main>
      <Container className="wrapper">
        <Outlet />
      </Container>
    </main>
  );
}
