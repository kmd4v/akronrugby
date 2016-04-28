(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('ContactsController', ContactsController);

    /* @ngInject */
    function ContactsController($scope, $stateParams, rugbyConfig) {
        var vm = this;
        vm.faction = $stateParams.faction;

        init();

        function init() {
            vm.title = (vm.faction === 'mens' ? 'Men\'s' : 'Women\'s') + ' Akron Rugby \n Contacts';
            vm.aboutText = vm.faction === 'mens' ? rugbyConfig.mensAboutText
                : rugbyConfig.womensAboutText;
        }
    }
})();
