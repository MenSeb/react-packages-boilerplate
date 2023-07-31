import * as React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from './containers';
import {
  About,
  Blog,
  Contact,
  Error,
  Home,
  Lost,
  Projects,
  Services,
} from './pages';

export const routes = (
  <Route element={<Layout />} path="/">
    <Route errorElement={<Error />}>
      <Route element={<Home />} index />
      <Route element={<Services />} path="services" />
      <Route element={<Projects />} path="projects" />
      <Route element={<Blog />} path="blog" />
      <Route element={<About />} path="about" />
      <Route element={<Contact />} path="contact" />
      <Route element={<Lost />} path="*" />
    </Route>
  </Route>
);

export default createBrowserRouter(createRoutesFromElements(routes));
