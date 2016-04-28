(function () {
    'use strict';

    angular
        .module('app.rugby')
        .directive('contactsCarousel', contactsCarousel);

    /* @ngInject */
    function contactsCarousel(config) {

        var teamRoleMap = {
            president: 'President',
            vp: 'Vice President',
            matchSecretary: 'Match Secretary',
            treasurer: 'Treasurer',
            teamCaptain: 'Team Captain',
            coach1: 'Coach',
            coach2: 'Coach'
        };

        var directive = {
            restrict: 'E',
            scope: {
                teamRole: '@'
            },
            templateUrl: 'src/client/app/rugby/templates/contacts-carousel.html',
            controller: controller,
            controllerAs: 'contactsCarouselCtrl'
        };

        return directive;

        /* @ngInject */
        function controller($scope, $stateParams, rugbyConfig) {
            var vm = this;
            vm.faction = $stateParams.faction;
            vm.teamRole = $scope.teamRole;
            vm.teamRolePrintable = teamRoleMap[vm.teamRole];

            init();

            function init() {
                vm.photoDir = 'src/client/images/photos/contacts/' + vm.faction + '/' + vm.teamRole + '/';
                $scope.photo1 = vm.photoDir + vm.teamRole + '1.JPG';
                $scope.photo2 = vm.photoDir + vm.teamRole + '2.JPG';
                $scope.photo3 = vm.photoDir + vm.teamRole + '3.JPG';

                vm.name = rugbyConfig.contactInfo[vm.faction][vm.teamRole].name;
                vm.email = rugbyConfig.contactInfo[vm.faction][vm.teamRole].email;
                vm.phone = rugbyConfig.contactInfo[vm.faction][vm.teamRole].phone;
            }

        }
    }
})();
