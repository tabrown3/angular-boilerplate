(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.
            when('/Home', {
                templateUrl: '/App/Pages/Unique/Home/home.template.html',
                controller: 'HomeController',
                controllerAs: 'homeVm'
            }).
            when('/EnterBio', {
                templateUrl: '/App/Pages/Unique/EnterBio/enterBio.template.html',
                controller: 'EnterBioController',
                controllerAs: 'bioVm'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }
})();