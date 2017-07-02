(function () {
    angular
        .module('app')
        .controller('SuKienController', SuKienController);

    SuKienController.$inject = ['$http', '$scope', 'accountService',
        'categoryService', '$state', '$localStorage',
        'notificationService', '$timeout', '$interval', '$window', 'itemService', 'CONSTANT',
        'messageCustomerService', '$location', 'statisticService', 'adminService', 'utilService', 'postService'];

    /* @ngInject */
    function SuKienController($http, $scope, accountService,
        categoryService, $state, $localStorage, notificationService, $timeout, $interval,
        $window, itemService, CONSTANT, messageCustomerService, $location, statisticService,
        adminService, utilService, postService) {
        var vm = this;


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

        vm.listTin = [];
        getListTintuc();

        function getListTintuc() {

            function successCallBack(response) {
                if (response.status === 200) {
                    angular.forEach(response.data.Data, function (element, index) {
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

    }

})();
