import { Provider } from 'react-redux';
import { store } from 'store';

export const withRedux = (component: () => React.ReactNode) => function () {
  return (
    <Provider store={store}>
      {component()}
    </Provider>
  );
};
