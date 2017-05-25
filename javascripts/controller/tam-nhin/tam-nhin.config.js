(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.tam-nhin', {
            url: '/tam-nhin',
            templateUrl: 'javascripts/controller/tam-nhin/tam-nhin.html',
            controller: 'TamNhinController',
            controllerAs: 'vm'

        });
    }
})();
