describe('$httpBackend style permissionsService specification', function() {

    beforeEach(module('myApp'));

    beforeEach(inject(function($httpBackend) {
        $httpBackend.whenGET('/users').respond([{username: 'anAdminUser', fullname: 'an admin user', admin: true}]);
    }));


    describe('permissionsService', function() {

        describe('hasAdminAccess method', function() {
            it('should return true when user details has property: admin == true',
                inject(function(permissionService, $httpBackend) {
                    $httpBackend.flush();

                    expect(permissionService.hasAdminAccess('anAdminUser')).toBe(true);
                }));
        });
    });

});
