import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from './pages/home';
import LeaderboardPage from './pages/leaderboard';
import './index.css';
import { UserProfile } from './components/leaderboard/userprofile';

const router = createHashRouter([
  {
    path: '/leaderboard',
    element: <LeaderboardPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile/:githubid',
    element: <UserProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
