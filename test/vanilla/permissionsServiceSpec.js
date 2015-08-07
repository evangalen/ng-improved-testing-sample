describe('Vanilla mocked style permissions service specification', function () {
    var userServiceMock;

    beforeEach(module('myApp', function ($provide) {
        userServiceMock = {
            getUserDetails: jasmine.createSpy()
        };

        $provide.value('userService', userServiceMock);
    }));


    describe('hasAdminAccess method', function () {
        it('should return true when user details has property: admin == true', inject(function (permissionService) {
            userServiceMock.getUserDetails.and.returnValue({admin: true});

            expect(permissionService.hasAdminAccess('anAdminUser')).toBe(true);
            expect(userServiceMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
        }));
    });
});
