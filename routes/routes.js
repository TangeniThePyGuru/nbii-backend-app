var appRoutes = angular.module('appRoutes', ["ngRoute"]).
config(function($routeProvider) {
    // $locationProvider.hashPrefix('!');
    // $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.
        when('/add-news', {
            templateUrl: "views/news/add-news.htm",
            controller: "newsController"
    })

    .
        when('/add-events', {
            templateUrl: "views/events/add-events.htm",
            controller: "eventsController"
    })

    .
        when('/add-services', {
            templateUrl: "views/services/add-services.htm",
            controller: "servicesController"
    })

    .
        when('/add-adverts', {
            templateUrl: "views/adverts/add-adverts.htm",
            controller: "advertsController"
    })

        .
        when('/view-faqs', {
            templateUrl: "views/faqs/display-faqs.htm",
            controller: "faqController"
        })

        .
        when('/add-faq', {
            templateUrl: "views/faqs/add-faq.htm",
            controller: "faqController"
        })



});