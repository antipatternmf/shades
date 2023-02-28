import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../store';
import { PathTo } from '../../constants';

export default function AuthLayout() {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(PathTo.SIGN_IN);
    }
  }, [isAuth, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
}
