(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',

        /* Feature areas */
        'app.rugby',
        'app.layout'
    ]).constant('_', window._);

})();
