(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.ho-tro-giao-dich', {
            url: '/ho-tro-giao-dich',
            templateUrl: 'javascripts/controller/ho-tro-giao-dich/ho-tro-giao-dich.html',
            controller: 'HoTroGiaoDichController',
            controllerAs: 'vm'

        });
    }
})();
