describe('vanilla mocked style spec', function() {

    describe('permissions service', function() {
        var usersMock;

        beforeEach(module('myApp', function($provide) {
            usersMock = {
                getUserDetails: jasmine.createSpy()
            };

            $provide.value('users', usersMock);
        }));


        describe('hasAdminAccess method', function() {
            it('should return true when user details has property: admin == true', inject(function(permissions) {
                usersMock.getUserDetails.andReturn({admin: true});

                expect(permissions.hasAdminAccess('anAdminUser')).toBe(true);
                expect(usersMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
            }));
        });
    });


    describe('AppCtrl controller', function() {
        var permissionsMock;

        beforeEach(module('myApp', function($provide) {
            permissionsMock = {
                hasAdminAccess: jasmine.createSpy()
            };

            $provide.value('permissions', permissionsMock);
        }));


        var $scope;

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('AppCtrl', {$scope: $scope});
        }));


        describe('$scope', function() {

            describe('loggedInUserHasAdminAccess method', function() {
                it('should use permissions#hasAdminAccess and the logged in user', function() {
                    $scope.login('anAdminUser');
                    permissionsMock.hasAdminAccess.andReturn(true);

                    expect($scope.loggedInUserHasAdminAccess()).toBe(true);
                    expect(permissionsMock.hasAdminAccess).toHaveBeenCalledWith('anAdminUser');
                });
            });
        });
    });


    describe('Fullname filter', function() {

        var usersMock;

        beforeEach(module('myApp', function($provide) {
            usersMock = {
                getUserDetails: jasmine.createSpy()
            };

            $provide.value('users', usersMock);
        }));


        it('should return the fullname for a user name', inject(function (fullnameFilter) {
            usersMock.getUserDetails.andReturn({fullname: 'an admin user'});

            expect(fullnameFilter('anAdminUser')).toBe('an admin user');
            expect(usersMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
        }));
    });
});
