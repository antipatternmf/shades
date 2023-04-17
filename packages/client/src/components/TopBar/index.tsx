import classNames from 'classnames/bind';
import styles from './style.module.pcss';
import BackBtn from './BackBtn';

const cx = classNames.bind(styles);

type TopBarProps = {
  title: string;
  isShowBackBtn?: boolean;
};

function TopBar({ title, isShowBackBtn = true }: TopBarProps) {
  return (
    <div className={cx(styles.topbar)}>
      {isShowBackBtn && <BackBtn />}
      <h1 className={cx(styles.topbar__title)}>{title}</h1>
    </div>
  );
}

export default TopBar;
