import classNames from 'classnames/bind';

import React, { useState } from 'react';
import Header from 'components/Header';
import LeaderList from 'pages/LeaderBoard/LeaderList';
import { UserResponse } from 'api/chat';
import Leader, { LeaderProps } from 'pages/LeaderBoard/Leader';
import styles from './style.module.pcss';

// ONLY FOR DEMO (START)
const user: UserResponse = {
  id: 0,
  first_name: 'First',
  second_name: 'Second',
  display_name: 'Display',
  login: 'login',
  email: 'mail@mail.com',
  phone: '8800900000',
  avatar:
    'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
};
const leaders: LeaderProps[] = [];
for (let i = 0; i < 10; i += 1) {
  leaders.push({
    user: {
      ...user,
      id: i,
    },
    score: Math.floor(Math.random() * 100),
  });
}
// ONLY FOR DEMO (END)

const cx = classNames.bind(styles);

function LeaderBoard() {
  const title = 'Таблица лидеров';

  const [leadersList] = useState<LeaderProps[]>(leaders);

  return (
    <div className={cx(styles.leaderboard)}>
      <Header title={title} />

      <div className={cx('page-content')}>
        <LeaderList>
          {leadersList.map((leader: LeaderProps) => (
            <Leader
              key={leader.user.id}
              score={leader.score}
              user={leader.user}
            />
          ))}
        </LeaderList>
      </div>
    </div>
  );
}

export default LeaderBoard;
