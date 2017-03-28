app.factory('messageFactory', ['$http', function($http) {
    return {
        index: function(cb) {
            $http.get('/users').then(function(response) { //AJAX call to /users route (retrieves all users)
                users = response.data; //set the users to the returned data
                if (typeof(cb) == 'function') { //if the cb parameter as passed is a function...
                    cb(response.data); //invoke said function and pass the retrieved information
                }
            }, function(err) { //if an error is thrown while attempting to retrieve information...
                cb(err);
            });
        }
    };
}]);
