import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../src';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
