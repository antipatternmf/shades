import classNames from 'classnames/bind';
import LoadingSpinner from 'components/LoadingSpinner';
import styles from './styles.module.pcss';

const cx = classNames.bind(styles);

export default function LoadingOverlay() {
  return (
    <div className={cx(styles.loaderOverlay)}>
      <LoadingSpinner />
    </div>
  );
}
