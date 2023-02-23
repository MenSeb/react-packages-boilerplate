import * as React from 'react';
import { Outlet } from 'react-router-dom';

export function rootLoader() {
  return {};
}

export function rootAction() {
  return {};
}

export function Root() {
  return (
    <>
      <header></header>
      <main>
        <section data-testid="sidebar" />
        <section data-testid="outlet">
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
