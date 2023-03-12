import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from 'components/PublicLayout';
import { ProtectedLayout } from 'components/ProtectedLayout';
import { lazy } from 'react';
import { useRestoreAuthSession } from 'hooks/auth';
import { selectUser } from 'reducers/user';
import { useAppSelector } from 'store/hooks';
import LoadingOverlay from 'components/LoadingOverlay';

const Main = lazy(() => import('pages/Main'));
const SignUp = lazy(() => import('pages/Entry/SignUp'));
const SignIn = lazy(() => import('pages/Entry/SignIn'));
const Profile = lazy(() => import('pages/Profile'));
const LeaderBoard = lazy(() => import('pages/LeaderBoard'));
const Forum = lazy(() => import('pages/Forum'));
const Game = lazy(() => import('pages/Game'));
const NotFound = lazy(() => import('pages/NotFound'));

export function Router() {
  const isAuthorized = useAppSelector(selectUser.status);
  const userSliceStatus = useAppSelector(selectUser.status);

  useRestoreAuthSession();

  if (userSliceStatus === 'pending' && !isAuthorized) {
    return <LoadingOverlay />;
  }

  return (
    <Routes>
      <Route
        index
        element={<Main />}
      />
      <Route
        path="/"
        element={<PublicLayout />}
      >
        <Route
          path="sign-in"
          element={<SignIn />}
        />
        <Route
          path="sign-up"
          element={<SignUp />}
        />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route
          path="profile"
          element={<Profile />}
        />
        <Route
          path="leaderboard"
          element={<LeaderBoard />}
        />
        <Route
          path="forum"
          element={<Forum />}
        />
        <Route
          path="game"
          element={<Game />}
        />
      </Route>
      <Route
        path={'/*'}
        element={<NotFound />}
      />
    </Routes>
  );
}
