import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function Authentication() {
  const { pathname } = useLocation();

  const isAuthenticaed = true;

  return isAuthenticaed ? (
    <Outlet />
  ) : (
    <Navigate
      replace
      state={{
        from: pathname,
        message: 'You must log in first',
      }}
      to="login"
    />
  );
}
