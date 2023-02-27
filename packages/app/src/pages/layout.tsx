import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Main } from '../containers';

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
