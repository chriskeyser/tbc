'use strict';

angular.module('tbcApp')
  .controller('TapCtrl', function ($scope, Lightbox) {   
    var images = $scope.images = [];
    
    $scope.images.push({
        'thumb': '/images/tap/tap1t.jpg',
        'url': '/images/tap/tap1.jpg'

    });
    $scope.images.push({
        'url': '/images/tap/tap2.jpg',
        'thumb': '/images/tap/tap2t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap3.jpg',
        'thumb': '/images/tap/tap3t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap4.jpg',
        'thumb': '/images/tap/tap4t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap5.jpg',
        'thumb': '/images/tap/tap5t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap6.jpg',
        'thumb': '/images/tap/tap6t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap7.jpg',
        'thumb': '/images/tap/tap7t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap8.jpg',
        'thumb': '/images/tap/tap8t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap9.jpg',
        'thumb': '/images/tap/tap9t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap10.jpg',
        'thumb': '/images/tap/tap10t.jpg'
    });
    $scope.images.push({
        'url': '/images/tap/tap11.jpg',
        'thumb': '/images/tap/tap11t.jpg'
    });

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };
});
