import classNames from 'classnames/bind';
import { ArrowIcon } from 'components/icons';
import { Link, Outlet } from 'react-router-dom';
import { useProtectRoute } from 'hooks/auth';
import styles from './styles.module.pcss';

function getPathnameOfPrevPage() {
  const { pathname } = window.location;
  const newPathname = pathname.split('/').slice(0, -1).join('');

  return newPathname || '/';
}

const cx = classNames.bind(styles);

export function ProtectedLayout() {
  const prevPagePathname = getPathnameOfPrevPage();

  useProtectRoute();

  return (
    <div className={styles.authLayout}>
      <div className={cx(styles.authLayoutGoBackColumn)}>
        <Link
          aria-label="Go back"
          to={prevPagePathname}
          className={cx(styles.authLayoutGoBackButton)}
        >
          <ArrowIcon />
        </Link>
      </div>
      <main className={cx(styles.authLayoutMain)}>
        <Outlet />
      </main>
    </div>
  );
}
