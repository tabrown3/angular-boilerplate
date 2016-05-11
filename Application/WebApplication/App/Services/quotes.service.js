(function () {
    'use strict';

    angular
        .module('app')
        .factory('quotes', quotes)

    quotes.$inject = ['$http'];

    function quotes($http) {
        return {
            getRandQuote: getRandQuote
        };

        function getRandQuote() {

            var requestUrl = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';

            return $http.get(requestUrl)
                .then(getRandQuoteSuccess)
                .catch(getRandQuoteFailure);

            function getRandQuoteSuccess(res) {

                return {
                    author: res.data[0].title,
                    quote: res.data[0].content
                }
            }

            function getRandQuoteFailure(res) {

                console.log("There was an issue in getRandQuote");
            }
        }
    }
})();