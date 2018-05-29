import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import getRoutes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {getRoutes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
