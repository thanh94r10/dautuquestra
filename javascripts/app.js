(function () {
    angular.module('app', [
        'ui.router',
        'ngStorage',
        'ui.bootstrap',
        'ngSanitize',
        'angular-scroll-animate',
        'angular-loading-bar'
    ]).run(init);

    init.$inject = ['$rootScope', '$location', '$window'];

    function init($rootScope, $location, $window) {
        function stateChangeStart(event, toState, toParams, fromState) {
        }

        function stateChangeSuccess() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$viewContentLoaded', function () {
        });

        
        CKEDITOR.editorConfig = function (config) {
            config.extraPlugins = 'imageuploader';
        };
    }
})();
