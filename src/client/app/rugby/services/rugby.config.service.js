(function() {
    'use strict';

    angular
        .module('app.rugby')
        .constant('rugbyConfig', {
            mensAboutText: 'The Akron Rugby Football Club was founded in 1971 by Bob Binns, from ' +
            'Fort Wayne, Indiana, and Joe Stollar, from the University of Notre Dame.  ' +
            'Eight years later, their efforts led to a Midwest Rugby Championship and' +
            ' a coveted spot in the ' +
            'Final Four at the first United States Rugby National Club Finals.  ' +
            'Subsequently in the 1980s, the Akron RFC embarked on several successful' +
            ' European tours.  The Akron ' +
            'RFC then became permanently settled in Akron in the early 1990s' +
            ' with the purchase of land, ' +
            'which now houses a Multifunctional Shed, pavilion, and pitch.  ' +
            'Today, the Akron RFC is a member of and contributor to the Greater' +
            ' Akron Rugby Foundation.  ' +
            'The Akron RFC is open to individuals of all ages and skills levels. ' +
            'See contacts for more information.',
            womensAboutText: 'Coming Soon...',
            calendarKey: 'AIzaSyALu9Z-jm-hWYMRrJiJz5xChWFvOKiIGJY',
            calendarId: '7s9mr8nl2v2cb1pr0uc44ksn0c@group.calendar.google.com',
            contactInfo: {
                mens: {
                    president: {
                        name: 'Bob Perko',
                        email: 'Rperko1980@gmail.com',
                        phone: '216.224.7213'
                    },
                    vp: {
                        name: 'Zac Smith',
                        email: 'Zacthehero@gmail.com',
                        phone: '765.215.3188'
                    },
                    matchsecretary: {
                        name: 'Matt Williams',
                        email: 'Jeepmatt86@gmail.com',
                        phone: '234.207.8203'
                    },
                    treasurer: {
                        name: 'Ben Coudriet',
                        email: '',
                        phone: ''
                    },
                    teamcaptain: {
                        name: 'Dom Tomei',
                        email: '',
                        phone: ''
                    },
                    coach1: {
                        name: 'Tom Little',
                        email: '',
                        phone: ''
                    },
                    coach2: {
                        name: 'Fred Warmbrant',
                        email: '',
                        phone: ''
                    }
                },
                womens: {
                    president: {
                        name: 'Leila Halay',
                        email: '',
                        phone: ''
                    },
                    vp: {
                        name: 'April Hall',
                        email: '',
                        phone: ''
                    },
                    matchsecretary: {
                        name: 'Emily Ramsey',
                        email: '',
                        phone: ''
                    },
                    treasurer: {
                        name: 'Erica Vallen',
                        email: '',
                        phone: ''
                    },
                    teamcaptain: null,
                    coach1: {
                        name: 'Dana Zito',
                        email: '',
                        phone: ''
                    },
                    coach2: null
                }
            }
        });

})();
