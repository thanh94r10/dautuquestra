(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.gioi-thieu', {
            url: '/gioi-thieu',
            templateUrl: 'javascripts/controller/gioi-thieu/gioi-thieu.html',
            controller: 'GioiThieuController',
            controllerAs: 'vm'

        });
    }
})();
