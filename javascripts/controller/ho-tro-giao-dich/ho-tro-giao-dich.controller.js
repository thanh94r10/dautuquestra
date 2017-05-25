(function () {
    angular
        .module('app')
        .controller('HoTroGiaoDichController', HoTroGiaoDichController);

    HoTroGiaoDichController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT'];

    function HoTroGiaoDichController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT) {
        var vm = this;
    };
})();
