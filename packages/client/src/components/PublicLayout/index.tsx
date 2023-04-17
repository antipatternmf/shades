import { Outlet } from 'react-router-dom';

export function PublicLayout() {
  return (
    <main className="wrapper">
      <Outlet />
    </main>
  );
}
