import * as React from 'react';
import { Route } from 'react-router-dom';
import { Lost } from '../pages';

export default function LostRoute() {
  return <Route element={<Lost />} path="*" />;
}
