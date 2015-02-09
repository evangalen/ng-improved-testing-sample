describe('ngImprovedTesting mocked style PermissionService specification', function() {

    beforeEach(ModuleBuilder.forModules('myApp')
        .serviceWithMocksFor('permissionService', 'userService')
        .build());

    describe('hasAdminAccess method', function() {

        it('should return true when user details has property: admin == true',
                inject(function(permissionService, userServiceMock) {
            userServiceMock.getUserDetails.andReturn({admin: true});

            expect(permissionService.hasAdminAccess('anAdminUser')).toBe(true);
        }));
    });

});
