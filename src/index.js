import React from 'react';
import ReactDOM from 'react-dom/client';

import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Unbounded/Unbounded-Medium.ttf';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
