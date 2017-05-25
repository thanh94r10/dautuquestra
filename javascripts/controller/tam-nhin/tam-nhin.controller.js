(function () {
    angular
        .module('app')
        .controller('TamNhinController', TamNhinController);

    TamNhinController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT'];

    function TamNhinController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT) {
        var vm = this;
    };
})();
