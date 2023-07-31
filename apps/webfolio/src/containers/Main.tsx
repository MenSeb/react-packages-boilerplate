import * as React from 'react';
import { Outlet } from 'react-router-dom';
import * as UI from '@packages/react-ui';

export function Main() {
  return (
    <UI.Main>
      <UI.Container className="wrapper">
        <Outlet />
      </UI.Container>
    </UI.Main>
  );
}
