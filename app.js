'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('app', ["ngRoute","firebase" ,"appRoutes" , "appFactories", "appControllers"])
    //app constants
    .constant('firebaseUrl',
        'https://nbiiapp.firebaseio.com/'
    )
    .config(function(){
        var config = {
            apiKey: "AIzaSyCCuyEMZMdMXgU3hGEPXaBHodQ5Gm6JaII",
            authDomain: "nbiiapp.firebaseapp.com",
            databaseURL: "https://nbiiapp.firebaseio.com",
            projectId: "nbiiapp",
            storageBucket: "nbiiapp.appspot.com",
            messagingSenderId: "431754688791"
        };
        firebase.initializeApp(config);
    });


