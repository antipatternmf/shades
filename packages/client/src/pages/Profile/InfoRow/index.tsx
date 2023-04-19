import classNames from 'classnames/bind';
import styles from './style.module.pcss';

type InfoRowProps = {
  name: string;
  value: string;
};

const cx = classNames.bind(styles);

function InfoRow({ name, value }: InfoRowProps) {
  return (
    <div className={cx(styles.infoRow, 'shadow')}>
      <div className={cx(styles.infoRow__subtitle)}>
        <span>{name}</span>
      </div>
      <div className={cx(styles.infoRow__value)}>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default InfoRow;
