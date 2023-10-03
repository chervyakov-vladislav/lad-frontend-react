import React from 'react';
import 'normalize.css';
import '../styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import { router } from './routerProvider';
import { store } from './storeProvider';

export const Providers = () => {
  return (
    <React.StrictMode>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </React.StrictMode>
  );
};
