import { useEffect } from 'react';
import { selectUser, userGet } from 'reducers/user';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useFetchUserInfo = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(selectUser.info);
  const status = useAppSelector(selectUser.status);

  useEffect(() => {
    if (!data) {
      dispatch(userGet());
    }
  }, [dispatch, data]);

  return { data, status };
};
