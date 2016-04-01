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

        vm.goTo = function(state, faction) {
            $state.go('rugby.' + state, {faction: faction});
        }
    }
})();
