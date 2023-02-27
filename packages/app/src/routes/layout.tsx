import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Layout } from '../pages';

type LayoutRouteTypes = {
  children: RouteProps['children'];
};

export default function LayoutRoute({ children }: LayoutRouteTypes) {
  return (
    <Route element={<Layout />} path="/">
      {children}
    </Route>
  );
}
