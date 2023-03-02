import React from 'react';
import styled from './index.module.pcss';

function Home() {
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
            <a href="/" className={styled.home__link}>
              Играть
            </a>
          </li>
          <li className={styled.home__item}>
            <a href="/" className={styled.home__link}>
              Профиль
            </a>
          </li>
          <li className={styled.home__item}>
            <a href="/" className={styled.home__link}>
              Таблица лидеров
            </a>
          </li>
          <li className={styled.home__item}>
            <a href="/" className={styled.home__link}>
              Форум
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
