import classNames from 'classnames/bind';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

type AvatarProps = {
  url: string;
};

export default function Avatar({ url }: AvatarProps) {
  return (
    <div
      className={cx(styles.avatar)}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}
