var factories = angular.module('appFactories', [])

.factory('newsFactory', function () {
    var newsFactory = {}
    newsFactory.News = [];

    newsFactory.getNews = function () {

    };


    return newsFactory;
});