describe('ngImprovedTesting style of testing promises', function() {

    describe('should invoke the then callback of a promise after a $q.tick()', function() {
        it('when using a module created using the ModuleBuilder API', function() {
            ModuleBuilder.forModule('myApp').build();
        });

        it('when using angular.mock.module', function() {
            module('myApp', 'ngImprovedTesting');
        });


        afterEach(inject(function($q, $rootScope) {
            // given
            var promiseSuccessCallback = jasmine.createSpy();
            var deferred = $q.defer();
            deferred.promise.then(promiseSuccessCallback);

            // when
            deferred.resolve('someValue');

            // then
            expect(promiseSuccessCallback).not.toHaveBeenCalled();

            // when
            $rootScope.$digest();

            // then
            expect(promiseSuccessCallback).not.toHaveBeenCalled();

            // when
            $q.tick();

            // then
            expect(promiseSuccessCallback).toHaveBeenCalledWith('someValue');
        }));
    });
});
