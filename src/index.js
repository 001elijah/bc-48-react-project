import React from 'react';
import ReactDOM from 'react-dom/client';

import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Unbounded/Unbounded-Medium.ttf';
import './assets/fonts/Lato/Lato-Black.ttf';
import './assets/fonts/Lato/Lato-Bold.ttf';
import './assets/fonts/Lato/Lato-Medium.ttf';
import './assets/fonts/Lato/Lato-Regular.ttf';
import './assets/fonts/Lato/Lato-Semibold.ttf';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/bc-48-react-project'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
);
