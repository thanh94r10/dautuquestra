(function () {
    angular
        .module('app')
        .controller('GioiThieuController', GioiThieuController);

    GioiThieuController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT'];

    function GioiThieuController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT) {
        var vm = this;

        var y = $(this).scrollTop();
        if (y > 800) {
            $('.gioi-thieu-img-world').fadeIn();
        }
    };
})();
