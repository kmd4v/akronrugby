(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('AboutController', AboutController);

    /* @ngInject */
    function AboutController($scope, $stateParams, rugbyConfig) {
        var vm = this;
        vm.faction = $stateParams.faction;

        init();

        function init() {
            vm.title = (vm.faction === 'mens' ? 'Men\'s' : 'Women\'s') + ' Akron Rugby Information';
            vm.aboutText = vm.faction === 'mens' ? rugbyConfig.mensAboutText
                : rugbyConfig.womensAboutText;
        }
    }
})();
