import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PublicLayout } from 'components/PublicLayout';
import { AuthLayout } from 'components/AuthLayout';
import { useFetchServerData } from 'hooks';
import { withRedux, withRouter } from 'hocs';

const Main = lazy(() => import('pages/Main'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignIn = lazy(() => import('pages/SignIn'));
const Profile = lazy(() => import('pages/Profile'));
const LeaderBoard = lazy(() => import('pages/LeaderBoard'));
const Forum = lazy(() => import('pages/Forum'));
const Game = lazy(() => import('pages/Game'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  useFetchServerData();
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route element={<PublicLayout />}>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="forum" element={<Forum />} />
        <Route path="game" element={<Game />} />
      </Route>
      <Route path={'/*'} element={<NotFound />} />
    </Routes>
  );
}

export default withRouter(withRedux(App));
