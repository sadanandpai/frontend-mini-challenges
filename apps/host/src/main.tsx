import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from './pages/home';
import LeaderboardPage from './pages/leaderboard';
import './index.css';
import { UserProfile } from './components/modules/leaderboard/userprofile';
import Challenges from './pages/challenges';
import { ThemeWrapper } from './components/ThemeWrapper';

const router = createHashRouter([
  {
    path: '/leaderboard',
    element: <LeaderboardPage />,
  },
  {
    path: '/:tech',
    element: <Challenges />,
  },
  {
    path: '/profile/:githubid',
    element: <UserProfile />,
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
