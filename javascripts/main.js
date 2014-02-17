(function (ng, undefined) {
    'use strict';
    ng.module('app', ['lrInfiniteScroll'])
        .controller('mainCtrl', ['$scope', '$timeout', function (scope, timer) {

            var images = [
                {path: 'images/F1000002.jpg'},
                {path: 'images/F1000003.jpg'},
                {path: 'images/F1000005.jpg'},
                {path: 'images/F1000006.jpg'},
                {path: 'images/F1000009.jpg'},
                {path: 'images/F1000012.jpg'},
                {path: 'images/F1000016.jpg'},
                {path: 'images/F1000017.jpg'},
                {path: 'images/F1000024.jpg'},
                {path: 'images/F1000025.jpg'},
                {path: 'images/F1000026.jpg'},
                {path: 'images/F1000028.jpg'}

            ];

            scope.images = ng.copy(images);

            scope.loadMore = function () {

                var i = 0, l = 10, index;

                scope.isLoading = true;

                for (i; i < l; i++) {
                    index = Math.floor(Math.random() * (images.length - 1));
                    scope.images.push(ng.copy(images[index]));
                }

                timer(function () {
                    scope.isLoading = false;
                }, 1000);
            };
        }]);
})(angular);
