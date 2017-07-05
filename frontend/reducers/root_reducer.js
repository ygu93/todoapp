import { combineReducers } from 'redux';
import TodoReducer from './todo_reducer.js';
import StepReducer from './step_reducer.js';
import { ApolloClient, createNetworkInterface } from 'react-apollo';

const csrfToken = document.getElementsByName('csrf-token')[0].content
export const client = new ApolloClient({
  dataIdFromObject: o =>  o.id,
  networkInterface: createNetworkInterface({ uri:'/graphql', opts: { credentials: 'same-origin', headers: { 'X-CSRF-Token': csrfToken } } }),
});


export const RootReducer = combineReducers ({
  todo: TodoReducer,
  step: StepReducer,
  apollo: client.reducer()
});
