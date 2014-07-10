xdescribe('permissions service (ngImprovedTesting spec)', function() {

    beforeEach(ModuleBuilder.forModule('myApp')
        .withServiceUsingMockedDependencies('permissions', 'users')
        .build());

    describe('hasAdminAccess method', function() {

        it('should return true when user details has property: admin == true', inject(function(usersMock, permissions) {
            usersMock.getUserDetails.andReturn({admin: true});

            expect(permissions.hasAdminAccess('anAdminUser')).toBe(true);
        }));
    });
});
