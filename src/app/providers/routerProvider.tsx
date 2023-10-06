import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, SomePage } from '@/pages';

import { Loadable } from '@/shared/ui';

const importPageModule = (): Promise<{
  Home: React.ComponentType;
  NotFoundPage: React.ComponentType;
}> => import('@/pages');

const Home = Loadable(
  React.lazy(() => importPageModule().then((module) => ({ default: module.Home })))
);

const NotFoundPage = Loadable(
  React.lazy(() => importPageModule().then((module) => ({ default: module.NotFoundPage })))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'films',
        element: <SomePage />,
      },
      {
        path: 'somepage',
        element: <SomePage />,
      },
    ],
  },
]);
