export const fetchQuote = (success) => {
  $.ajax({
    method:'GET',
    url: `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`,
    dataType:'json',
    cache: false,
    success
  });
};
