(function () {
    'use strict';

    angular
        .module('app.rugby')
        .directive('contactsCarousel', contactsCarousel);

    /* @ngInject */
    function contactsCarousel(config) {

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
        function controller($scope, $stateParams) {
            var vm = this;
            vm.faction = $stateParams.faction;
            vm.teamRole = $scope.teamRole;

            init();

            function init() {
                vm.photoDir = 'src/client/images/photos/contacts/' + vm.faction + '/' + vm.teamRole + '/';
                $scope.photo1 = vm.photoDir + vm.teamRole + '1.JPG';
                $scope.photo2 = vm.photoDir + vm.teamRole + '2.JPG';
                $scope.photo3 = vm.photoDir + vm.teamRole + '3.JPG';
            }

        }
    }
})();
