describe('ngImprovedTesting mocked style AppCtrl controller specification', function() {

    beforeEach(ModuleBuilder.forModule('myApp')
        .controllerWithMocks('AppCtrl')
        .build());

    describe('$scope', function() {

        var $scope;

        beforeEach(inject(function($controller, $rootScope) {
            $scope = $rootScope.$new();

            $controller('AppCtrl', {$scope: $scope});
        }));


        describe('loggedInUserHasAdminAccess method', function() {
            it('should use permissions#hasAdminAccess and the logged in user', inject(function(permissionsMock) {
                $scope.login('anAdminUser');
                permissionsMock.hasAdminAccess.andReturn(true);

                expect($scope.loggedInUserHasAdminAccess()).toBe(true);
                expect(permissionsMock.hasAdminAccess).toHaveBeenCalledWith('anAdminUser');
            }));
        });
    });
});
