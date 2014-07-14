describe('$httpBackend style AppCtrl controller specification', function() {

    beforeEach(module('myApp'));

    beforeEach(inject(function($httpBackend) {
        $httpBackend.whenGET('/users').respond([{username: 'anAdminUser', fullname: 'an admin user', admin: true}]);
    }));


    describe('$scope', function () {

        var $scope;

        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            $controller('AppCtrl', {$scope: $scope});
        }));


        describe('loggedInUserHasAdminAccess method', function () {
            it('should use permissions#hasAdminAccess and the logged in user', inject(function ($httpBackend) {
                $scope.login('anAdminUser');
                $httpBackend.flush();

                expect($scope.loggedInUserHasAdminAccess()).toBe(true);
            }));
        });
    });



});
