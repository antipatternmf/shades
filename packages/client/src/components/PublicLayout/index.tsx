import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';

function PublicLayout() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default PublicLayout;
