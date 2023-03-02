import React from 'react';
import styled from './index.module.pcss';

type SideBarProps = {
  path: string;
};

function SideBar({ path }: SideBarProps) {
  return (
    <div className={styled.sidebar}>
      <a href={path} className={styled.sidebar__backBtn}>
        {'<-'}
      </a>
    </div>
  );
}

export default SideBar;
