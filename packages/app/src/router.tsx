import * as React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Error, Home, Layout, Lost } from './pages';
import { home } from './routes';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route errorElement={<Error />}>
        <Route {...home} element={<Home />} index />
        <Route element={<About />} path="about" />
        <Route element={<Lost />} path="*" />
      </Route>
    </Route>,
  ),
);
