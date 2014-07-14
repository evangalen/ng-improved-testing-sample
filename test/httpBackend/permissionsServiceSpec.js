describe('$httpBackend style permissions service specification', function() {

    beforeEach(module('myApp'));

    beforeEach(inject(function($httpBackend) {
        $httpBackend.whenGET('/users').respond([{username: 'anAdminUser', fullname: 'an admin user', admin: true}]);
    }));


    describe('permissions service', function() {

        describe('hasAdminAccess method', function() {
            it('should return true when user details has property: admin == true',
                inject(function(permissions, $httpBackend) {
                    $httpBackend.flush();

                    expect(permissions.hasAdminAccess('anAdminUser')).toBe(true);
                }));
        });
    });

});
