import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'reducers/user';

export function PublicLayout() {
  const isAuth = useAppSelector(selectUser.isAuth);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
}
