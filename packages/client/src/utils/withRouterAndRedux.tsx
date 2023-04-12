import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'store/index';

export const withRouterAndRedux = (component: React.ReactNode, initialEntries = '/') => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialEntries]}>{component}</MemoryRouter>
      </Provider>,
    ),
  };
};
