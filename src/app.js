var appModule = angular.module('myApp', []);


appModule
    .factory('users', function($http) {

        /** @type {Object.<{username: string, fullname: string, admin: boolean}>} */
        var detailsPerUsername = {};

        $http({method: 'GET', url: '/users'})
            .success(function(usersArray) {
                detailsPerUsername = _.indexBy(usersArray, 'username');
            });

        return {
            /**
             * @param {string} userName
             * @returns {{username: string, fullname: string, admin: boolean}}
             */
            getUserDetails: function(userName) {
                return detailsPerUsername[userName];
            }
        };
    });


appModule.factory('permissions', function(users) {

    return {
        /**
         * @param {string} username
         * @returns {boolean}
         */
        hasAdminAccess: function(username) {
            return users.getUserDetails(username).admin === true;
        }
    };
});


appModule.controller('AppCtrl', function($scope, permissions) {
    var loggedInUsername;

    $scope.login = function(username) {
        loggedInUsername = username;
    };

    $scope.loggedInUserHasAdminAccess = function() {
        return permissions.hasAdminAccess(loggedInUsername);
    };
});


appModule.filter('fullname', function(users) {
    return function(username) {
        return users.getUserDetails(username).fullname;
    };
});