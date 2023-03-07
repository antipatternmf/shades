import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { selectUser } from 'reducers/user';

export function ProtectedLayout() {
  const navigate = useNavigate();

  const userInfo = useAppSelector(selectUser.info);
  const status = useAppSelector(selectUser.status);

  useEffect(() => {
    if (!userInfo) {
      navigate('/sign-in');
    }
  }, [navigate, userInfo]);

  if (status === 'pending') return null;

  return (
    <main>
      <Link to="/">Main</Link>
      <Outlet />
    </main>
  );
}
