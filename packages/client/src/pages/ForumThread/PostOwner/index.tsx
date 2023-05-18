import classNames from 'classnames/bind';
import Avatar from 'components/Avatar';
import styles from './style.module.pcss';

type PostOwnerProps = {
  name: string;
  avatar: string;
};

const cx = classNames.bind(styles);

export default function PostOwner({ name, avatar }: PostOwnerProps) {
  return (
    <div className={cx(styles.postOwner)}>
      <Avatar url={avatar} />
      <div className={cx(styles.postOwnerName)}>{name}</div>
    </div>
  );
}
