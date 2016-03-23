(function() {
    'use strict';

    angular
        .module('app.rugby')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'rugby',
                config: {
                    abstract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/rugby'
                }
            },
            {
                state: 'rugby.home',
                config: {
                    url: '/home',
                    templateUrl: 'app/rugby/splash-page.html',
                    controller: 'SplashPageController',
                    controllerAs: 'vm',
                    title: 'Akron Rugby'
                }
            },
            {
                state: 'rugby.mensAbout',
                config: {
                    url: '/mens/about',
                    templateUrl: 'app/rugby/mens-about.html',
                    controller: 'MensAboutController',
                    controllerAs: 'vm',
                    title: 'Men\'s Rugby'
                }
            },
            {
                state: 'rugby.schedule',
                config: {
                    url: '/schedule',
                    templateUrl: 'app/rugby/schedule.html',
                    controller: 'ScheduleController',
                    controllerAs: 'vm',
                    title: 'Akron Rugby Schedule'
                }
            }
        ];
    }
})();
