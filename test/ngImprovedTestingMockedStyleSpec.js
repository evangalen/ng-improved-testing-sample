describe('permissions service (ngImprovedTesting spec)', function() {

    beforeEach(ModuleBuilder.forModule('myApp')
        .serviceWithMocks('permissions')
        //TODO: make controller with mocks working
//        .controllerWithMocks('AppCtrl')
        .filterWithMocks('fullname')
        .build());

    describe('hasAdminAccess method', function() {

        it('should return true when user details has property: admin == true', inject(function(usersMock, permissions) {
            usersMock.getUserDetails.andReturn({admin: true});

            expect(permissions.hasAdminAccess('anAdminUser')).toBe(true);
        }));
    });

    describe('AppCtrl controller', function() {
        var $scope;

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();

            $controller('AppCtrl', {$scope: $scope});
        }));


        describe('$scope', function() {

            describe('loggedInUserHasAdminAccess method', function() {
                //TODO: make controller with mocks working
                xit('should use permissions#hasAdminAccess and the logged in user', inject(function(permissionsMock) {
                    $scope.login('anAdminUser');
                    permissionsMock.hasAdminAccess.andReturn(true);

                    expect($scope.loggedInUserHasAdminAccess()).toBe(true);
                    expect(permissionsMock.hasAdminAccess).toHaveBeenCalledWith('anAdminUser');
                }));
            });
        });
    });

    describe('Fullname filter', function() {

        it('should return the fullname for a user name', inject(function (usersMock, fullnameFilter) {
            usersMock.getUserDetails.andReturn({fullname: 'an admin user'});

            expect(fullnameFilter('anAdminUser')).toBe('an admin user');
            expect(usersMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
        }));
    });

});
