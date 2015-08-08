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
    'bootstrapLightbox',
    'angular-carousel'
  ])
  .config(["$routeProvider", function ($routeProvider) {
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
}]).directive('disableNgAnimate', ['$animate', function ($animate) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    $animate.enabled(false, element);
                }
            };
}]);

'use strict';

/**
 * @ngdoc function
 * @name tbcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tbcApp
 */
angular.module('tbcApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.eventInterval = 5000;
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
    
}]);

'use strict';

/**
 * @ngdoc function
 * @name tbcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tbcApp
 */
angular.module('tbcApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
  }]);

'use strict';

/**
 * @ngdoc function
 * @name tbcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tbcApp
 */
angular.module('tbcApp')
  .controller('EmptyCtrl', ["$scope", function ($scope) {
  }]);

'use strict';

angular.module('tbcApp')
  .controller('TapCtrl', ["$scope", "Lightbox", function ($scope, Lightbox) {   
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
}]);

'use strict';

angular.module('tbcApp')
  .controller('TbcCtrl', ["$scope", "Lightbox", function ($scope, Lightbox) {   
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
}]);
