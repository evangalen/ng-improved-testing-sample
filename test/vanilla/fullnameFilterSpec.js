describe('Vanilla mocked style Fullname filter specification', function () {

    var usersMock;

    beforeEach(module('myApp', function ($provide) {
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