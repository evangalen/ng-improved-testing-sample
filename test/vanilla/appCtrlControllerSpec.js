describe('Vanilla mocked style AppController specification', function () {
    var permissionServiceMock;

    beforeEach(module('myApp', function ($provide) {
        permissionServiceMock = {
            hasAdminAccess: jasmine.createSpy()
        };

        $provide.value('permissionService', permissionServiceMock);
    }));


    var $scope;

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('AppController', {$scope: $scope});
    }));


    describe('$scope', function () {

        describe('loggedInUserHasAdminAccess method', function () {
            it('should use permissions#hasAdminAccess and the logged in user', function () {
                $scope.login('anAdminUser');
                permissionServiceMock.hasAdminAccess.and.returnValue(true);

                expect($scope.loggedInUserHasAdminAccess()).toBe(true);
                expect(permissionServiceMock.hasAdminAccess).toHaveBeenCalledWith('anAdminUser');
            });
        });
    });
});
