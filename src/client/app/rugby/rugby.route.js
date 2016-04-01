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
                state: 'rugby.splash',
                config: {
                    url: '/splash',
                    templateUrl: 'app/rugby/splash-page.html',
                    controller: 'SplashPageController',
                    controllerAs: 'splashPageCtrl',
                    title: 'Akron Rugby'
                }
            },
            {
                state: 'rugby.home',
                config: {
                    url: '/:faction/home',
                    templateUrl: 'app/rugby/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl',
                    title: 'Akron Rugby',
                    data: {
                        currentState: 'about'
                    }
                }
            }
        ];
    }
})();
