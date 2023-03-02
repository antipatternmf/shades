import React from 'react';
import LeaderBoardUser from '../../components/LeaderBoardUser';
import SideBar from '../../components/SideBar';
import styled from './index.module.pcss';

function LeaderBoard() {
  const arr = [
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
    {
      nickname: 'Nick_Name',
      score: 10000,
    },
  ];

  return (
    <main className="wrapper">
      <div className={['container', styled.leaderboard].join(' ')}>
        <ul className={styled.leaderboard__list}>
          {
            arr.map((user, count) => (
              <LeaderBoardUser
                key={Math.random()}
                count={count + 1}
                nickname={user.nickname}
                score={user.score}
              />
            ))
          }
        </ul>
      </div>
      <SideBar path="/" />
    </main>
  );
}

export default LeaderBoard;
