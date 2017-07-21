var app = angular.module('appControllers', [])

.controller('newsController', function (newsFactory) {
    newsFactory.getNews()
})

.controller('', function () {

})