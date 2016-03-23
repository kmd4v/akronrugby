(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('MensAboutController', MensAboutController);

    /* @ngInject */
    function MensAboutController($scope, rugbyConfig, logger) {
        var vm = this;

        activate();

        function activate() {
            vm.mensAboutText = rugbyConfig.mensAboutText;
        }
    }
})();
