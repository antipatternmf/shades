import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';

export default function AuthLayout() {
  const isAuth = true;
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/sign-in');
  }

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
