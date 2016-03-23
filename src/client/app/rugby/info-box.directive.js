(function(module) {
    'use strict';

    var directiveId = 'infoBox';

    module.directive(directiveId, infoBox);

    /* @ngInject */
    function infoBox() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/rugby/info-box.html',
            controller: controller,
            controllerAs: 'infoBoxCtrl',
            scope: {
                rugbyTab: '='
            }
        };

        return directive;

        /* @ngInject */
        function controller($scope, rugbyConfig) {
            var vm = this;
            vm.tab = $scope.tab;
            vm.mensAboutText = rugbyConfig.mensAboutText;
        }
    }
})(angular.module('app.rugby'));
