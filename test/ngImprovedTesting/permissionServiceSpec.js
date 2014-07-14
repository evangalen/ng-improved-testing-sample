describe('ngImprovedTesting mocked style permissions service specification', function() {

    beforeEach(ModuleBuilder.forModule('myApp')
        .serviceWithMocks('permissions')
        .build());

    describe('hasAdminAccess method', function() {

        it('should return true when user details has property: admin == true', inject(function(permissions, usersMock) {
            usersMock.getUserDetails.andReturn({admin: true});

            expect(permissions.hasAdminAccess('anAdminUser')).toBe(true);
        }));
    });

});
