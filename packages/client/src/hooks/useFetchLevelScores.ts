import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectUser } from 'reducers/user';
import { getLevelsScores } from 'reducers/scores';

export function useFetchLevelScores() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectUser.isAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(getLevelsScores());
    }
  }, [dispatch, isAuth]);
}
