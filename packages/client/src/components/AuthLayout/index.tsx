import {
  Link, Outlet, useLocation, useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { selectUser } from 'reducers/user';

export default function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuth = useAppSelector(selectUser.isAuth);
  const status = useAppSelector(selectUser.status);

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in', { state: { from: location } });
    }
  }, [isAuth, navigate, location]);

  if (status === 'pending') return null;

  return (
    <main>
      <Link to="/" state={{ from: location }}>Main</Link>
      <Outlet />
    </main>
  );
}
