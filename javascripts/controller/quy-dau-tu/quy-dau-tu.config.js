(function() {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.quy-dau-tu', {
            url: '/quy-dau-tu',
            templateUrl: 'javascripts/controller/quy-dau-tu/quy-dau-tu.html',
            controller: 'QuyDauTuController',
            controllerAs: 'vm'
        });
    }
})();
