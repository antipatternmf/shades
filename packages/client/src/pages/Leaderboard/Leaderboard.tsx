import React, { FC } from "react";

import styled from "./Leaderboard.module.css";

import SideBar from "../../components/SideBar";
import LeaderboardUser from "../../components/LeaderboardUser";

const Leaderboard: FC = () => {

    const arr = [
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
        {
            nickname: "Nick_Name",
            score: 10000,
        },
    ];

    return (
        <main className="wrapper">
            <div className={["container", styled.leaderboard].join(" ")}>
                <ul className={styled.leaderboard__list}>
                    {
                        arr.map((user, count) => (
                            <LeaderboardUser key={count} count={count + 1} nickname={user.nickname} score={user.score} />
                        ))
                    }
                </ul>
            </div>
            <SideBar path="/" />
        </main>
    );
};

export default Leaderboard;
