(function(module) {
    'use strict';

    var directiveId = 'infoBox';

    module.directive(directiveId, infoBox);

    /* @ngInject */
    function infoBox(rugbyConfig, $stateParams) {
        var directive = {
            restrict: 'E',
            scope: {
                'rugbyTab': '@'
            },
            templateUrl: 'app/rugby/info-box.html',
            link: link
        };

        return directive;


        function link(scope, elem, attrs) {
            scope.faction = $stateParams.faction;

            if (scope.rugbyTab === 'about') {
                scope.aboutText = scope.faction === 'mens' ? rugbyConfig.mensAboutText : rugbyConfig.womensAboutText;
            }

            scope.$on('changeTab', function(event, args) {
               scope.rugbyTab = args.tab;
            });
        }
    }
})(angular.module('app.rugby'));
