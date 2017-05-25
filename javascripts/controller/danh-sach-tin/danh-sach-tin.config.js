(function () {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.danh-sach-tin', {
            url: '/danh-sach-tin/:cateId',
            templateUrl: 'javascripts/controller/danh-sach-tin/danh-sach-tin.html',
            controller: 'DanhSachTinController',
            controllerAs: 'vm',
            resolve: {
                dataListItem: function (postService, $stateParams) {
                    var idPost = '';
                    if ($stateParams.cateId === 'tin-tuc') {
                        idPost = 1;
                    }
                    if ($stateParams.cateId === 'dau-tu-tai-chinh') {
                        idPost = 2;
                    }
                    if ($stateParams.cateId === 'ho-tro-giao-dich') {
                        idPost = 3;
                    }

                    return postService.getAllPostById(idPost).then(function (res) {
                        return res;
                    });
                }
            }
        });
    }
})();
