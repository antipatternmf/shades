import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

const cx = classNames.bind(styles);

function Loader() {
  return (
    <div className={cx('wrapper')}>
      <span className={cx(styles.loader)}>Loading...</span>
    </div>
  );
}

export default Loader;
