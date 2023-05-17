import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from 'components/PublicLayout';
import { ProtectedLayout } from 'components/ProtectedLayout';
import { useRestoreAuthSession } from 'hooks/auth';
import { selectUser } from 'reducers/user';
import { useAppSelector } from 'store/hooks';
import LoadingOverlay from 'components/LoadingOverlay';

import MainPage from 'pages/Main';
import SignUpPage from 'pages/Entry/SignUp';
import SignInPage from 'pages/Entry/SignIn';
import ProfilePage from 'pages/Profile';
import LeaderBoardPage from 'pages/LeaderBoard';
import ForumPage from 'pages/Forum';
import ForumThreadPage from 'pages/ForumThread';
import GamePage from 'pages/Game';
import LevelsPage from 'pages/Levels';
import NotFoundPage from 'pages/NotFound';

export enum Paths {
  Root = '/',
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  Profile = 'profile',
  Leaderboard = 'leaderboard',
  Forum = 'forum',
  ForumThread = 'forum/:threadId',
  Levels = 'game',
  Game = 'game/:lvlId',
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
          path={Paths.ForumThread}
          element={<ForumThreadPage />}
        />
        <Route
          path={Paths.Levels}
          element={<LevelsPage />}
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
