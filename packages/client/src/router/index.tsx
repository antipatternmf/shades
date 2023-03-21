import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from 'components/PublicLayout';
import { ProtectedLayout } from 'components/ProtectedLayout';
import { lazy } from 'react';
import { useRestoreAuthSession } from 'hooks/auth';
import { selectUser } from 'reducers/user';
import { useAppSelector } from 'store/hooks';
import LoadingOverlay from 'components/LoadingOverlay';

const MainPage = lazy(() => import('pages/Main'));
const SignUpPage = lazy(() => import('pages/Entry/SignUp'));
const SignInPage = lazy(() => import('pages/Entry/SignIn'));
const ProfilePage = lazy(() => import('pages/Profile'));
const LeaderBoardPage = lazy(() => import('pages/LeaderBoard'));
const ForumPage = lazy(() => import('pages/Forum'));
const GamePage = lazy(() => import('pages/Game'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

export enum Paths {
  Root = '/',
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  Profile = 'profile',
  Leaderboard = 'leaderboard',
  Forum = 'forum',
  Game = 'game',
}

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
        element={<MainPage />}
      />

      <Route
        path={Paths.Root}
        element={<PublicLayout />}
      >
        <Route
          path={Paths.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={Paths.SignUp}
          element={<SignUpPage />}
        />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route
          path={Paths.Profile}
          element={<ProfilePage />}
        />
        <Route
          path={Paths.Leaderboard}
          element={<LeaderBoardPage />}
        />
        <Route
          path={Paths.Forum}
          element={<ForumPage />}
        />
        <Route
          path={Paths.Game}
          element={<GamePage />}
        />
      </Route>
      <Route
        path={'/*'}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
