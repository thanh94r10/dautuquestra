(function () {
    angular
        .module('app')
        .controller('ChiTietTinController', ChiTietTinController);

    ChiTietTinController.$inject = ['$http', '$state', '$scope', 'advertisementService',
        '$stateParams', '$localStorage', 'requestService', 'CONSTANT', 'postService', 'commentService', 'utilService'];

    function ChiTietTinController($http, $state, $scope,
        advertisementService, $stateParams, $localStorage, requestService, CONSTANT, postService, commentService, utilService) {
        var vm = this;
        vm.post = {};
        vm.listComment = [];
        vm.comment = {
            PostNewId: $stateParams.postId,
            Name: '',
            Email: '',
            Website: '',
            content: ''
        };

        vm.listHtgd = [];
        vm.listKttc = [];
        vm.listTintuc = [];

        vm.postComment = postComment;

        init();

        function init() {
            getPost();
            getComment();
            getListTinTuc();
            getListHtgd();
            getListKttc();
        }

        function getPost() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.post = response.data;
                    // vm.listHtgd = response.data.listHtgd;
                    // vm.listKttc = response.data.listKttc;
                    // vm.listTintuc = response.data.listTintuc;
                    var decodeDesc = $('<div/>').html(vm.post.description).text();
                    $('#DescEditor').html(decodeDesc);
                }
            }
            function errorCallBack(response) {

            }
            postService.getPostById($stateParams.postId).then(successCallBack, errorCallBack);
        }

        function getComment() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listComment = response.data.Data;
                }
            }
            function errorCallBack(response) {

            }
            commentService.getComment($stateParams.postId).then(successCallBack, errorCallBack);
        }

        // for(var i = 0 ; i < 5 ; i++){
        //     var ob = {
        //         image: 'http://dautuquestra.azurewebsites.net//Content/Data/imagespost/2017-05-21T05-34-48-208gocdautu.png',
        //         title: i + ' Hướng dẫn nhập thông tin cá nhân.',
        //         TimePost: '2017-05-21T05:34:48.21',
        //         shortDesc: 'Tập đoàn Atlantic Global Asset Management vui mừng thông báo về việc hoàn thành trong tuần làm việc hiện tại. Các nhà quản lý của Atlantic Global Asset Management đã một lần nữa chứng minh mức độ cao về tính chuyên nghiệp, thông qua một loạt các giao dịch sinh lợi cho công ty'
        //     };
        //     vm.listHtgd.push(ob);
        //     vm.listKttc.push(ob);
        //     vm.listTintuc.push(ob);
        // }

        function postComment() {

            function successCallBack(response) {
                if (response.status === 200) {
                    getComment();
                    vm.comment = {
                        PostNewId: $stateParams.postId,
                        Name: '',
                        Email: '',
                        Website: '',
                        content: ''
                    }
                }
            }
            function errorCallBack(response) {

            }
            commentService.createComment(vm.comment).then(successCallBack, errorCallBack);
        }

        function getListHtgd(){
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listHtgd = response.data;
                }
            }
            function errorCallBack(response) {

            }
            postService.getPostsRegarding(3, $stateParams.postId).then(successCallBack, errorCallBack);
        }

        function getListKttc(){
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listKttc = response.data;
                }
            }
            function errorCallBack(response) {

            }
            postService.getPostsRegarding(2, $stateParams.postId).then(successCallBack, errorCallBack);
        }

        function getListTinTuc(){
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listTintuc = response.data;
                }
            }
            function errorCallBack(response) {

            }
            postService.getPostsRegarding(1, $stateParams.postId).then(successCallBack, errorCallBack);
        }

        vm.redirectSociable = function(link){
            window.open(link, '_blank');
        }

        vm.register = function(){
            window.open('https://goo.gl/forms/8DA9bUVew7811spn1', '_blank');
        }

        vm.linkFaceFooter = function() {
            window.open("https://www.facebook.com/Atlanticgam.Vietnam/", "_blank");
        }

        vm.linkTubeFooter = function() {
            window.open("https://www.youtube.com/channel/UC_WaV2Pu3NLEkaFcRtRXw2A", "_blank");
        }

        vm.linkRegister = function () {
            window.open("https://private.atlanticgam.es/#/sign-up/partner=P09201483790591", "_blank");
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

    };
})();
