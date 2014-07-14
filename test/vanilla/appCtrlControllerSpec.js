describe('Vanilla mocked style AppCtrl controller specification', function () {
    var permissionsMock;

    beforeEach(module('myApp', function ($provide) {
        permissionsMock = {
            hasAdminAccess: jasmine.createSpy()
        };

        $provide.value('permissions', permissionsMock);
    }));


    var $scope;

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('AppCtrl', {$scope: $scope});
    }));


    describe('$scope', function () {

        describe('loggedInUserHasAdminAccess method', function () {
            it('should use permissions#hasAdminAccess and the logged in user', function () {
                $scope.login('anAdminUser');
                permissionsMock.hasAdminAccess.andReturn(true);

                expect($scope.loggedInUserHasAdminAccess()).toBe(true);
                expect(permissionsMock.hasAdminAccess).toHaveBeenCalledWith('anAdminUser');
            });
        });
    });
});
