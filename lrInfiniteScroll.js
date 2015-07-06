(function (ng) {
    'use strict';
    var module = ng.module('lrInfiniteScroll', []);

    module.directive('lrInfiniteScroll', ['$timeout', function ($timeout) {
        return{
            link: function (scope, element, attr) {
                var lengthThreshold = attr.scrollThreshold || 50,
                    timeThreshold = attr.timeThreshold || 400,
                    handlerTop = scope.$eval(attr.lrInfiniteScroll),
                    handlerBottom = scope.$eval(attr.lrInfiniteScrollInverse),
                    inverse = (typeof handlerBottom == 'function') ? true : false,
                    promise = null,
                    lastRemaining = 9999,
                    lastRemainingInverse = 9999;

                lengthThreshold = parseInt(lengthThreshold, 10);
                timeThreshold = parseInt(timeThreshold, 10);

                if (!handlerTop || !ng.isFunction(handlerTop)) {
                    handlerTop = ng.noop;
                }

                if (!handlerBottom || !ng.isFunction(handlerBottom)) {
                    handlerBottom = ng.noop;
                }

                element.bind('scroll', function () {
                    var el = element[0];
                    var remainingInverse = inverse ? el.scrollTop : null;
                    var remaining = el.scrollHeight - (el.clientHeight + el.scrollTop);

                    //if we have reached the threshold and we scroll down
                    if (remaining < lengthThreshold && (remaining - lastRemaining) < 0) {
                        //if there is already a timer running which has no expired yet we have to cancel it and restart the timer
                        if (promise !== null) {
                            $timeout.cancel(promise);
                        }
                        promise = $timeout(function () {
                            if (typeof handlerTop == 'function') {
                                handlerTop();
                            }
                            promise = null;
                        }, timeThreshold);
                    }
                    lastRemaining = remaining;

                    if (remainingInverse && remainingInverse < lengthThreshold && (remainingInverse - lastRemainingInverse) < 0) {
                        //if there is already a timer running which has no expired yet we have to cancel it and restart the timer
                        if (promise !== null) {
                            $timeout.cancel(promise);
                        }
                        promise = $timeout(function () {
                            if (typeof handlerBottom == 'function') {
                                handlerBottom();
                            }
                            promise = null;
                        }, timeThreshold);
                    }
                    lastRemainingInverse = remainingInverse;
                });

                element.on('$destroy', function() {
                    $timeout.cancel(promise);
                });
            }

        };
    }]);
})(angular);
