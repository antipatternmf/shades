import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal';
import { useSetGameStatus } from 'reducers/game/useSetGameStatus';
import GameCanvas from 'pages/Game/ui/GameCanvas';
import GameLevels from 'pages/Game/lib/config/gameElements';
import { useParams, useNavigate } from 'react-router-dom';
import TopBar from 'components/TopBar';
import RatingStar from 'components/icons/RatingStar';
import RefreshIcon from 'components/icons/RefreshIcon';
import PlayIcon from 'components/icons/PlayIcon';
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
import FullScreenBtn from './FullScreenBtn';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Game() {
  const title = 'Shades.';

  const navigate = useNavigate();

  const { lvlId } = useParams();
  const lvl = lvlId !== undefined ? parseInt(lvlId, 10) : '0';

  const { gameStatus, onSetGameStatus } = useSetGameStatus();

  const [currLvl, setCurrLvl] = useState(lvl as number);

  useEffect(() => {
    onSetGameStatus('started');
  }, [onSetGameStatus]);

  return (
    <div className={cx(styles.game, 'shadow')}>
      <TopBar title={title} />
      <Modal isOpen={gameStatus !== 'started'}>
        <div className={cx(styles.endGame)}>
          <span className={cx(styles.endGame__title)}>{`You ${gameStatus}`}</span>
          <div className={cx(styles.endGame__rating)}>
            <RatingStar />
            <RatingStar />
            <RatingStar />
          </div>
          <div className={cx('endGame__actions')}>
            <button
              className={cx('endGame__action', 'shadow')}
              onClick={() => navigate('/game')}
            >
              <ArrowBackIcon />
            </button>
            {gameStatus === 'lose' ? null : (
              <button
                className={cx('endGame__action', 'next', 'shadow')}
                onClick={() => {
                  setCurrLvl(currLvl + 1);
                  onSetGameStatus('started');
                }}
              >
                <PlayIcon />
              </button>
            )}
            <button
              className={cx('endGame__action', 'shadow')}
              onClick={() => onSetGameStatus('started')}
            >
              <RefreshIcon />
            </button>
          </div>
        </div>
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
