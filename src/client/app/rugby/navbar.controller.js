(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('NavBarController', NavBarController);

    /* @ngInject */
    function NavBarController($state) {
        var vm = this;

        activate();

        function activate() {
        }

        vm.goTo = function(state) {
            $state.go('rugby.' + state);
        }
    }
})();
