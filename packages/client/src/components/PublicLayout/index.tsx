import {
  Link, Outlet, useLocation, useNavigate,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect } from 'react';
import { selectUser, userGet } from 'reducers/user';

const withoutRequest = ['/', '/sign-up', '/sign-in'];

function PublicLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();

  const userInfo = useAppSelector(selectUser.info);
  const status = useAppSelector(selectUser.status);

  useEffect(() => {
    if (!userInfo && !withoutRequest.includes(location.state?.from.pathname)) {
      dispatch(userGet());
    } else if (userInfo) {
      navigate('/');
    }
  }, [dispatch, userInfo, navigate, location.state]);

  if (status === 'pending') return null;

  return (
    <main>
      <Link to="/" state={{ from: location }}>Main</Link>
      <Outlet />
    </main>
  );
}

export default PublicLayout;
