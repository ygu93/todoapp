import { combineReducers } from 'redux';
import TodoReducer from './todo_reducer.js';
import StepReducer from './step_reducer.js';
import { ApolloClient } from 'react-apollo';

export const client = new ApolloClient();

export const RootReducer = combineReducers ({
  todo: TodoReducer,
  step: StepReducer
  apollo: client.reducer()
});
