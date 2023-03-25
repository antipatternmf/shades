import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './styles.module.pcss';

type LeaderListProps = {
  children?: ReactNode;
};

const cx = classNames.bind(styles);

export default function LeaderList({ children }: LeaderListProps) {
  return <div className={cx(styles.leaderList)}>{children}</div>;
}
