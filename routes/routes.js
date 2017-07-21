var appRoutes = angular.module('appRoutes', []).
config('appRoutes', function($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    // $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.
        when('/add-news', {
            templateUrl: "views/news/add-news.htm",
            controller: "newsController"
    })

    .
        when('/display-news', {
            templateUrl: "views/news/display-news.htm",
            controller: "newsController"
    })

    .
        when('/add-events', {
            templateUrl: "views/events/add-events.htm",
            controller: "eventsController"
    })

    .
        when('/display-events', {
            templateUrl: "views/events/display-events.htm",
            controller: "eventsController"
    })

    .
        when('/add-services', {
            templateUrl: "views/services/add-services.htm",
            controller: "servicesController"
    })

    .
        when('/display-services', {
            templateUrl: "views/services/display-services.htm",
            controller: "servicesController"
    })

    .
        when('/add-adverts', {
            templateUrl: "views/adverts/add-adverts.htm",
            controller: "advertsController"
    })

    .
        when('/display-adverts', {
            templateUrl: "views/adverts/dispaly-adverts.htm",
            controller: "advertsController"
    })
});