(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.su-kien', {
            url: '/su-kien',
            templateUrl: 'javascripts/controller/su-kien/su-kien.html',
            controller: 'SuKienController',
            controllerAs: 'vm'

        });
    }
})();
