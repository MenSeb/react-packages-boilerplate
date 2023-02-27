import * as React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Home, Layout, Lost } from './pages';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route element={<Home />} index />
      <Route element={<About />} path="about" />
      <Route element={<Lost />} path="*" />
    </Route>,
  ),
);
