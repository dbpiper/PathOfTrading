import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { Hermes } from 'apollo-cache-hermes';
import { persistCache } from 'apollo-cache-persist';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import getRoutes from './routes';

const cache = new Hermes({});

persistCache({
  cache,
  storage: window.localStorage,
});

const apolloClient = new ApolloClient({
  link: new HttpLink(),
  cache
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        {getRoutes(store)}
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
  ,
  document.getElementById("root")
);
registerServiceWorker();
