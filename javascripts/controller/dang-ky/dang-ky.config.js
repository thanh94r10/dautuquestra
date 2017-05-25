(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.dang-ky', {
            url: '/dang-ky',
            templateUrl: 'javascripts/controller/dang-ky/dang-ky.html',
            controller: 'DangKyController',
            controllerAs: 'vm'

        });
    }
})();
