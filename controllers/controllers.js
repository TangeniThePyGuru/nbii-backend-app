var appControllers = angular.module('appControllers', ['firebase'])

.controller('newsController', function (newsFactory) {
    newsFactory.getNews()
})

.controller('faqController', function($scope, $firebaseArray, firebaseUrl, $firebaseObject, $location, $routeParams){

    var faqs = new Firebase(firebaseUrl + "faq/");
    $scope.faqs = [];
    $scope.faq = {};

    $scope.getFaq = function () {
        $scope.faqs = $firebaseArray(faqs);
    };
    
    $scope.addFaq = function () {
        var faq = $firebaseArray(faqs);

        faq.$add({
            question: $scope.faq.question,
            answer: $scope.faq.answer,
            category: $scope.faq.category
        })
    };
    
    $scope.deleteFaq = function (id) {
        console.log(id);
        var ref = new Firebase(firebaseUrl + "faq/" + id);
        var faq = $firebaseObject(ref);
        faq.$remove()
    };
    
    $scope.editFaq = function () {
        var ref = new Firebase(firebaseUrl + "faq/" + $routeParams.$id);
        $scope.faq = $firebaseObject(ref);

        $scope.faq.$save({
            question: $scope.faq.question,
            answer: $scope.faq.answer,
            category: $scope.faq.category
        });

        $scope.edit_faq_form.$setPristine();
        $scope.faq = {};
        $location.path('/view-faqs');
    };

    $scope.getFaq();

})

    .controller('advertController', function($scope, $firebaseArray, firebaseUrl, $firebaseObject, $location, $routeParams){
        var adverts = new Firebase(firebaseUrl + "advert/");
        $scope.adverts = [];
        $scope.advert = {};

        $scope.getAdvert = function () {
            $scope.adverts = $firebaseArray(adverts);
        };

        $scope.addAdvert = function () {
            var advert = $firebaseArray(adverts);
            advert.$add({
                advert: $scope.advert.advert,
                validity_period: $scope.advert.validity_period,
                image: $scope.advert.image,
                category: $scope.advert.category,


            })
        };

        $scope.deleteAdvert= function (id) {
            console.log(id);
            var ref = new Firebase(firebaseUrl + "advert/" + id);
            var advert = $firebaseObject(ref)
            advert.$remove()
        };

        $scope.editAdvert = function () {
            var ref = new Firebase(firebaseUrl + "advert/" + $routeParams.$id);
            $scope.advert = $firebaseObject(ref);

            $scope.advert.$save({
                advert: $scope.advert.advert,
                validity_period: $scope.advert.validity_period,
                image: $scope.advert.image,
                category: $scope.advert.category,
            });

            $scope.edit_advert_form.$setPristine();
            $scope.advert = {};
            $location.path('/view-adverts');
        };

        $scope.getAdvert();

    })


    .controller('serviceController', function($scope, $firebaseArray, firebaseUrl, $firebaseObject, $location, $routeParams){
        var services = new Firebase(firebaseUrl + "service/");
        $scope.services = [];
        $scope.service = {};

        $scope.getServices = function () {
            $scope.services = $firebaseArray(services);
        };

        $scope.addService = function () {
            var service = $firebaseArray(services);
            service.$add({
                service_name: $scope.service.service_name,
                category: $scope.service.category,
            })
        };

        $scope.deleteService= function (id) {
            console.log(id);
            var ref = new Firebase(firebaseUrl + "service/" + id);
            var service = $firebaseObject(ref);
            service.$remove()
        };

        $scope.editService = function () {
            var ref = new Firebase(firebaseUrl + "service/" + $routeParams.$id);
            $scope.service = $firebaseObject(ref);

            $scope.service.$save({
                service_name: $scope.service.service_name,
                category: $scope.service.category,
            });

            $scope.edit_service_form.$setPristine();
            $scope.service = {};
            $location.path('/view-services');
        };
        $scope.getServices();
    })


.controller('newsController', function($scope, $firebaseArray, firebaseUrl, $firebaseObject, $location, $routeParams, titleFactory){
    var news = new Firebase(firebaseUrl + "news/");
    $scope.news = [];
    $scope.new = {};
    titleFactory.title = "News";

    $scope.getNews = function () {
        $scope.news = $firebaseArray(news);
    };

    $scope.addNews = function () {
        var new_s = $firebaseArray(news);
        new_s.$add({
            images: $scope.new.images,
            date: $scope.new.date,
            category: $scope.new.category
        });
    };

    $scope.deleteNew = function (id) {
        console.log(id);
        var ref = new Firebase(firebaseUrl + "news/" + id);
        var news = $firebaseObject(ref);
        news.$remove();
    };

    $scope.editNew = function () {
        var ref = new Firebase(firebaseUrl + "news/" + $routeParams.$id);
        $scope.new = $firebaseObject(ref);

        $scope.new.$save({
            images: $scope.new.images,
            date: $scope.new.date,
            category: $scope.new.category
        });

        $scope.edit_new_form.$setPristine();
        $scope.new = {};
        $location.path('/view-news');
    };

    $scope.getNews();
})
    .controller('eventController', function($scope, $firebaseArray, firebaseUrl, $firebaseObject, $location, $routeParams ){
        var events = new Firebase(firebaseUrl + "event/");
        $scope.events = [];
        $scope.event = {};

        $scope.getEvents = function () {
            $scope.events = $firebaseArray(events);
        };

        $scope.addEvent = function () {
            var event = $firebaseArray(events);
            event.$add({
                title: $scope.event.title,
                description: $scope.event.description,
                date: $scope.event.date,
                images: $scope.event.images,
                category: $scope.event.category
            })
        };

        $scope.deleteEvent= function (id) {
            console.log(id);
            var ref = new Firebase(firebaseUrl + "event/" + id);
            var event = $firebaseObject(ref);
            event.$remove();
        };

        $scope.editEvent = function () {
            var ref = new Firebase(firebaseUrl + "event/" + $routeParams.$id);
            $scope.event = $firebaseObject(ref);

            $scope.event.$save({
                title: $scope.event.title,
                description: $scope.event.description,
                date: $scope.event.date,
                images: $scope.event.images,
                category: $scope.event.category
            });
            // clean up
            $scope.edit_event_form.$setPristine();
            $scope.event = {};
            $location.path('/view-events');
        };

        $scope.getEvents();

    });
