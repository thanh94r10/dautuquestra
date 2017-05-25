(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.chi-tiet-tin', {
            url: '/chi-tiet-tin/:postId',
            templateUrl: 'javascripts/controller/chi-tiet-tin/chi-tiet-tin.html',
            controller: 'ChiTietTinController',
            controllerAs: 'vm'

        });
    }
})();
