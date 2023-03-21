import classNames from 'classnames/bind';
// import { ArrowIcon } from 'components/icons';
import { Outlet } from 'react-router-dom';
import { useProtectRoute } from 'hooks/auth';
import styles from './styles.module.pcss';

// function getPathnameOfPrevPage() {
//   const { pathname } = window.location;
//   const newPathname = pathname.split('/').slice(0, -1).join('');
//
//   return newPathname || '/';
// }

const cx = classNames.bind(styles);

export function ProtectedLayout() {
  // const prevPagePathname = getPathnameOfPrevPage();

  useProtectRoute();

  return (
    <div className={styles.protectedLayout}>
      {/* <div className={cx(styles.protectedLayoutGoBackColumn)}> */}
      {/*  <Link */}
      {/*    aria-label="Go back" */}
      {/*    to={prevPagePathname} */}
      {/*    className={cx(styles.protectedLayoutGoBackButton)} */}
      {/*  > */}
      {/*    <ArrowIcon /> */}
      {/*  </Link> */}
      {/* </div> */}
      <main className={cx(styles.protectedLayoutMain)}>
        <Outlet />
      </main>
    </div>
  );
}
