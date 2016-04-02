(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',
        'app.widgets',

        /* Feature areas */
        'app.rugby',
        'app.layout'
    ]).constant('_', window._);

})();
