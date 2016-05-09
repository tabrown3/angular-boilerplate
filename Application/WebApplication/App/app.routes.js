(function () {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', '$locationProvider', config]);

    function config($routeProvider, $locationProvider) {
        //$locationProvider.hashPrefix('!');

        $routeProvider.
            when('/Home', {
                templateUrl: '/App/Pages/Unique/Home/HomeTemplate.html',
                controller: 'HomeController as homeVm'
            }).
            when('/EnterBio', {
                templateUrl: '/App/Pages/Unique/EnterBio/EnterBioTemplate.html',
                controller: 'EnterBioController as bioVm'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }
})();