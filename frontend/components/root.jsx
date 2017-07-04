import React from 'react';
import App from './app';
import { ApolloProvider } from 'react-apollo';
import { client } from '../reducers/root_reducer';

const Root = ({ store }) => {
  return (
    <ApolloProvider store={store} client={client}>
      <App/>
    </ApolloProvider>
  )
}
