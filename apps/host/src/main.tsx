import './index.css';

import { RouterProvider, createHashRouter } from 'react-router-dom';

import { HomePage } from './pages/home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeWrapper } from './components/ThemeWrapper';

const router = createHashRouter([
  {
    path: '/leaderboard',
    lazy: () =>
      import('./pages/leaderboard').then((module) => ({
        element: <module.default />,
      })),
  },
  {
    path: '/:tech',
    lazy: () =>
      import('./pages/challenges').then((module) => ({
        element: <module.default />,
      })),
  },
  {
    path: '/',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeWrapper>
      <RouterProvider router={router} />
    </ThemeWrapper>
  </React.StrictMode>
);
