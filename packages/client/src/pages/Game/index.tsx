import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Modal from 'components/Modal';
import { useSetGameStatus } from 'reducers/game/useSetGameStatus';
import Button from 'components/Button';
import GameCanvas from 'pages/Game/ui/GameCanvas';
import GameLevels from 'pages/Game/lib/config/gameElements';
import { useParams, useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Game() {
  const { lvlId } = useParams();
  const lvl = lvlId !== undefined ? parseInt(lvlId, 10) : '0';
  const title = 'The best game ♡';
  const { gameStatus, onSetGameStatus } = useSetGameStatus();

  const navigate = useNavigate();
  const [currLvl, setCurrLvl] = useState(lvl as number);

  useEffect(() => {
    onSetGameStatus('started');
  }, [onSetGameStatus]);

  return (
    <div className={cx(styles.game)}>
      <Header title={title} />
      <Modal isOpen={gameStatus !== 'started'}>
        <div className={cx('end-game-modal')}>
          <p className={cx('end-game-modal__title')}>{`You ${gameStatus}`}</p>
          <Button
            className={cx('end-game-modal__button-restart')}
            onClick={() => onSetGameStatus('started')}
          >
            Restart
          </Button>
          <Button
            className={cx('end-game-modal__button-restart')}
            onClick={() => {
              setCurrLvl(currLvl + 1);
              onSetGameStatus('started');
            }}
          >
            Next Level
          </Button>
          <Button
            className={cx('end-game-modal__button-menu')}
            onClick={() => navigate('/')}
          >
            Main menu
          </Button>
        </div>
      </Modal>

      {gameStatus === 'started' && (
        <GameCanvas
          drawablesConfig={GameLevels[currLvl].drawables}
          obstaclesConfig={GameLevels[currLvl].obstacles}
          targetsConfig={GameLevels[currLvl].targets}
        />
      )}
    </div>
  );
}

export default Game;
