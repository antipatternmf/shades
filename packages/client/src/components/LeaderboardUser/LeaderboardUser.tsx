import React, { FC } from "react";

import styled from "./LeaderboardUser.module.css";

type LeaderboardUserProps = {
    count: number;
    nickname: string;
    score: number;
};

const LeaderboardUser: FC<LeaderboardUserProps> = ({ count, nickname, score }) => {
    return (
        <li className={styled.leaderboard__user}>
            <span className={styled.leaderboard__userCount}>
                {count}
            </span>
            <div className={styled.leaderboard__userLogo}>

            </div>
            <p className={styled.leaderboard__userName}>
                {nickname}
            </p>
            <span className={styled.leaderboard__userScore}>
                {score}
            </span>
        </li>
    );
};

export default LeaderboardUser;
