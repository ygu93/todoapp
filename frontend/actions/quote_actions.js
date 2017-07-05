export const REQUEST_QUOTE = 'REQUEST_QUOTE';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

export const requestQuote = () => ({
  type: REQUEST_QUOTE,
});

export const receiveQuote = (quote) => ({
  type: RECEIVE_QUOTE,
  quote
});
