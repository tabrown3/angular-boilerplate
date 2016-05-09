(function () {
    'use strict';

    angular
        .module("app")
        .controller("EnterBioController", EnterBioController);

    function EnterBioController() {
        var vm = this;

        vm.things = "Hello from EnterBio!";
    }
})();