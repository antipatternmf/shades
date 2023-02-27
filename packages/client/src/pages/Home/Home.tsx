import React, { FC } from "react";

// import { Link } from "react-router-dom";

import styled from "./Home.module.css";

const Home: FC = () => {

    return (
        <main className="wrapper">
            <div className={styled.home}>
                <h1 className={styled.home__title}>
                    <span>S</span>
                    <span>h</span>
                    <span>a</span>
                    <span>d</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
                <ul className={styled.home__list}>
                    <li className={styled.home__item}>
                        {/* <Link to="/game" className={styled.home__link}>
                            Играть
                        </Link> */}
                        <a href="" className={styled.home__link}>
                            Играть
                        </a>
                    </li>
                    <li className={styled.home__item}>
                        {/* <Link to="/account" className={styled.home__link}>
                            Аккаунт
                        </Link> */}
                        <a href="" className={styled.home__link}>
                            Аккаунт
                        </a>
                    </li>
                    <li className={styled.home__item}>
                        {/* <Link to="/leaderboard" className={styled.home__link}>
                            Таблица лидеров
                        </Link> */}
                        <a href="" className={styled.home__link}>
                            Таблица лидеров
                        </a>
                    </li>
                    <li className={styled.home__item}>
                        {/* <Link to="/forum" className={styled.home__link}>
                            Форум
                        </Link> */}
                        <a href="" className={styled.home__link}>
                            Форум
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Home;
