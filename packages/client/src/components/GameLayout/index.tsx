import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import { useProtectRoute } from 'hooks/auth';
import protectedLayoutStyles from '../ProtectedLayout/styles.module.pcss';
import localStyles from './styles.module.pcss';

const cx = classNames.bind({ ...protectedLayoutStyles, ...localStyles });

export function GameLayout() {
  useProtectRoute();

  return (
    <div className={cx(protectedLayoutStyles.protectedLayout)}>
      <main className={cx(localStyles.gameLayoutMain, protectedLayoutStyles.protectedLayoutMain)}>
        <Outlet />
      </main>
    </div>
  );
}
