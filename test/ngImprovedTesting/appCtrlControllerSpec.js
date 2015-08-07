describe('ngImprovedTesting mocked style AppController specification', function() {

    beforeEach(ModuleBuilder.forModules('myApp')
        .controllerWithMocksFor('AppController', 'permissionService')
        .build());

    describe('$scope', function() {

        var $scope;

        beforeEach(inject(function($controller, $rootScope) {
            $scope = $rootScope.$new();

            $controller('AppController', {$scope: $scope});
        }));


        describe('loggedInUserHasAdminAccess method', function() {
            it('should use permissions#hasAdminAccess and the logged in user', inject(function(permissionServiceMock) {
                $scope.login('anAdminUser');
                permissionServiceMock.hasAdminAccess.and.returnValue(true);

                expect($scope.loggedInUserHasAdminAccess()).toBe(true);
                expect(permissionServiceMock.hasAdminAccess).toHaveBeenCalledWith('anAdminUser');
            }));
        });
    });
});
