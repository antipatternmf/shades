import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Loader from '../Loader';
import { PathTo } from '../../constants';

export default function AuthLayout() {
  const isAuth = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(PathTo.SIGN_IN);
    }
  }, [isAuth, navigate]);

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
