import React from 'react';
import 'normalize.css';
import { RouterProvider } from 'react-router-dom';

import '../styles/index.scss';

import { router } from './routerProvider';

export const Providers = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
