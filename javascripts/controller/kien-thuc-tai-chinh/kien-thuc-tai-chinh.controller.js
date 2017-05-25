(function () {
    angular
        .module('app')
        .controller('KienThucController', KienThucController);

    KienThucController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT', 'dataListItem'];

    function KienThucController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT, dataListItem) {
        var vm = this;

        vm.paging = paging;
        vm.totalPage = dataListItem.TotalPage;
        vm.totalRecord = dataListItem.totalRecord;
        vm.amountRecordArray = [10, 20, 30, 40];
        vm.amountRecord = 10;
        vm.amount = dataListItem.data.Amount;
        vm.page = dataListItem.data.Page;
        vm.totalRecord = dataListItem.data.TotalRecord;

        vm.getListtinTuc = getListtinTuc;


        init();

        function init() {
            vm.body = {
                contentList: dataListItem.data.Data
            };
            vm.pagination = {
                page: dataListItem.data.Page,
                amount: dataListItem.data.Amount,
                totalPage: dataListItem.data.TotalPage,
                amountRecordArray: [10, 20, 30, 40],
                paging: paging
            };
        }

        function paging(field, page, amount) {
            getListtinTuc(page, amount);
        }


        function getListtinTuc(page, amount) {
            function successCallback(response) {
                if (response.status === 200) {
                    vm.body.contentList = response.data.Data;
                    vm.totalPage = response.data.TotalPage;
                    vm.page = response.data.Page;
                    vm.pagination.amount = response.data.Amount;
                    vm.pagination.totalPage = response.data.TotalPage;
                    vm.pagination.page = response.data.Page;
                    vm.totalRecord = response.data.TotalRecord;
                }

            }
            function errorCallback(error) {
                console.log(error);
            }
            postService.getAllPostById($stateParams.cateId, 'timestartsell_desc', page, amount)
                .then(successCallback, errorCallback);
        }

        $('html, body').animate({
            scrollTop: $('.bld-kien-thuc-box').offset().top - 50
        }, 1000);
    };
})();
