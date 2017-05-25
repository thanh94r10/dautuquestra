(function () {
    angular
        .module('app')
        .controller('PostTinController', PostTinController);

    PostTinController.$inject = ['$http', '$state', '$scope', 'userService',
        'advertisementService', 'accountService', '$localStorage', 'requestService', 'CONSTANT'];

    function PostTinController($http, $state, $scope, userService,
        advertisementService, accountService, $localStorage, requestService, CONSTANT) {
        var vm = this;
        

    };
})();
