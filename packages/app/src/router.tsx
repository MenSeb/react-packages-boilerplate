import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AboutRoute, HomeRoute, LayoutRoute, LostRoute } from '././routes';

export default createBrowserRouter(
  createRoutesFromElements(
    <LayoutRoute>
      <HomeRoute />
      <AboutRoute />
      <LostRoute />
    </LayoutRoute>,
  ),
);
