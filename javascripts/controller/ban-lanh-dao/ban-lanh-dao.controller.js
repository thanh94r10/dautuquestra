(function () {
    angular
        .module('app')
        .controller('BanLanhDaoController', BanLanhDaoController);

    BanLanhDaoController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT'];

    function BanLanhDaoController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT) {
        var vm = this;
    };
})();
