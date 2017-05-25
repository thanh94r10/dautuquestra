(function () {
    angular
        .module('app')
        .controller('DanhSachTinController', DanhSachTinController);

    DanhSachTinController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT', 'postService', 'dataListItem'];

    function DanhSachTinController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT, postService, dataListItem) {
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

        vm.viewDetail = function (id) {
            $state.go('start.chi-tiet-tin', { postId: id });
        }

        vm.titleList = '';

        vm.idPost = '';
        if ($stateParams.cateId === 'tin-tuc') {
            vm.idPost = 1;
            vm.titleList = 'Tin Tức';
        }
        if ($stateParams.cateId === 'dau-tu-tai-chinh') {
            vm.idPost = 2;
            vm.titleList = 'Đầu tư tài chính';
        }
        if ($stateParams.cateId === 'ho-tro-giao-dich') {
            vm.idPost = 3;
            vm.titleList = 'Hỗ trợ giao dịch';
        }

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
            $('html, body').animate({
                scrollTop: $('.bld-tin-tuc-box-content').offset().top - 50
            });
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
            postService.getAllPostById(vm.idPost, 'timestartsell_desc', page, amount)
                .then(successCallback, errorCallback);
        }

        $('html, body').animate({
            scrollTop: $('.bld-tin-tuc-box-content').offset().top - 50
        }, 1000);

        vm.animateElementInEvent = function ($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
        };

        vm.animateElementOutEvent = function ($el) {

        };

        vm.animateElementInOod = function ($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInRight'); // this example leverages animate.css classes
        };

        vm.animateElementOutOod = function ($el) {

        };
    };
})();
