import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/pages';

import { Loadable } from '@/shared/ui';

const importPageModule = (): Promise<{
  Home: React.ComponentType;
  NotFoundPage: React.ComponentType;
  Films: React.ComponentType;
  OneFilm: React.ComponentType;
}> => import('@/pages');

const Home = Loadable(
  React.lazy(() => importPageModule().then((module) => ({ default: module.Home })))
);

const NotFoundPage = Loadable(
  React.lazy(() => importPageModule().then((module) => ({ default: module.NotFoundPage })))
);

const Films = Loadable(
  React.lazy(() => importPageModule().then((module) => ({ default: module.Films })))
);

const OneFilm = Loadable(
  React.lazy(() => importPageModule().then((module) => ({ default: module.OneFilm })))
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
        element: <Films />,
      },
      {
        path: 'films/:filmId',
        element: <OneFilm />,
      },
    ],
  },
]);
