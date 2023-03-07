import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from 'components/PublicLayout';
import { ProtectedLayout } from 'components/ProtectedLayout';
import { lazy } from 'react';
import { useFetchUserInfo } from 'hooks/useFetchUserInfo';

const Main = lazy(() => import('pages/Main'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignIn = lazy(() => import('pages/SignIn'));
const Profile = lazy(() => import('pages/Profile'));
const LeaderBoard = lazy(() => import('pages/LeaderBoard'));
const Forum = lazy(() => import('pages/Forum'));
const Game = lazy(() => import('pages/Game'));
const NotFound = lazy(() => import('pages/NotFound'));

export function Router() {
  useFetchUserInfo();
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/" element={<PublicLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="forum" element={<Forum />} />
        <Route path="game" element={<Game />} />
      </Route>
      <Route path={'/*'} element={<NotFound />} />
    </Routes>
  );
}