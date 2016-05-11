(function () {
    'use strict';

    angular
        .module("app")
        .controller("HomeController", HomeController);

    HomeController.$inject = ['quotes'];

    function HomeController(quotes) {
        var vm = this;

        vm.title = "This is HomeController";
        vm.quotes = {};

        getQuotes();

        function getQuotes() {
            return quotes.getRandQuote().then(function (res) {

                vm.quotes = res;

                return vm.quotes;
            });
        }
    }
})();