import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.pcss';

const cx = classNames.bind(styles);

export function PublicLayout() {
  return (
    <div className={styles.publicLayout}>
      <main className={cx(styles.publicLayoutMain)}>
        <Outlet />
      </main>
    </div>
  );
}
