var appControllers = angular.module('appControllers', ['firebase'])

.controller('newsController', function (newsFactory) {
    newsFactory.getNews()
})

.controller('faqController', function($scope, $firebaseArray, firebaseUrl){
    var faqs = new Firebase(firebaseUrl);
    $scope.faqs = "";

    $scope.getFaq = function () {
        $scope.faqs = $firebaseArray(faqs);
    }
    
    $scope.addFaq = function () {
        var faq = $firebaseArray(faqs);
        faq.$add({
            question: $scope.faq.question,
            answer: $scope.faq.answer,
            category: $scope.faq.category
        })
    }

    $scope.getFaq();

})

// .controller('faqController', function () {
//
// })

// .controller('advertsController',  function($scope, $firebaseArray, $location, firebaseUrl){
//
//     $scope.addProduct = function() {
//         var ref = new Firebase(firebaseUrl);
//         var advert = $firebaseArray(ref);
//         advert.$add({
//             question: $scope.advert.question,
//             answer: $scope.advert.answer,
//             category: $scope.advert.category
//         });
//         $location.path('/');
//     };
// });