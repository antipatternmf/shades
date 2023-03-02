import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from 'store';

export default function AuthLayout() {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    }
  }, [isAuth, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
}
