import { createBrowserRouter } from 'react-router-dom';
import { Home, MainLayout, NotFoundPage, SomePage } from '@/pages';

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
