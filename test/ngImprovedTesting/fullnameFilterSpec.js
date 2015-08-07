describe('ngImprovedTesting mocked style fullname filter specification', function() {

    beforeEach(ModuleBuilder.forModules('myApp')
        .filterWithMocksFor('fullname', 'userService')
        .build());

    it('should return the fullname for a user name', inject(function (fullnameFilter, userServiceMock) {
        userServiceMock.getUserDetails.and.returnValue({fullname: 'an admin user'});

        expect(fullnameFilter('anAdminUser')).toBe('an admin user');
        expect(userServiceMock.getUserDetails).toHaveBeenCalledWith('anAdminUser');
    }));

});
