describe('$httpBackend style fullname filter specification', function() {

    beforeEach(module('myApp'));

    beforeEach(inject(function($httpBackend) {
        $httpBackend.whenGET('/users').respond([{username: 'anAdminUser', fullname: 'an admin user', admin: true}]);
    }));

    describe('Fullname filter', function() {

        it('should return the fullname for a user name', inject(function(fullnameFilter, $httpBackend) {
            $httpBackend.flush();

            expect(fullnameFilter('anAdminUser')).toBe('an admin user');
        }));
    });

});
