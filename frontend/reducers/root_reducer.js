import { combineReducers } from 'redux';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import QuoteReducer from './quote_reducer';

const csrfToken = document.getElementsByName('csrf-token')[0].content
export const client = new ApolloClient({
  dataIdFromObject: o =>  o.id,
  networkInterface: createNetworkInterface({ uri:'/graphql', opts: { credentials: 'same-origin', headers: { 'X-CSRF-Token': csrfToken } } }),
});


export const RootReducer = combineReducers ({
  quote: QuoteReducer,
  apollo: client.reducer()
});
