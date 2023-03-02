import React from 'react';
import SideBar from '../../components/SideBar';
import styled from './index.module.pcss';

function Forum() {
  return (
    <main className="wrapper">
      <div className={['container', styled.forum].join(' ')}>
        <div className={styled.forum__head}>
          <span className={styled.forum__headTitle}>
            Форумы
          </span>
          <span className={styled.forum__headTitle}>
            Темы
          </span>
          <span className={styled.forum__headTitle}>
            Ответы
          </span>
        </div>
        <ul className={styled.forum__list}>
          <li className={styled.forum__item}>
            <span className={styled.forum__itemInner}>
              Вопросы/Предложения
            </span>
            <div className={styled.forum__itemInner}>
              11
            </div>
            <span className={styled.forum__itemInner}>
              54
            </span>
          </li>
          <li className={styled.forum__item}>
            <span className={styled.forum__itemInner}>
              Флудилка
            </span>
            <div className={styled.forum__itemInner}>
              222
            </div>
            <span className={styled.forum__itemInner}>
              657
            </span>
          </li>
        </ul>
      </div>
      <SideBar path="/" />
    </main>
  );
}

export default Forum;
