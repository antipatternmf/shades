import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

const cx = classNames.bind(styles);

function Loader() {
  return (
    <div className={cx('container')}>Loading...</div>
  );
}

export default Loader;
