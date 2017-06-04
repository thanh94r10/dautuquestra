(function () {
    angular
        .module('app')
        .controller('QuyDauTuController', QuyDauTuController);

    QuyDauTuController.$inject = ['$http', '$state', '$scope',
        '$stateParams', '$localStorage', 'CONSTANT'];

    function QuyDauTuController($http, $state, $scope, $stateParams, $localStorage, CONSTANT) {
        var vm = this;
        vm.register = register;
        vm.showBoxToTop = showBoxToTop;

        $('html, body').animate({
            scrollTop: $('.qdt-header-title').offset().top - 50
        }, 1000);
        
        function register(){
            window.open('https://private.atlanticgam.es/#/sign-up/partner=P09201483790591', '_blank');
        }

        function showBoxToTop(colorBox){
            $('html, body').animate({
                scrollTop: $('.goi-dau-tu-' + colorBox + '-box').offset().top - 50
            }, 1000);
        }

        var widthScreen = $(window).width();

        var numSildes = 3;

        if(widthScreen < 767){
            numSildes = 1;
        }

        $('.pay-way-slider-bxslider').bxSlider({
            minSlides: numSildes,
            maxSlides: numSildes,
            slideWidth: 360,
            slideMargin: 10,
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev',
            controls: true,
            pager: false,
            nextText: '<img src="http://i.imgur.com/TZDsPC0.png" height="25" width="25"/>',
            prevText: '<img src="http://i.imgur.com/AKjTWvT.png" height="25" width="25"/>',
        });

    };
})();
