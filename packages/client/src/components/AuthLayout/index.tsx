import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Loader from '../Loader';
import { useAppDispatch, useAppSelector } from '../../store';
import { PathTo } from '../../constants';

export default function AuthLayout() {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate(PathTo.SIGN_IN);
    }
  }, [isAuth, navigate, dispatch]);

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
