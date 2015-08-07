'use strict';

/**
 * @ngdoc function
 * @name tbcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tbcApp
 */
angular.module('tbcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.eventInterval = 7000;
    $scope.isLoaded = false;
    $scope.loadCompleted = function () {
        $scope.isLoaded = true;
    };
    
    var slides = $scope.eventSlides = [];
    
    $scope.eventSlides.push({
        image: '/images/rotator-liberty.jpg',
        url: '#/liberty',
        title: '2015 Liberty Medal Award Ceremony',
        location: 'National Constitution Center Lawn, Independence National Historic Park',
        datetime: 'October 26th, 5pm to 6pm',
        text: 'Join His Holiness the 14th Dalai Lama when he receives the 2015 Liberty Medal in a public ceremony followed by a short public talk, on the lawn of the National Constitution Center.  All are invited!',
        attribution: 'Image: Rusty Stewart/DLIAL 2015'
    });
    
    $scope.eventSlides.push({
        image: '/images/rotator-lasalle.jpg',
        url: '#/lasalle',
        title: 'The Wisdom of Cherishing Others.  Eight Verses for Training the Mind, by Kadampa Geshe Langri Tangpa (1054 - 1123)',
        location: 'Lasalle University, Tom Gola Arena',
        datetime: 'October 26th, 1pm to 3pm',
        text: 'Join His Holiness the 14th Dalai Lama for a teaching on the great text, Eight Verses for Training the Mind. Composed in the 11th century by Master Langri Tangpa, these eight simple verses have become among the most important writings studied in the Buddhist tradition, while embodying the universal truths of all of the world\'s major faiths and traditions as well.',
        attribution: ' '
   });

    $scope.eventSlides.push({
        image: '/images/rotator-temple.jpg',
        url: '#/temple',
        title: 'Finding Happiness in Troubled Times: Educating the Heart in the 21st Century',
        location: 'The Liacouras Center, Temple University',
        datetime: 'October 27th, 9:30am to 11:30am',
        text: 'The true essence of humankind is kindness. There are other qualities which come from education or knowledge, but it is essential, if one wishes to be a genuine human being and impart satisfying meaning to one\'s existence, to have a good heart." Please join His Holiness for a public talk and program on creating peace, love and happiness through educating the heart.',
        attribution: ' '
    });
    
});
