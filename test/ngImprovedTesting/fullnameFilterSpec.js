describe('ngImprovedTesting mocked style fullname filter specification', function() {

    beforeEach(ModuleBuilder.forModule('myApp')
        .filterWithMocks('fullname')
        .build());

    it('should return the fullname for a user name', inject(function (fullnameFilter, userServiceMock) {
        userServiceMock.getUserDetails.andReturn({fullname: 'an admin user'});

        expect(fullnameFilter('anAdminUser')).toBe('an admin user');
        expect(userServiceMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
    }));

});
