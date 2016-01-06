/*!
* FrameBox.js by Octavio Gomez Jr.
* Copyright 2015 TekAgeSolutions.com.
*/

(function () {
    'use strict';

    var framing_url = "http://wylandflorida.com/Images/Framing/";

    angular
        .module('FrameBox', [])
        .directive('frameIt', frameIt)
        .directive('selectIt', selectIt)
        .factory('framing', framing);

    function frameIt($window, $route, $location,$http) {
        // Usage:
        //     <frameIt></frameIt>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            template: "<div id='frameBox'>" +
                                                "<img ng-src='" + framing_url + "{{frameStyle}}/bottom.png' ng-style='bottomStyle' class='framePart bottom' />" +
                                                "<img ng-src='" + framing_url + "{{frameStyle}}/top.png' ng-style='topStyle' class='framePart top rotate180' />" +
                                                "<img ng-src='" + framing_url + "{{frameStyle}}/left.png' ng-style='leftStyle' class='framePart left rotate180' />" +
                                               " <img ng-src='" + framing_url + "{{frameStyle}}/right.png' ng-style='rightStyle' class='framePart right' />" +
                                                "<img ng-src='" + framing_url + "{{frameStyle}}/top-right.png' ng-style='topRightStyle' class='framePart topRight rotate90' />" +
                                                "<img ng-src='" + framing_url + "{{frameStyle}}/top-left.png' ng-style='topLeftStyle' class='framePart topLeft rotate180' />" +
                                               " <img ng-src='" + framing_url + "{{frameStyle}}/bottom-left.png' ng-style='bottomLeftStyle' class='framePart bottomLeft rotate270' />" +
                                               " <img ng-src='" + framing_url + "{{frameStyle}}/bottom-right.png' ng-style='bottomRightStyle' class='framePart bottomRight' />" +
                                            "<img id='theImage' ng-style='imageStyle' class='innerShadow'  ng-src='{{image}}' alt='{{pieceName}}' title='{{pieceName}}' " +
                                            "onerror=\"this.src='http://www.experenzia.com/assets/images/planner/no-image-back.png'\" border='0' />" +
                                         "</div>"
        };

        return directive;

        function link(scope, element, attr) {

            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {

            } else {

                var windowChangeTimer;

                var windowChangeInterval = 1000;

                $(window).resize(function () {

                    clearTimeout(windowChangeTimer);

                    windowChangeTimer = setTimeout(function () {

                        $route.reload();

                    }, windowChangeInterval);

                });

            }

            attr.$observe('image', function () {

                FRAME_IT();

            });

            var FRAME_IT = function () {

                var frameBox = $('#frameBox');

                $('#frameBox').css("height", "auto");

                $(".framePart").hide(500);

                scope.image = attr.image;
                scope.id = attr.id;
                scope.pieceName = attr.piecename;
                scope.frameStyle = $location.search().frameStyle ? $location.search().frameStyle : attr.framestyle;
                scope.dim = attr.dim;

                var splitDelimiters = ["X", "x"];

                var prodDim = scope.dim.toString().trim();

                var dimArray = prodDim.split(/x|X/);

                var prodDim = {
                    height: dimArray[0],
                    width: dimArray[1],
                    outer: 7
                };

                var framePercent = {
                    height: (prodDim.outer / prodDim.height) * 100,
                    width: (prodDim.outer / prodDim.width) * 100,
                };

                scope.imageStyle = {
                    width: "100%",
                };

                angular.element($window).bind('orientationchange', function () {

                    $route.reload();

                });

                var piece = $('#theImage');

                preloadimages([scope.image]).done(function (images) {

                    setTimeout(function () {

                        buildFraming();

                    }, 300);

                });

                function buildFraming() {

                    scope.imageCurrentWidth = piece.offsetParent().width();

                    scope.imageCurrentHeight = piece.offsetParent().height();

                    var winWidth = $(window).width();

                    var frameWidth, frameLeft;

                    var winWidth = $(window).width();

                    if (prodDim.height > prodDim.width) {

                        framePercent.height = (prodDim.height <= 20) ? (framePercent.height - framePercent.height / 3) : framePercent.height;

                        frameWidth = (framePercent.height * frameBox.height()) / 100;

                    } else {

                        framePercent.width = (prodDim.width <= 20) ? (framePercent.width - framePercent.width / 3) : framePercent.width;

                        frameWidth = (framePercent.width * frameBox.width()) / 100;

                    };



                    scope.frameOffset = frameWidth / 2;



                    frameBox.height(frameBox.height() + scope.frameOffset);

                    scope.imageStyle = {
                        position: "relative",
                        top: scope.frameOffset + "px",
                        left: (scope.frameOffset - 15) + "px",
                        height: (piece.height() - scope.frameOffset) + "px",
                        width: (frameBox.width() + 30) - (frameWidth)
                    }

                    scope.topStyle = {
                        left: 0 + 'px',
                        top: 0 + 'px',
                        height: frameWidth,
                        width: '100%'
                    };

                    scope.bottomStyle = {
                        left: 0 + 'px',
                        bottom: 0 + 'px',
                        height: frameWidth,
                        width: '100%'
                    };

                    scope.rightStyle = {
                        right: 0 + 'px',
                        top: 0,
                        height: '100%',
                        width: frameWidth
                    };

                    scope.leftStyle = {
                        left: 0 + "px",
                        top: 0 + 'px',
                        height: '100%',
                        width: frameWidth
                    };

                    scope.topRightStyle = {
                        right: 0 + 'px',
                        top: 0 + 'px',
                        width: frameWidth,
                        height: frameWidth
                    };

                    scope.topLeftStyle = {
                        left: 0 + 'px',
                        top: 0 + 'px',
                        width: frameWidth
                    };

                    scope.bottomRightStyle = {
                        right: 0 + 'px',
                        bottom: 0 + 'px',
                        width: frameWidth
                    };

                    scope.bottomLeftStyle = {
                        left: 0 + 'px',
                        bottom: 0 + 'px',
                        width: frameWidth
                    };

                    scope.$apply();

                    $(".framePart").show(500);

                }
            }
        };
    }

    function selectIt(framing, $location) {

        var directive = {
            link: link,
            restrict: 'E',
            template: "<div ng-repeat='f in frameSamples' class='col-xs-2 col-sm-3 col-md-3 col-lg-3 frameSelection'>" +
                         "<img ng-src='" + framing_url + "small/{{f.packageName}}.png' ng-click='changeFrame(f.packageName);' class='img-responsive frameCorner ' />" +
                      "</div>"
        };

        return directive;

        function link(scope, element, attrs) {

            framing.getFrames().success(function (data) {

                var pieces = [
                    'bottom',
                    'top',
                    'left',
                    'right',
                    'top-right',
                    'top-left',
                    'bottom-left',
                    'bottom-right'
                ];

                scope.frameSamples = data;

                scope.changeFrame = function (style) {

                    $location.search('frameStyle', style);

                    scope.frameStyle = style;

                }

            });

        };
    }

    function framing($http) {
        return {
            getFrames: function () {
                return $http.post("http://wylandflorida.com/api/" + "eStore/" + "getFrames/" + "1", {});
            }
        };
    }

    function preloadimages(arr) {

        var newimages = [], loadedimages = 0

        var postaction = function () { }

        var arr = (typeof arr != "object") ? [arr] : arr

        function imageloadpost() {
            loadedimages++
            if (loadedimages == arr.length) {
                postaction(newimages)
            }
        }

        for (var i = 0; i < arr.length; i++) {
            newimages[i] = new Image()
            newimages[i].src = arr[i]
            newimages[i].onload = function () {
                imageloadpost()
            }
            newimages[i].onerror = function () {
                imageloadpost()
            }
        }

        return {
            done: function (f) {
                postaction = f || postaction
            }
        }
    }

})();
