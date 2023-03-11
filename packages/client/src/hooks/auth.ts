import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectUser, userGet } from 'reducers/user';

export function useRestoreAuthSession() {
  const dispatch = useAppDispatch();

  const isAuthorized = useAppSelector(selectUser.isAuth);
  const authRequestStatus = useAppSelector(selectUser.status);

  useEffect(() => {
    if (!isAuthorized && !authRequestStatus) {
      dispatch(userGet());
    }
  }, [authRequestStatus, dispatch, isAuthorized]);
}

export function useProtectRoute() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuthorized = useAppSelector(selectUser.isAuth);
  const authRequestStatus = useAppSelector(selectUser.status);

  useEffect(() => {
    if (!isAuthorized && authRequestStatus === 'rejected') {
      navigate('/sign-in');
    }
  }, [authRequestStatus, dispatch, isAuthorized, navigate]);
}
