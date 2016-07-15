describe('Vanilla style of testing promises', function() {
    var $q;
    var $rootScope;

    beforeEach(inject(function(_$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));


    it('should invoke the then callback of a promise only after a $rootScope.$digest()', function() {
        // given
        var promiseSuccessCallback = jasmine.createSpy('first').and.returnValue('someModifiedValue');
        var chainedPromiseSuccessCallback = jasmine.createSpy('second');
        var deferred = $q.defer();
        deferred.promise.then(promiseSuccessCallback).then(chainedPromiseSuccessCallback);

        // when
        deferred.resolve('someValue');

        // then
        expect(promiseSuccessCallback).not.toHaveBeenCalled();
        expect(chainedPromiseSuccessCallback).not.toHaveBeenCalled();

        // when
        $rootScope.$digest(); // triggers the promiseSuccessCallback

        // then
        expect(promiseSuccessCallback).toHaveBeenCalledWith('someValue');
        expect(chainedPromiseSuccessCallback).toHaveBeenCalledWith('someModifiedValue');
    });
});
