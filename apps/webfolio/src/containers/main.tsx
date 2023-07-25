import * as React from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <div className="wrapper">
        <Outlet />
      </div>
    </main>
  );
}
