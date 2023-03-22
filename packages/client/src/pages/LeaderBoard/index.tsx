import classNames from 'classnames/bind';

import React from 'react';
import Header from 'components/Header';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function LeaderBoard() {
  const title = 'Таблица лидеров';

  return (
    <div className={cx(styles.leaderboard)}>
      <Header title={title} />
    </div>
  );
}

export default LeaderBoard;
