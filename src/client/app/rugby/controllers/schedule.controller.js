(function () {
    'use strict';

    angular
        .module('app.rugby')
        .controller('ScheduleController', ScheduleController);

    /* @ngInject */
    function ScheduleController($stateParams, $http, rugbyConfig) {
        var vm = this;
        vm.faction = $stateParams.faction;

        init();

        function init() {
            vm.title = 'Akron Rugby Event Schedule';
            disableDayClick();
        }

        $http.get('https://www.googleapis.com/calendar/v3/calendars/' + rugbyConfig.calendarId + '/events?key=' + rugbyConfig.calendarKey)
            .then(calendarGetSuccess)
            .catch(calendarGetFail);

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

        function disableDayClick() {
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
})();
