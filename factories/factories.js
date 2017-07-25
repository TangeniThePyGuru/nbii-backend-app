var factories = angular.module('appFactories', ['firebase'])

    // global variables not really used currently
    .factory('titleFactory', function () {
            var titleFactory = {}
            titleFactory.title = '';
            return titleFactory;
    })
    .factory('faqFactory', function (firebaseUrl, $firebaseArray, $firebaseObject, $routeParams) {
        var faqFactory = {};
        faqFactory.FAQS = [];
        var faqRef = new Firebase(firebaseUrl +"faq/");
        // return all the faqs in the database
        faqFactory.get = function(){
            faqFactory.FAQS = $firebaseArray(faqRef);
            return faqFactory.FAQS;
        };
        // return an array with one object
        faqFactory.getFaq = function(id){
            return $firebaseArray(new Firebase(firebaseUrl + "faq/"+id));
        };
        // add an faq to the database
        faqFactory.add = function(faq){
            return $firebaseArray(faqRef).$add(faq);
        };
        // delte faq
        faqFactory.delete = function(id){
            console.log(id);
            var faq = $firebaseObject(new Firebase(firebaseUrl + "faq/" + id));
            faq.$remove();
        };
        // update faq
        faqFactory.update = function(newFaq){
            var faq = $firebaseObject(new Firebase(firebaseUrl + "faq/" + $routeParams.$id));
            return faq.$save(newFaq);
        };
        return faqFactory;
    })
    .factory('advertFactory', function (firebaseUrl, $firebaseArray, $firebaseObject, $routeParams) {
        var advertFactory = {};
        advertFactory.ADVERTS = [];

        var advertRef = new Firebase(firebaseUrl +"advert/");
        // return all the adverts in the database
        advertFactory.get = function(){
            advertFactory.ADVERTS = $firebaseArray(advertRef);
            return advertFactory.ADVERTS;
        };
        // return an array with one object
        advertFactory.getAdvert = function(id){
            return $firebaseArray(new Firebase(firebaseUrl + "advert/"+id));
        };
        // add an advert to the database
        advertFactory.add = function(advert){
            return $firebaseArray(advertRef).$add(advert);
        };
        // delete advert
        advertFactory.delete = function(id){
            console.log(id);
            var advert = $firebaseObject(new Firebase(firebaseUrl + "advert/" + id));
            advert.$remove();
        };
        // update advert
        advertFactory.update = function(newAdvert){
            var advert = $firebaseObject(new Firebase(firebaseUrl + "advert/" + $routeParams.$id));
            return advert.$save(newAdvert);
        };
        return advertFactory;
    })
    .factory('serviceFactory', function (firebaseUrl, $firebaseArray, $firebaseObject, $routeParams) {
        var serviceFactory = {};
        serviceFactory.SERVICES = [];

        var serviceRef = new Firebase(firebaseUrl +"service/");
        // return all the services in the database
        serviceFactory.get = function(){
            serviceFactory.SERVICES = $firebaseArray(serviceRef);
            return serviceFactory.SERVICES;
        };
        // return an array with one object
        serviceFactory.getService = function(id){
            return $firebaseArray(new Firebase(firebaseUrl + "service/"+id));
        };
        // add an service to the database
        serviceFactory.add = function(service){
            return $firebaseArray(serviceRef).$add(service);
        };
        // delete service
        serviceFactory.delete = function(id){
            console.log(id);
            var service = $firebaseObject(new Firebase(firebaseUrl + "service/" + id));
            service.$remove();
        };
        // update service
        serviceFactory.update = function(newService){
            var service = $firebaseObject(new Firebase(firebaseUrl + "service/" + $routeParams.$id));
            return service.$save(newService);
        };
        return serviceFactory;
    })
    .factory('newsfactory', function (firebaseUrl, $firebaseArray, $firebaseObject, $routeParams) {
        var newsFactory = {};
        newsFactory.NEWS = [];

        var newsRef = new Firebase(firebaseUrl +"news/");
        // return all the news in the database
        newsFactory.get = function(){
            newsFactory.NEWS = $firebaseArray(newsRef);
            return newsFactory.NEWS;
        };
        // return an array with one object
        newsFactory.getNews = function(id){
            return $firebaseArray(new Firebase(firebaseUrl + "news/"+id));
        };
        // add an news to the database
        newsFactory.add = function(news){
            return $firebaseArray(newsRef).$add(news);
        };
        // delete news
        newsFactory.delete = function(id){
            console.log(id);
            var news = $firebaseObject(new Firebase(firebaseUrl + "news/" + id));
            news.$remove();
        };
        // update news
        newsFactory.update = function(newService){
            var news = $firebaseObject(new Firebase(firebaseUrl + "news/" + $routeParams.$id));
            return news.$save(newService);
        };
        return newsFactory;
    })
    .factory('eventFactory',function (firebaseUrl, $firebaseArray, $firebaseObject, $routeParams) {
        var eventFactory = {};
        eventFactory.EVENTS = [];

        var eventRef = new Firebase(firebaseUrl +"event/");
        // return all the event in the database
        eventFactory.get = function(){
            eventFactory.EVENTS = $firebaseArray(eventRef);
            return eventFactory.EVENTS;
        };
        // return an array with one object
        eventFactory.getNews = function(id){
            return $firebaseArray(new Firebase(firebaseUrl + "event/"+id));
        };
        // add an event to the database
        eventFactory.add = function(event){
            return $firebaseArray(eventRef).$add(event);
        };
        // delete event
        eventFactory.delete = function(id){
            console.log(id);
            var event = $firebaseObject(new Firebase(firebaseUrl + "event/" + id));
            event.$remove();
        };
        // update event
        eventFactory.update = function(newEvent){
            var event = $firebaseObject(new Firebase(firebaseUrl + "event/" + $routeParams.$id));
            return event.$save(newEvent);
        };
        return eventFactory;
    })
    .factory('yearFactory', function () {
        var yearFactory = {};

        yearFactory.currentYear = function () {
          return new Date();
        };

        return yearFactory;
    })

