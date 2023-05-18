import classNames from 'classnames/bind';
import type { ReactNode } from 'react';
import styles from './style.module.pcss';
import BackBtn from './BackBtn';

const cx = classNames.bind(styles);

type TopBarProps = {
  title: string;
  isShowBackBtn?: boolean;
  rightElement?: ReactNode;
};

function TopBar({ title, isShowBackBtn = true, rightElement }: TopBarProps) {
  return (
    <div className={cx(styles.topbar)}>
      {isShowBackBtn && <BackBtn />}
      <h1 className={cx(styles.topbar__title)}>{title}</h1>
      <div>{rightElement}</div>
    </div>
  );
}

export default TopBar;
