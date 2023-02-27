import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages';

export default function HomeRoute() {
  return <Route element={<Home />} index />;
}
