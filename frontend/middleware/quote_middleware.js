import {fetchQuote} from '../util/quote_util';
import {REQUEST_QUOTE, receiveQuote} from '../actions/quote_actions.js';

const QuoteMiddleware = ({ dispatch }) => next => action => {
  const receiveQuoteSuccess = data => dispatch(receiveQuote(data));
  switch(action.type){
    case REQUEST_QUOTE:
      fetchQuote(receiveQuoteSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default QuoteMiddleware;
