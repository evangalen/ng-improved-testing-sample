describe('Vanilla mocked style permissions service specification', function () {
    var usersMock;

    beforeEach(module('myApp', function ($provide) {
        usersMock = {
            getUserDetails: jasmine.createSpy()
        };

        $provide.value('users', usersMock);
    }));


    describe('hasAdminAccess method', function () {
        it('should return true when user details has property: admin == true', inject(function (permissions) {
            usersMock.getUserDetails.andReturn({admin: true});

            expect(permissions.hasAdminAccess('anAdminUser')).toBe(true);
            expect(usersMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
        }));
    });
});
