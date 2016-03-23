(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('SplashPageController', SplashPageController);

    /* @ngInject */
    function SplashPageController($state) {
        var vm = this;

        activate();

        function activate() {

        }

        function goTo(state) {
            $state.go('rugby.' + state);
        }
    }
})();
