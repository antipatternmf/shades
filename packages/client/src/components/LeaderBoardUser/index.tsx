import React from 'react';
import styled from './index.module.pcss';

type LeaderBoardUserProps = {
  count: number;
  nickname: string;
  score: number;
};

function LeaderBoardUser({ count, nickname, score }: LeaderBoardUserProps) {
  return (
    <li className={styled.leaderboard__user}>
      <span className={styled.leaderboard__userCount}>
        {count}
      </span>
      <div className={styled.leaderboard__userLogo} />
      <p className={styled.leaderboard__userName}>
        {nickname}
      </p>
      <span className={styled.leaderboard__userScore}>
        {score}
      </span>
    </li>
  );
}

export default LeaderBoardUser;
