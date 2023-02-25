import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import PublicLayout from '../components/PublicLayout';
import { useFetchServerData } from '../hooks';
import { PathTo } from '../constants';

const Main = lazy(() => import('../pages/Main'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Profile = lazy(() => import('../pages/Profile'));
const LeaderBoard = lazy(() => import('../pages/LeaderBoard'));
const Forum = lazy(() => import('../pages/Forum'));
const Game = lazy(() => import('../pages/Game'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
  useFetchServerData();
  return (
    <Routes>
      <Route path={PathTo.MAIN} element={<PublicLayout />}>
        <Route index element={<Main />} />
        <Route path={PathTo.SIGN_UP} element={<SignUp />} />
        <Route path={PathTo.SIGN_IN} element={<SignIn />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={PathTo.PROFILE} element={<Profile />} />
        <Route path={PathTo.LEADERBOARD} element={<LeaderBoard />} />
        <Route path={PathTo.FORUM} element={<Forum />} />
        <Route path={PathTo.GAME} element={<Game />} />
      </Route>
      <Route path={PathTo.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
