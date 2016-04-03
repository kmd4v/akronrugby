(function(module) {
    'use strict';

    var directiveId = 'infoBox';

    module.directive(directiveId, infoBox);

    /* @ngInject */
    function infoBox($stateParams, $filter, $http, rugbyConfig, _) {
        var directive = {
            restrict: 'E',
            scope: {
                'rugbyTab': '@'
            },
            templateUrl: 'app/rugby/info-box.html',
            controller: controller,
            controllerAs: 'infoBoxCtrl'
        };

        return directive;

        /* @ngInject */
        function controller($scope) {

            $scope.faction = $stateParams.faction;
            $scope.date = $filter('date')(new Date(), 'fullDate', 'EST');

            disableDayClickMobile();

            setTabValues();
            $scope.$on('changeTab', function(event, args) {
                $scope.rugbyTab = args.tab;
                setTabValues();
            });

            function setTabValues() {
                if ($scope.rugbyTab === 'about') {
                    $scope.title = 'About Men\'s Akron Rugby';
                    $scope.aboutText = $scope.faction === 'mens' ? rugbyConfig.mensAboutText
                        : rugbyConfig.womensAboutText;
                }

                if ($scope.rugbyTab === 'schedule') {
                    $scope.title = 'Akron Rugby Event Schedule';
                    var key = rugbyConfig.calendarKey;
                    var calendarId = rugbyConfig.calendarId;

                    $http.get('https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + key)
                        .then(calendarGetSuccess)
                        .catch(calendarGetFail);
                }

            }
            function calendarGetSuccess(data) {

                var calendar = $("#calendar").calendar({
                        tmpl_path: '/src/client/app/calendar/tmpls/',
                        events_source: convertToCalData(data.data.items),
                        modal: "#events-modal",
                        modal_type: 'template'
                    });

                $('.btn-group button[data-calendar-nav]').each(function() {
                    var $this = $(this);
                    $this.click(function() {
                        calendar.navigate($this.data('calendar-nav'));
                    });
                });

                $('.btn-group button[data-calendar-view]').each(function() {
                    var $this = $(this);
                    $this.click(function() {
                        calendar.view($this.data('calendar-view'));
                    });
                });
            }

            function calendarGetFail(data) {
                console.log(data.error.message);
            }

            function convertToCalData(data) {
                var returnVals = [];
                _.forEach(data, function(value) {
                    var val = {};
                    val.id = value.id;
                    val.title = value.summary;
                    val.start = new Date(value.start.dateTime).getTime();
                    val.end = new Date(value.end.dateTime).getTime();
                    val.location = value.location;
                    val.summary = value.description;
                    returnVals.push(val);
                });

                return returnVals;
            }

            function disableDayClickMobile() {
                var currentWindow = angular.element(window);
                var lastWindowWidth = currentWindow.width();
                if (lastWindowWidth < 768) {
                    $scope.clickDay = 'day';
                }

                currentWindow.resize(function() {
                    var windowWidth = currentWindow.width();
                    if (lastWindowWidth !== windowWidth && windowWidth < 768) {
                        $scope.clickDay = 'day';
                    } else if (lastWindowWidth !== windowWidth) {
                        $scope.clickDay = '';
                    }
                    lastWindowWidth = windowWidth;
                })
            }
        }
    }
})(angular.module('app.rugby'));
