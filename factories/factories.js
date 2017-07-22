var factories = angular.module('appFactories', [])

.factory('titleFactory', function () {
    var titleFactory = {}
    titleFactory.title = '';

    return titleFactory;
}

);

