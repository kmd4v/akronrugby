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
                    templateUrl: 'app/rugby/templates/splash-page.html',
                    controller: 'SplashPageController',
                    controllerAs: 'splashPageCtrl',
                    title: 'Akron Rugby Splash'
                }
            },
            {
                state: 'rugby.about',
                config: {
                    url: '/:faction/about',
                    templateUrl: 'app/rugby/templates/about.html',
                    controller: 'AboutController',
                    controllerAs: 'aboutCtrl',
                    title: 'Akron Rugby About',
                    data: {
                        currentState: 'about'
                    }
                }
            },
            {
                state: 'rugby.schedule',
                config: {
                    url: '/:faction/schedule',
                    templateUrl: 'app/rugby/templates/schedule.html',
                    controller: 'ScheduleController',
                    controllerAs: 'scheduleCtrl',
                    title: 'Akron Rugby Schedule',
                    data: {
                        currentState: 'schedule'
                    }
                }
            },
            {
                state: 'rugby.contacts',
                config: {
                    url: '/:faction/contacts',
                    templateUrl: 'app/rugby/templates/contacts.html',
                    controller: 'ContactsController',
                    controllerAs: 'contactsCtrl',
                    title: 'Akron Rugby Contacts',
                    data: {
                        currentState: 'contacts'
                    }
                }
            }
        ];
    }
})();
