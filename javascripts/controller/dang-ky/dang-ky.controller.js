(function () {
    angular
        .module('app')
        .controller('DangKyController', DangKyController);

    DangKyController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT', '$window', 'utilService', 'postService'];

    function DangKyController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT, $window, utilService, postService) {
        var vm = this;

        vm.registerLink = registerLink;

        function registerLink() {
            $window.open("https://private.atlanticgam.es/#/sign-up/partner=P09201483790591", "_blank")
        }

        vm.email = '';
        vm.registerEmail = function () {
            if (vm.email == '') {
                swal("Oops!", "Bạn chưa nhập email vào ô đăng ký!", "warning");
            } else {
                function successCallBack(response) {
                    swal("Thành công!", "Đăng ký nhận tin qua email thành công!", "success");
                    vm.email = '';
                }
                function errorCallBack(response) {

                }
                utilService.registerMail(vm.email).then(successCallBack, errorCallBack);
            }
        }
        vm.redirectSociable = function(link){
            window.open(link, '_blank');
        }

        $('html, body').animate({
            scrollTop: $('.box-widget').offset().top - 100
        });

        vm.listHtgd = [];
        vm.listKttc = [];
        vm.listTintuc = [];

        getListTinTuc();
        getListHtgd();
        getListKttc();


        function getListHtgd() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listHtgd = response.data;
                }
            }
            function errorCallBack(response) {

            }
            postService.getPostsRegarding(3, 0).then(successCallBack, errorCallBack);
        }

        function getListKttc() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listKttc = response.data;
                }
            }
            function errorCallBack(response) {

            }
            postService.getPostsRegarding(2, 0).then(successCallBack, errorCallBack);
        }

        function getListTinTuc() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listTintuc = response.data;
                }
            }
            function errorCallBack(response) {

            }
            postService.getPostsRegarding(1, 0).then(successCallBack, errorCallBack);
        }


    };
})();
