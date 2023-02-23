import * as React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  Dashboard,
  dashboardAction,
  dashboardLoader,
  Root,
  rootAction,
  rootLoader,
} from './routes';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      action={rootAction}
      element={<Root />}
      // errorElement={<Error />}
      loader={rootLoader}
      path="/"
    >
      <Route
        action={dashboardAction}
        element={<Dashboard />}
        loader={dashboardLoader}
        path="dashboard"
      ></Route>
    </Route>,
  ),
);
