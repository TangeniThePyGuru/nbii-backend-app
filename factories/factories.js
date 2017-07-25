var factories = angular.module('appFactories', ['firebase', 'app'])

    .factory('titleFactory', function () {
            var titleFactory = {}
            titleFactory.title = '';
            return titleFactory;
        }
    )

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

