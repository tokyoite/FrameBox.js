/*!
* Framify.js by Octavio Gomez Jr.
* Copyright 2015 TekAgeSolutions.com.
*/

(function () {
    'use strict';

    //FRAME IMAGE URL
    var framing_url = "http://wylandflorida.com/Images/Framing/";

    //BUILD MODULE
    angular
        .module('FrameBox', [])
        .directive('frameIt', frameIt)
        .directive('selectIt', selectIt)
        .factory('framing', framing)
    .run(initializing);

    // Usage:
    //    <div frame-it dim="{{size}}" image="{{image}}" piecename="{{name}}" framestyle="{{frameStyle}}"></div>
    // Creates:
    //LETS BUILD THE FRAME
    var incrementFrame = 0;
    function frameIt($window, $route, $rootScope, $location, $http) {

        var directive = {
            scope: {
                image: '@',
                dim: '@',
                piecename: '@',
                framestyle: '@'
            },
            repalce:true,
            link: link,
            restrict: 'A',
            template: "<span style='display:{{showFramePart ? \"block\":\"none\"}}'>" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/bottom.png' ng-style='bottomStyle' class='framePart bottom pulse' />" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/top.png' ng-style='topStyle' class='framePart top rotate180 pulse' />" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/left.png' ng-style='leftStyle' class='framePart left rotate180 pulse' />" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/right.png' ng-style='rightStyle' class='framePart right pulse' />" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/top-right.png' ng-style='topRightStyle' class='framePart topRight rotate90 pulse' />" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/top-left.png' ng-style='topLeftStyle' class='framePart topLeft rotate180 pulse' />" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/bottom-left.png' ng-style='bottomLeftStyle' class='framePart bottomLeft rotate270 pulse' />" +
                          "<img ng-src='" + framing_url + "{{frameStyle}}/bottom-right.png' ng-style='bottomRightStyle' class='framePart bottomRight pulse' />" +
                      "</span>" +
                      "<img ng-style='imageStyle' class='innerShadow'  ng-src='{{image}}' alt='{{pieceName}}' title='{{pieceName}}' " +
                        "onerror=\"this.src='http://www.experenzia.com/assets/images/planner/no-image-back.png'\" border='0' />"
        };

        function link(scope, element, attr) {

            var frameIninitalizing = true;

            scope.image =  attr.image;

            scope.increm = incrementFrame++;

            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {

            } else {
                var windowChangeTimer;
                var windowChangeInterval = 1000;
                window.onresize = function (event) {
                    clearTimeout(windowChangeTimer);
                    windowChangeTimer = setTimeout(function () {
                        $route.reload();
                    }, windowChangeInterval);
                };
            };

            var FRAME_IT = function () {

                scope.showFramePart = false;

                scope.pieceName = attr.piecename;

                scope.frameStyle = $location.search()["frame" + scope.increm] ?
                    $location.search()["frame" + scope.increm] : $rootScope['frame' + scope.increm] ?
                    $rootScope['frame' + scope.increm] : attr.framestyle;


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

 

                var piece = $($(element).children()[1]);

                preloadimages([scope.image]).done(function (images) { buildFraming();});

                function buildFraming() {

                    var winWidth = window.innerWidth;

                    var frameWidth, frameLeft;

                    var winWidth = window.innerWidth;

                    if (prodDim.height > prodDim.width) {

                        framePercent.height = (prodDim.height <= 20) ? (framePercent.height - framePercent.height / 3) : framePercent.height;

                        frameWidth = (framePercent.height * element.height()) / 100;

                    } else {

                        framePercent.width = (prodDim.width <= 20) ? (framePercent.width - framePercent.width / 3) : framePercent.width;

                        frameWidth = (framePercent.width * element.width()) / 100;

                    };

                    scope.imageCurrentWidth = piece.offsetParent().width();

                    scope.imageCurrentHeight = piece.offsetParent().height();

                    scope.frameOffset = frameWidth / 2;

                    element.height(piece.height() + scope.frameOffset);

                    scope.imageStyle = {
                        position: "relative",
                        top: scope.frameOffset + "px",
                        left: (scope.frameOffset - 15) + "px",
                        height: (piece.height() - scope.frameOffset) + "px",
                        width: (element.width() + 30) - (frameWidth)
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

                    scope.showFramePart = true;

                    scope.$apply();

                }

            }

            scope.$watch(function () {

                return [attr.image, attr.dim, attr.piecename];

            }, function () {
                if (frameIninitalizing) {

                    frameIninitalizing = false;

                } else {

                    FRAME_IT();

                }

            }, true);




            $rootScope.$watch('frame' + scope.increm, function () {

                FRAME_IT();

            });

            angular.element($window).bind('orientationchange', function () {

                FRAME_IT();

            });

        };

        return directive;
    }

    //LETS SELECT THE FRAME
    var incremSelection = 0;
    function selectIt($location,$rootScope) {

        var directive = {
            scope:true,
            link: link,
            restrict: 'A',
            template: "<div ng-repeat='f in $root.framepieces' class='col-xs-3 col-sm-3 col-md-4 col-lg-3 frameSelection'>" +
                         "<img ng-src='" + framing_url + "small/{{f.packageName}}.png' ng-click='changeFrame(f.packageName);' class='img-responsive frameCorner ' />" +
                      "</div>"
        };

        return directive;

        function link(scope, element, attrs) {

            scope.increm = incremSelection++;

            scope.changeFrame = function (style) {

                $location.search('frame' + scope.increm, style);

                $rootScope['frame' + scope.increm] = style;

            }

        };
    }

    //LETS GET SOME FRAMES
    function framing($http) {
        return {
            getFrames: function () {
                return $http.post("http://wylandflorida.com/api/" + "eStore/" + "getFrames/" + "1", {});
            }
        };
    }

    //LETS PRELOAD OUR IMAGES FIRST
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

    //CLEAR INCREMENTALS ON ROUTE CHANGE
    function initializing($rootScope, $location, framing) {

        framing.getFrames().success(function (data) {

            angular.forEach(data, function (value, index) {

                var framePieces = ["bottom", "top", "left", "right", "top-right", "top-left", "bottom-left", "bottom-right"];

                angular.forEach(framePieces, function (framepiece, index) {

                    var newFramePieceImage = new Image();

                    newFramePieceImage.src = framing_url + value.packageName + "/" + framepiece + ".png";

                });

                var newFramePiece = new Image();

                newFramePiece.src = framing_url + "Images/Framing/small/" + value.packageName + ".png";

            });

            $rootScope.framepieces = data;

        });

        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.currentRoute = $location.path();
        });

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
           incrementFrame = 0; incremSelection = 0;
        });
    }

})();
