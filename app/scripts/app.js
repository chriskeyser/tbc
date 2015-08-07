'use strict';

/**
 * @ngdoc overview
 * @name tbcApp
 * @description
 * # tbcApp
 *
 * Main module of the application.
 */
angular
  .module('tbcApp', [
    //'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
     .when('/temple', {
        templateUrl: 'views/temple.html',
        controller: 'EmptyCtrl'
    })
    .when('/lasalle', {
    templateUrl: 'views/lasalle.html',
    controller: 'EmptyCtrl'
    })
    .when('/liberty', {
        templateUrl: 'views/liberty.html',
        controller: 'EmptyCtrl'
    })
    .when('/tibet', {
        templateUrl: 'views/tibet.html',
        controller: 'EmptyCtrl'
    })
    .when('/dalailama', {
        templateUrl: 'views/dalailama.html',
        controller: 'EmptyCtrl'
    })
    .when('/tbc', {
        templateUrl: 'views/tbc.html',
        controller: 'TbcCtrl'
    })
    .when('/tap', {
        templateUrl: 'views/tap.html',
        controller: 'TapCtrl'
    })
    .when('/tibetday', {
        templateUrl: 'views/tibetday.html',
        controller: 'EmptyCtrl'
    })
    .when('/kindness', {
        templateUrl: 'views/kindness.html',
        controller: 'EmptyCtrl'
    })
    .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'EmptyCtrl'
    })
    .when('/financial', {
        templateUrl: 'views/financial.html',
        controller: 'EmptyCtrl'
    })
    .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'EmptyCtrl'
    })
    .when('/dedication', {
        templateUrl: 'views/dedication.html',
        controller: 'EmptyCtrl'
	})
	 .when('/tickets-liberty', {
		templateUrl: 'views/tickets-liberty.html',
		controller: 'EmptyCtrl'
    })
    .when('/tickets-lasalle', {
        templateUrl: 'views/tickets-lasalle.html',
        controller: 'EmptyCtrl'
    })
    .when('/tickets-temple', {
        templateUrl: 'views/tickets-temple.html',
        controller: 'EmptyCtrl'
    })
    .when('/tickets', {
        templateUrl: 'views/tickets.html',
        controller: 'EmptyCtrl'
    })
    .when('/support', {
        templateUrl: 'views/support.html',
        controller: 'EmptyCtrl'
    })
      .otherwise({
        redirectTo: '/'
    });
}).directive('disableNgAnimate', ['$animate', function ($animate) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    $animate.enabled(false, element);
                }
            };
}]);
