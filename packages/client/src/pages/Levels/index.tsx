import classNames from 'classnames/bind';
import React from 'react';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
import GameLevels from 'pages/Game/lib/config/gameElements';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

export default function Levels() {
  return (
    <div className={cx(styles.levels)}>
      <Header title="Уровни" />
      <div className={cx(styles.levelsSelector)}>
        {GameLevels.map((it, index) => (
          <Link
            className={cx('default-button')}
            to={`${index}`}
          >
            {index}
          </Link>
        ))}
      </div>
    </div>
  );
}
