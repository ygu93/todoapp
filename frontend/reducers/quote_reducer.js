import React from 'react';
import { RECEIVE_QUOTE } from '../actions/quote_actions.js';
import merge from 'lodash/merge';

const QuoteReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_QUOTE:
      return action.quote;
    default:
      return state;
  }
};



export default QuoteReducer;
