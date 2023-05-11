import { Outlet } from 'react-router-dom';
import { useProtectRoute } from 'hooks/auth';
import { useFetchLevelScores } from 'hooks/useFetchLevelScores';
import ToggleTheme from 'components/ToggleTheme';

export function ProtectedLayout() {
  useProtectRoute();
  useFetchLevelScores();

  return (
    <main className="wrapper">
      <ToggleTheme />
      <Outlet />
    </main>
  );
}
