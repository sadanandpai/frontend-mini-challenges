import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Challenge from '@/pages/Challenge.tsx';
import './index.css';

const router = createHashRouter([
  {
    path: '/:id',
    element: <Challenge />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
