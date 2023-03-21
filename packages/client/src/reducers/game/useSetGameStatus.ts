import { useAppDispatch } from 'store/hooks';
import { GameStatus, selectGame, setGameStatus } from 'reducers/game';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

export function useSetGameStatus() {
  const dispatch = useAppDispatch();

  const gameStatus = useSelector(selectGame.status);

  const onSetGameStatus = useCallback(
    (status: GameStatus) => {
      dispatch(setGameStatus(status));
    },
    [dispatch],
  );

  return {
    gameStatus,
    onSetGameStatus,
  };
}
