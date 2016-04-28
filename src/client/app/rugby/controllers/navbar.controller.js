(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('NavBarController', NavBarController);

    /* @ngInject */
    function NavBarController($rootScope, $state, $stateParams) {
        var vm = this;

        activate();

        function activate() {
            vm.faction = $stateParams.faction;
            vm.active = $state.current.data.currentState;
        }

        vm.goTo = function(state) {
            $state.go('rugby.' + state, {faction: vm.faction});
        };
    }
})();
