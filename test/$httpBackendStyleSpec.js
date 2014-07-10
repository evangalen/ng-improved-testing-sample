describe('$httpBackend style spec', function() {

    beforeEach(module('myApp'));

    beforeEach(inject(function($httpBackend) {
        $httpBackend.whenGET('/users').respond([{username: 'anAdminUser', fullname: 'an admin user', admin: true}]);
    }));


    describe('permissions service', function() {

        describe('hasAdminAccess method', function() {
            it('should return true when user details has property: admin == true',
                inject(function($httpBackend, permissions) {
                    $httpBackend.flush();

                    expect(permissions.hasAdminAccess('anAdminUser')).toBe(true);
                }));
        });
    });


    describe('AppCtrl controller', function() {

        var $scope;

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('AppCtrl', {$scope: $scope});
        }));


        describe('$scope', function() {

            describe('loggedInUserHasAdminAccess method', function() {
                it('should use permissions#hasAdminAccess and the logged in user', inject(function($httpBackend) {
                    $scope.login('anAdminUser');
                    $httpBackend.flush();

                    expect($scope.loggedInUserHasAdminAccess()).toBe(true);
                }));
            });
        });
    });


    describe('Fullname filter', function() {

        it('should return the fullname for a user name', inject(function($httpBackend, fullnameFilter) {
            $httpBackend.flush();

            expect(fullnameFilter('anAdminUser')).toBe('an admin user');
        }));
    });

});
