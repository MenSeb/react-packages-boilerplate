import * as React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Error, Home, Layout, Login, Lost } from './pages';
import { login } from './routes';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route errorElement={<Error />}>
        <Route element={<Home />} index />
        <Route element={<About />} path="about" />
        <Route {...login} element={<Login />} path="login" />
        <Route element={<Lost />} path="*" />
      </Route>
    </Route>,
  ),
);
