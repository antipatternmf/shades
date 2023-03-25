import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

type InfoRowProps = {
  name: string;
  value: string;
};

const cx = classNames.bind(styles);

export default function InfoRow({ name, value }: InfoRowProps) {
  return (
    <div className={cx(styles.infoRow, 'list-item')}>
      <div className={cx(styles.infoRowName)}>{name}</div>
      <div className={cx(styles.infoRowValue)}>{value}</div>
    </div>
  );
}
