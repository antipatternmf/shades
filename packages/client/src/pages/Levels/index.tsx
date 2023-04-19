import classNames from 'classnames/bind';
import TopBar from 'components/TopBar';
import { Link } from 'react-router-dom';
import GameLevels from 'pages/Game/lib/config/gameElements';
import RatingStar from 'components/icons/RatingStar';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

export default function Levels() {
  return (
    <div className={cx('container', 'shadow')}>
      <TopBar title="Выбрать уровень" />

      <div className={cx(styles.levels)}>
        {GameLevels.map((it, index) => (
          <Link
            key={index}
            className={cx(styles.levels__level, 'shadow')}
            to={`${index}`}
          >
            <div className={cx(styles.levels__subtitle)}>{index}</div>
            <div className={cx(styles.levels__rating)}>
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
