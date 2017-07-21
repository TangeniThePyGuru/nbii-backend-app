var app = angular.module('appControllers', [])

.controller('newsController', function (newsFactory) {
    newsFactory.getNews()
})

.controller('', function () {

})


.controller('eventsController', function (eventsFactory) {
    eventsFactory.getEvents()
})

.controller('', function () {

})


.controller('servicesController', function (servicesFactory) {
    servicesFactory.getServices()
})

.controller('', function () {

})


.controller('advertsController', function (advertsFactory) {
    advertsFactory.getAdverts()
})

.controller('', function () {

})