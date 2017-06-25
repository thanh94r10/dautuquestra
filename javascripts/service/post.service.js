(function () {
    'use strict';

    angular
        .module('app')
        .factory('postService', postService);

    postService.$inject = ['$http', 'CONSTANT'];

    function postService($http, CONSTANT) {
        var service = {
            getAllPostById: getAllPostById,
            getPostById: getPostById,
            getPostsRegarding: getPostsRegarding,
            getListPostHome: getListPostHome,
            getRecentPosts: getRecentPosts
        };
        return service;

        ////////////////////////////

        function getAllPostById(cateId, sort, page, amount) {
            sort = 'timepost_desc';
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    element.image = CONSTANT.BASE_URL + element.image.substr(1);
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/PostNews/getListPosts?cateId=' + cateId + '&sort=' + sort + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function getPostById(id) {
            function successCallBack(response) {
                response.data.image = CONSTANT.BASE_URL + response.data.image.substr(1);
                // angular.forEach(response.data.listHtgd, function(e){
                //     e.image = CONSTANT.BASE_URL + e.image.substr(1);
                // });
                // angular.forEach(response.data.listKttc, function(e){
                //     e.image = CONSTANT.BASE_URL + e.image.substr(1);
                // });
                // angular.forEach(response.data.listTintuc, function(e){
                //     e.image = CONSTANT.BASE_URL + e.image.substr(1);
                // });

                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/PostNews/getPostById?postId=' + id).then(successCallBack, errorCallBack);
        }

        function getPostsRegarding(cateId, posiId) {
            function successCallBack(response) {
                angular.forEach(response.data, function (e) {
                    e.image = CONSTANT.BASE_URL + e.image.substr(1);
                });

                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/PostNews/getPostsRegarding?cateId=' + cateId + '&posiId=' + posiId).then(successCallBack, errorCallBack);
        }

        function getListPostHome() {
            function successCallBack(response) {
                angular.forEach(response.data, function (e) {
                    e.image = CONSTANT.BASE_URL + e.image.substr(1);
                });

                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/PostNews/getListPostHome').then(successCallBack, errorCallBack);
        }

        function getRecentPosts(){
            function successCallBack(response){
                angular.forEach(response.data, function (e) {
                    e.image = CONSTANT.BASE_URL + e.image.substr(1);
                });
                return response;
            }

            function errorCallBack(response){
                return response;
            }

            return $http.get('api/PostNews/getRecentPosts').then(successCallBack, errorCallBack);
        }
    }
})();
