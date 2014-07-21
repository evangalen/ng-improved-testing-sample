var appModule = angular.module('myApp', []);

appModule.factory('userService', function($http) {
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

appModule.factory('permissionService', function(userService) {
    return {
        /**
         * @param {string} username
         * @returns {boolean}
         */
        hasAdminAccess: function(username) {
            return userService.getUserDetails(username).admin === true;
        }
    };
});


appModule.controller('AppController', function($scope, permissionService) {
    var loggedInUsername;

    $scope.login = function(username) {
        loggedInUsername = username;
    };

    $scope.loggedInUserHasAdminAccess = function() {
        return permissionService.hasAdminAccess(loggedInUsername);
    };
});


appModule.filter('fullname', function(userService) {
    return function(username) {
        return userService.getUserDetails(username).fullname;
    };
});