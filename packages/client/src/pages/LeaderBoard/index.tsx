import classNames from 'classnames/bind';
import { useState } from 'react';
import TopBar from 'components/TopBar';
import User from 'pages/LeaderBoard/User';
import SkeletUser from 'pages/LeaderBoard/SkeletUser';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

const usersList = [
  {
    id: 1,
    name: 'John',
    score: 76,
  },
  {
    id: 2,
    name: 'Erik',
    score: 61,
  },
  {
    id: 3,
    name: 'Sven',
    score: 54,
  },
  {
    id: 4,
    name: 'Muller',
    score: 42,
  },
  {
    id: 5,
    name: 'Conor',
    score: 33,
  },
  null,
  null,
  null,
  null,
  null,
];

function LeaderBoard() {
  const title = 'Доска лидеров';

  const [users] = useState(usersList);

  return (
    <div className={cx('container', 'shadow')}>
      <TopBar title={title} />

      <div className={cx(styles.leaderboard)}>
        {users.map((user, i) => {
          if (user === null) {
            return <SkeletUser key={i} />;
          }

          return (
            <User
              key={user.id}
              place={i + 1}
              name={user.name}
              score={user.score}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LeaderBoard;
