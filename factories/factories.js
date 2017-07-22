var factories = angular.module('appFactories', [])

.factory('newsFactory', function () {
    var newsFactory = {}
    newsFactory.News = [];

    newsFactory.getNews = function () {

        };

        return newsFactory;
    }

)

.factory('eventsFactory', function () {
        var eventsFactory = {}
    eventsFactory.News = [];

    eventsFactory.getEvents = function () {

        };

        return eventsFactory;
    }

)

.factory('servicesFactory', function () {
        var servicesFactory = {}
    servicesFactory.News = [];

    servicesFactory.getServices = function () {

        };

        return servicesFactory;
    }

)

.factory('advertsFactory', function () {
        var advertsFactory = {}
    advertsFactory.News = [];

    advertsFactory.getAdverts = function () {

        };

        return advertsFactory;
    }

);

