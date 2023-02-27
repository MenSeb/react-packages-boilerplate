import * as React from 'react';
import { Route } from 'react-router-dom';
import { About } from '../pages';

export default function AboutRoute() {
  return <Route element={<About />} path="/about" />;
}
