import classNames from 'classnames/bind';
import { UserResponse } from 'api/chat';
import Avatar from 'components/Avatar';
import styles from './styles.module.pcss';

export type LeaderProps = {
  score: number;
  user: UserResponse
};

const cx = classNames.bind(styles);

export default function Leader({ score, user }: LeaderProps) {
  return (
    <div className={cx(styles.leader, 'list-item')}>
      <Avatar size="small" src={user.avatar} />
      <div>
        {user.first_name}
        {' '}
        {user.second_name}
      </div>
      <strong>{score}</strong>
    </div>
  );
}
