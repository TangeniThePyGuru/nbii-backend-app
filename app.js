'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('app', ["ngRoute","firebase" ,"appRoutes" , "appFactories", "appControllers", "ngAnimate"])
    //app constants
    .constant('firebaseUrl',
        'https://nbiiapp.firebaseio.com/'
    );


