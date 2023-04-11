import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingOverlay from 'components/LoadingOverlay';

export const withRouter = (component: () => React.ReactNode) =>
  function () {
    return (
      <BrowserRouter>
        <Suspense fallback={<LoadingOverlay />}>{component()}</Suspense>
      </BrowserRouter>
    );
  };
