import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal';
import { useSetGameStatus } from 'reducers/game';
import { setLevelScore } from 'reducers/scores';
import GameCanvas from 'pages/Game/ui/GameCanvas';
import GameLevels from 'pages/Game/lib/config/gameElements';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import TopBar from 'components/TopBar';
import FullScreenBtn from './FullScreenBtn';
import { rateLevelCompletion } from './lib/helpers';
import { ResultsModalContent } from './ui/ResultsModalContent';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Game() {
  const { lvlId } = useParams();
  const lvl = lvlId !== undefined ? parseInt(lvlId, 10) : 0;

  const [currLvl, setCurrLvl] = useState(lvl);
  const [startDateMilliseconds] = useState(Date.now());
  const [finishDateMilliseconds, setFinishDateMilliseconds] = useState<number>(0);
  const [rating, setRating] = useState(0);
  const { gameStatus, onSetGameStatus } = useSetGameStatus();

  const dispatch = useAppDispatch();

  useEffect(() => {
    onSetGameStatus('started');
  }, [onSetGameStatus]);

  useEffect(() => {
    if (gameStatus === 'win') {
      setFinishDateMilliseconds(Date.now());
    }
  }, [gameStatus]);

  useEffect(() => {
    if (startDateMilliseconds && finishDateMilliseconds) {
      setRating(rateLevelCompletion(startDateMilliseconds, finishDateMilliseconds));
    }
  }, [startDateMilliseconds, finishDateMilliseconds]);

  useEffect(() => {
    if (rating && gameStatus === 'win') {
      dispatch(setLevelScore({ levelId: currLvl, score: rating }));
    }
  }, [gameStatus, rating, currLvl, dispatch]);

  return (
    <div className={cx(styles.game, 'shadow')}>
      <TopBar title="Shades." />
      <Modal isOpen={gameStatus === 'win' || gameStatus === 'lose'}>
        <ResultsModalContent
          rating={rating}
          status={gameStatus}
          goToNextLevel={() => {
            setCurrLvl(currLvl + 1);
            onSetGameStatus('started');
          }}
          restartLevel={() => onSetGameStatus('started')}
        />
      </Modal>
      {gameStatus === 'started' && (
        <GameCanvas
          drawablesConfig={GameLevels[currLvl].drawables}
          obstaclesConfig={GameLevels[currLvl].obstacles}
          targetsConfig={GameLevels[currLvl].targets}
        />
      )}
      <FullScreenBtn />
    </div>
  );
}

export default Game;
