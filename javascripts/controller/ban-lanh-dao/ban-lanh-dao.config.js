(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.ban-lanh-dao', {
            url: '/ban-lanh-dao',
            templateUrl: 'javascripts/controller/ban-lanh-dao/ban-lanh-dao.html',
            controller: 'BanLanhDaoController',
            controllerAs: 'vm'

        });
    }
})();
