(function () {
    angular
        .module('app')
        .controller('AdminPageController', AdminPageController);

    AdminPageController.$inject = ['$http', '$state', '$scope', 'userService',
        'advertisementService', 'accountService', '$localStorage', 'requestService', 'CONSTANT'];

    function AdminPageController($http, $state, $scope, userService,
        advertisementService, accountService, $localStorage, requestService, CONSTANT) {
        var vm = this;
        

    };
})();
