import './index.css';

import { RouterProvider, createHashRouter } from 'react-router-dom';

import Challenge from '@/pages/Challenge.tsx';
import Challenges from '@/pages/Challenges.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

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
    element: <Challenges />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
