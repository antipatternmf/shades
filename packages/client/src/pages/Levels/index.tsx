import classNames from 'classnames/bind';
import TopBar from 'components/TopBar';
import GameLevels from 'pages/Game/lib/config/gameElements';
import { LevelTile } from './LevelTile';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

export default function Levels() {
  return (
    <div className={cx('container', 'shadow')}>
      <TopBar title="Выбрать уровень" />

      <div className={cx(styles.levels)}>
        {GameLevels.map((_, index) => (
          <LevelTile
            key={index}
            levelId={index}
          />
        ))}
      </div>
    </div>
  );
}
