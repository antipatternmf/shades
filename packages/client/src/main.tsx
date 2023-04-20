import React from 'react';
import ReactDOM from 'react-dom/client';
import './base.pcss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import App from './app';

const isDev = process.env.NODE_ENV === 'development';

function Root() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

if (isDev) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
} else {
  ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <Root />);
}
