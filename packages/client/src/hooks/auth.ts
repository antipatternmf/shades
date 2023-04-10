import { useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectUser, userGet } from 'reducers/user';
import { getCodeFromUrlSearch, authWithCodeFromUrl } from 'utils/oAuth';

export function useRestoreAuthSession() {
  const dispatch = useAppDispatch();

  const isAuthorized = useAppSelector(selectUser.isAuth);
  const userDataWasRequested = !!useAppSelector(selectUser.status);
  const restoreAuthSessionWasCalledRef = useRef(false);

  const restoreAuthSession = useCallback(async () => {
    if (restoreAuthSessionWasCalledRef.current) {
      return;
    }

    restoreAuthSessionWasCalledRef.current = true;

    if (getCodeFromUrlSearch()) {
      await authWithCodeFromUrl();
    }

    if (!isAuthorized && !userDataWasRequested) {
      dispatch(userGet());
    }
  }, [userDataWasRequested, dispatch, isAuthorized]);

  useEffect(() => {
    restoreAuthSession();
  }, [restoreAuthSession]);
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
