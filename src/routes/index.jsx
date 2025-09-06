import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Discover = lazy(() => import('../pages/movies/Discover'));
const Watchlist = lazy(() => import('../pages/watchlist/Index'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/discover', element: <Discover /> },
  { 
    path: '/watchlist', 
    element: <PrivateRoute><Watchlist /></PrivateRoute> 
  }
];