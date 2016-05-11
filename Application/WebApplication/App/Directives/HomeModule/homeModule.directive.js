(function () {
    'use strict';

    angular
        .module('app')
        .directive('howHomeModule', homeModule);

    function homeModule() {

        var directive = {
            //scope: {}, // keep empty and use bindToController
            //bindToController: {}, // replaces scope and uses controller instead
            //controllerAs: 'vm',
            link: link,
            templateUrl: '/App/Directives/HomeModule/homeModule.template.html',
            restrict: 'EA',
            //controller: HomeModuleController // use iff exposing to other directives, else use link
        };

        return directive;

        function link(scope, elem, attrs, ctrl) {

        }
    }

    //function HomeModuleController() {
    //  var vm = this;
    //}
})();