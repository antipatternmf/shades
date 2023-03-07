import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

type AvatarProps = {
  src?: string;
  size?: 'small' | 'large';
};

const cx = classNames.bind(styles);

export default function Avatar({ src, size = 'small' }: AvatarProps) {
  const classList = cx(
    styles.avatar,
    { [styles.avatar_small]: size === 'small' },
    { [styles.avatar_large]: size === 'large' },
  );

  return (
    <div
      className={classList}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
