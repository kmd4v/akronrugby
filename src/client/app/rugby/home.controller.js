(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($scope, rugbyConfig, logger) {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();
