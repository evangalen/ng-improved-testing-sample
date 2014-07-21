describe('Vanilla mocked style fullname filter specification', function () {

    var userServiceMock;

    beforeEach(module('myApp', function ($provide) {
        userServiceMock = {
            getUserDetails: jasmine.createSpy()
        };

        $provide.value('userService', userServiceMock);
    }));


    it('should return the fullname for a user name', inject(function (fullnameFilter) {
        userServiceMock.getUserDetails.andReturn({fullname: 'an admin user'});

        expect(fullnameFilter('anAdminUser')).toBe('an admin user');
        expect(userServiceMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
    }));
});