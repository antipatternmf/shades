import React, { FC } from "react";

import styled from "./Game.module.css";

import SideBar from "../../components/SideBar";

const Game: FC = () => {

    return (
        <main className="wrapper">
            <SideBar path="/" />
        </main>
    );
};

export default Game;
