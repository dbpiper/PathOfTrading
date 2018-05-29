import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ReduxCache } from 'apollo-cache-redux';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import getRoutes from './routes';

const cache = new ReduxCache({ store });
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
