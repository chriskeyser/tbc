'use strict';

angular.module('tbcApp')
  .controller('TbcCtrl', function ($scope, Lightbox) {   
    var images = $scope.images = [];
    
    $scope.images.push({
        'thumb': '/images/tbc/tbc1t.jpg',
        'url': '/images/tbc/tbc1.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc2.jpg',
        'thumb': '/images/tbc/tbc2t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc3.jpg',
        'thumb': '/images/tbc/tbc3t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc4.jpg',
        'thumb': '/images/tbc/tbc4t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc5.jpg',
        'thumb': '/images/tbc/tbc5t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc6.jpg',
        'thumb': '/images/tbc/tbc6t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc7.jpg',
        'thumb': '/images/tbc/tbc7t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc8.jpg',
        'thumb': '/images/tbc/tbc8t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc9.jpg',
        'thumb': '/images/tbc/tbc9t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc10.jpg',
        'thumb': '/images/tbc/tbc10t.jpg'
    });
    $scope.images.push({
        'url': '/images/tbc/tbc11.jpg',
        'thumb': '/images/tbc/tbc11t.jpg'
    });

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };
});
