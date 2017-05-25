(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.kien-thuc-tai-chinh', {
            url: '/kien-thuc-tai-chinh/:cateId',
            templateUrl: 'javascripts/controller/kien-thuc-tai-chinh/kien-thuc-tai-chinh.html',
            controller: 'KienThucController',
            controllerAs: 'vm',
            resolve: {
                dataListItem: function (postService, $stateParams) {
                    return postService.getAllPostById($stateParams.cateId).then(function (res) {
                        return res;
                    });
                }
            }
        });
    }
})();
