export const fetchQuote = (success) => {
  $.ajax({
    method:'GET',
    url: `https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`,
    success,
    error
  });
};
