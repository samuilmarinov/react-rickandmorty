import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
})

const client = new ApolloClient({
  cache,
  link
})


ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));



serviceWorker.unregister();
