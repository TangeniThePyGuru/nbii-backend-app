var appServices = angular.module('appServices', ['firebase'])
.service('storageService', function ($http, $firebaseArray, $firebaseObject, $q) {
    var root = firebase.database().ref();
    var storageRef  = firebase.storage().ref();
    //collection is for a folder name
    var storageService = {};
    storageService.upload = function (file, collection, fileName) {
        var deferred = $q.defer();
        var fileRef = storageRef.child(collection+'/'+fileName);
        var uploadTask = fileRef.put(file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is '+ progress + '% done');
            // check state
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        },
            function(error) {
                switch (error.code) {
                    case 'storage/unauthorized':
                        deferred.reject('User does not have permission to access the object.');
                        break;
                    case 'storage/canceled':
                        deferred.reject('User canceled the upload.');
                        break;
                    case 'storage/unknown':
                        deferred.reject(' Unknown error occurred, Please try later.');
                        break;
                }
            }, function() {
                deferred.resolve(uploadTask.snapshot.downloadURL);
            });

        return deferred.promise;
    };

    return storageService;

});