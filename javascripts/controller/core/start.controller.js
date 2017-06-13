(function () {
    angular
        .module('app')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$http', '$scope', 'accountService',
        'categoryService', '$state', '$localStorage',
        'notificationService', '$timeout', '$interval', '$window', 'itemService', 'CONSTANT',
        'messageCustomerService', '$location', 'statisticService', 'adminService', 'utilService', 'postService'];

    /* @ngInject */
    function CoreController($http, $scope, accountService,
        categoryService, $state, $localStorage, notificationService, $timeout, $interval,
        $window, itemService, CONSTANT, messageCustomerService, $location, statisticService,
        adminService, utilService, postService) {
        var vm = this;
        vm.isAdmin = false;
        vm.templateAdmin = 'javascripts/controller/core/admin-dashboard.html';
        vm.homepageTemplate = 'javascripts/controller/core/homepage.html';

        vm.linkFaceFooter = linkFaceFooter;
        vm.linkTubeFooter = linkTubeFooter;

        vm.goListPostPage = goListPostPage;

        var widthScreen = $(window).width();


        function goListPostPage(id) {
            var title = '';
            if (id === 1) {
                title = 'tin-tuc';
            }
            if (id === 2) {
                title = 'dau-tu-tai-chinh';
            }
            if (id === 3) {
                title = 'ho-tro-giao-dich';
            }
            $state.go('start.danh-sach-tin', { cateId: title });
        }

        // Slider headr
        vm.slidesData = [
            {
                src: "style/icon/qtslider/slide1.jpg",
                caption1: "Hãy kết nối QUESTRA với mọi người...",
                caption2: "và nhận những phần thưởng xứng đáng.",
                nameBtn: "Đăng ký ngay!",
                linkBtn: ""
            },
            {
                src: "style/icon/qtslider/slide2.jpg",
                caption1: "Gia tăng lợi nhuận từ 300€ đến 15.000€ hàng tháng.",
                caption2: "Tất cả nằm trong tay chúng ta!",
                nameBtn: "Đăng ký ngay!",
                linkBtn: ""
            },
            {
                src: "style/icon/qtslider/slide3.jpg",
                caption1: "Hãy kết nối QUESTRA với mọi người...",
                caption2: "và nhận những phần thưởng xứng đáng.",
                nameBtn: "Đăng ký ngay!",
                linkBtn: ""
            },
            {
                src: "style/icon/qtslider/slide4.jpg",
                caption1: "Gia tăng lợi nhuận từ 300€ đến 15.000€ hàng tháng.",
                caption2: "Tất cả nằm trong tay chúng ta!",
                nameBtn: "Đăng ký ngay!",
                linkBtn: ""
            }
        ];

        vm.topFunction = topFunction;

        vm.templateAdmin = 'javascripts/controller/core/admin-dashboard.html';
        vm.homepageTemplate = 'javascripts/controller/core/homepage.html';

        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';

            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load 
        var $myCarousel = $('#carousel-example-generic'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

        //Initialize carousel 
        $myCarousel.carousel();

        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);

        //Pause carousel  
        $myCarousel.carousel('pause');


        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("onTop").style.display = "block";
            } else {
                document.getElementById("onTop").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        }


        /// foooter

        function linkFaceFooter() {
            $window.open("https://www.facebook.com/Atlanticgam.Vietnam/", "_blank");
        }

        function linkTubeFooter() {
            $window.open("https://www.youtube.com/channel/UC_WaV2Pu3NLEkaFcRtRXw2A", "_blank");
        }

        vm.linkRegister = function () {
            $window.open("https://private.atlanticgam.es/#/sign-up/partner=P09201483790591", "_blank");
        }

        $('.carousel').carousel({
            interval: 2000
        });

        vm.animateElementInLeft = function ($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
        };

        vm.animateElementInRight = function ($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInRight'); // this example leverages animate.css classes
        }

        vm.animateElementOut = function ($el) {
            // $el.addClass('hidden');
            // $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
        };

        $(".goi-dau-tu-white-icon-title").textAnimation({
            mode: "jump",
            altitude: 10,              //jump altitude[integer] 
            bound: false,             //bound animation[boolean]
            duration: 50,              //animation duration time[integer]
            repeat: false              //repeat animation[boolean]
        });

        vm.register = function () {
            window.open('https://goo.gl/forms/8DA9bUVew7811spn1', '_blank');
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

        /// open popup if have
        $timeout(function () {
            if (widthScreen > 767) {
                $('#myModal').modal('show');
            }
        }, 10000);

        vm.viewAd = function () {
            $('#myModal').modal('hide');
            $state.go('start.dang-ky');
        }

        vm.listTin = [];
        getListTintuc();

        function getListTintuc() {

            function successCallBack(response) {
                if (response.status === 200) {
                    angular.forEach(response.data.Data.reverse(), function (element, index) {
                        if (index < 5) {
                            vm.listTin.push(element);
                        }
                    });
                    // vm.listTintuc = response.data;
                }
            }
            function errorCallBack(response) {

            }
            postService.getAllPostById(1).then(successCallBack, errorCallBack);
        }

        vm.viewDetail = function (id) {
            $state.go('start.chi-tiet-tin', { postId: id });
        }

        vm.toggleBtn =  function(){
            if (widthScreen < 767) {
                $( ".navbar-toggle" ).click();
            }
        }

        if (widthScreen < 767) {
            $('#main-nav').removeClass('navbar-fixed-top');
        }

    }

})();
