(function() {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.admin-page', {
            url: '/admin-page',
            templateUrl: 'javascripts/controller/admin-page/admin-page.html',
            controller: 'AdminPageController',
            controllerAs: 'vm'
        });
    }
})();
