import './index.css';

import { RouterProvider, createHashRouter } from 'react-router-dom';

import { Bugfender } from '@bugfender/sdk';
import Challenge from '@/pages/Challenge.tsx';
import Challenges from '@/pages/Challenges.tsx';
import Home from '@/pages/Home.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

const appKey = '4qTOiIjXmvLeD09teClfkoVZx5daMNyM';

if (window.location.hostname !== 'localhost') {
  Bugfender.init({
    appKey,
  });
}

const router = createHashRouter([
  {
    path: '/:id',
    element: <Challenge />,
  },
  {
    path: '/challenges',
    element: <Challenges />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
