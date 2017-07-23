var appRoutes = angular.module('appRoutes', ["ngRoute"]).
config(function($routeProvider) {
    // $locationProvider.hashPrefix('!');
    // $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider
        .when('/add-news', {
            templateUrl: "views/news/add-news.htm",
            controller: "newsController"
        })

        .when('/add-events', {
            templateUrl: "views/events/add-events.htm",
            controller: "eventsController"
        })

        .when('/add-services', {
            templateUrl: "views/services/add-services.htm",
            controller: "servicesController"
        })

        .when('/add-adverts', {
            templateUrl: "views/adverts/add-adverts.htm",
            controller: "advertsController"
        })

        .when('/view-faqs', {
            templateUrl: "views/faqs/display-faqs.htm",
            controller: "faqController"
        })

        .when('/add-faq', {
            templateUrl: "views/faqs/add-faq.htm",
            controller: "faqController"
        })

        .when('/edit/faq/:id', {
            templateUrl: "views/faqs/edit-faq.htm",
            controller: "faqController"
        })

        .when('/view-adverts', {
            templateUrl: "views/adverts/display-adverts.htm",
            controller: "advertController"
        })

        .when('/add-advert', {
            templateUrl: "views/adverts/add-advert.htm",
            controller: "advertController"
        })

        .when('/edit/advert/:id', {
            templateUrl: "views/adverts/edit-advert.htm",
            controller: "faqController"
        })

        .when('/view-services', {
            templateUrl: "views/services/display-services.htm",
            controller: "serviceController"
        })

        .
        when('/add-service', {
            templateUrl: "views/services/add-service.htm",
            controller: "serviceController"
        })

        .
        when('/edit/service/:id', {
            templateUrl: "views/services/edit-services.htm",
            controller: "serviceController"
        })

        .when('/view-news', {
            templateUrl: "views/news/display-news.htm",
            controller: "newsController"
        })

        .when('/add-news', {
            templateUrl: "views/news/add-news.htm",
            controller: "newsController"
        })

        .when('/edit/news/:id', {
            templateUrl: "views/news/edit-news.htm",
            controller: "newsController"
        })

        .when('/view-events', {
            templateUrl: "views/events/display-events.htm",
            controller: "eventController"
        })

        .when('/add-event', {
            templateUrl: "views/events/add-events.htm",
            controller: "eventController"
        })

        .when('/edit/event/:id', {
            templateUrl: "views/events/edit-event.htm",
            controller: "eventController"
        })
        .otherwise({redirectTo: '/view-news'});

      });
