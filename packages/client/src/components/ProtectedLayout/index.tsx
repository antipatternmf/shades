import { Outlet } from 'react-router-dom';
import { useProtectRoute } from 'hooks/auth';
import ToggleTheme from 'components/ToggleTheme';

export function ProtectedLayout() {
  useProtectRoute();

  return (
    <main className="wrapper">
      <ToggleTheme />
      <Outlet />
    </main>
  );
}
