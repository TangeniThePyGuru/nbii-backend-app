var appRoutes = angular.module('appRoutes', []).
config('appRoutes', function($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    // $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.
        when('/add-news', {
            templateUrl: "views/news/add-news.htm",
            controller: "newsController"
    })

});