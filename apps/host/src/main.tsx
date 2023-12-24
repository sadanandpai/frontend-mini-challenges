import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from './pages/home';
import LeaderboardPage from './pages/leaderboard';
import './index.css';

const router = createHashRouter([
  {
    path: '/leaderboard',
    element: <LeaderboardPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
