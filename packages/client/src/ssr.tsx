import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { createStore, RootState } from 'store/store';
import App from './app';

export function render(preloadedState: RootState, url: string) {
  const store = createStore(preloadedState);

  const initialState = store.getState();

  const htmlTmp = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
  );

  return [initialState, htmlTmp];
}
