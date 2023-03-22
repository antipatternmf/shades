import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import { useProtectRoute } from 'hooks/auth';
import styles from './styles.module.pcss';

const cx = classNames.bind(styles);

export function ProtectedLayout() {
  useProtectRoute();

  return (
    <div className={styles.protectedLayout}>
      <main className={cx(styles.protectedLayoutMain)}>
        <Outlet />
      </main>
    </div>
  );
}
