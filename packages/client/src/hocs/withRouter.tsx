import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from '../components/Loader';

export const withRouter = (component: () => React.ReactNode) => function () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {component()}
      </Suspense>
    </BrowserRouter>
  );
};
