"use strict";angular.module("tbcApp",["ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","bootstrapLightbox","angular-carousel"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/main",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/temple",{templateUrl:"views/temple.html",controller:"EmptyCtrl"}).when("/lasalle",{templateUrl:"views/lasalle.html",controller:"EmptyCtrl"}).when("/liberty",{templateUrl:"views/liberty.html",controller:"EmptyCtrl"}).when("/tibet",{templateUrl:"views/tibet.html",controller:"EmptyCtrl"}).when("/dalailama",{templateUrl:"views/dalailama.html",controller:"EmptyCtrl"}).when("/tbc",{templateUrl:"views/tbc.html",controller:"TbcCtrl"}).when("/tap",{templateUrl:"views/tap.html",controller:"TapCtrl"}).when("/tibetday",{templateUrl:"views/tibetday.html",controller:"EmptyCtrl"}).when("/kindness",{templateUrl:"views/kindness.html",controller:"EmptyCtrl"}).when("/contactus",{templateUrl:"views/contactus.html",controller:"EmptyCtrl"}).when("/financial",{templateUrl:"views/financial.html",controller:"EmptyCtrl"}).when("/faq",{templateUrl:"views/faq.html",controller:"EmptyCtrl"}).when("/dedication",{templateUrl:"views/dedication.html",controller:"EmptyCtrl"}).when("/tickets-liberty",{templateUrl:"views/tickets-liberty.html",controller:"EmptyCtrl"}).when("/tickets-lasalle",{templateUrl:"views/tickets-lasalle.html",controller:"EmptyCtrl"}).when("/tickets-temple",{templateUrl:"views/tickets-temple.html",controller:"EmptyCtrl"}).when("/tickets",{templateUrl:"views/tickets.html",controller:"EmptyCtrl"}).when("/support",{templateUrl:"views/support.html",controller:"EmptyCtrl"}).otherwise({redirectTo:"/"})}]).directive("disableNgAnimate",["$animate",function(a){return{restrict:"A",link:function(b,c){a.enabled(!1,c)}}}]),angular.module("tbcApp").controller("MainCtrl",["$scope",function(a){a.eventInterval=5e3,a.isLoaded=!1,a.loadCompleted=function(){a.isLoaded=!0};a.eventSlides=[];a.eventSlides.push({image:"/images/rotator-liberty.91d3fde7.jpg",url:"#/liberty",title:"2015 Liberty Medal Award Ceremony",location:"National Constitution Center Lawn, Independence National Historic Park",datetime:"October 26th, 5pm to 6pm",text:"Join His Holiness the 14th Dalai Lama when he receives the 2015 Liberty Medal in a public ceremony followed by a short public talk, on the lawn of the National Constitution Center.  All are invited!",attribution:"Image: Rusty Stewart/DLIAL 2015"}),a.eventSlides.push({image:"/images/rotator-lasalle.91b77a5e.jpg",url:"#/lasalle",title:"The Wisdom of Cherishing Others.  Eight Verses for Training the Mind, by Kadampa Geshe Langri Tangpa (1054 - 1123)",location:"Lasalle University, Tom Gola Arena",datetime:"October 26th, 1pm to 3pm",text:"Join His Holiness the 14th Dalai Lama for a teaching on the great text, Eight Verses for Training the Mind. Composed in the 11th century by Master Langri Tangpa, these eight simple verses have become among the most important writings studied in the Buddhist tradition, while embodying the universal truths of all of the world's major faiths and traditions as well.",attribution:" "}),a.eventSlides.push({image:"/images/rotator-temple.c54e286b.jpg",url:"#/temple",title:"Finding Happiness in Troubled Times: Educating the Heart in the 21st Century",location:"The Liacouras Center, Temple University",datetime:"October 27th, 9:30am to 11:30am",text:"The true essence of humankind is kindness. There are other qualities which come from education or knowledge, but it is essential, if one wishes to be a genuine human being and impart satisfying meaning to one's existence, to have a good heart.\" Please join His Holiness for a public talk and program on creating peace, love and happiness through educating the heart.",attribution:" "})}]),angular.module("tbcApp").controller("AboutCtrl",["$scope",function(a){}]),angular.module("tbcApp").controller("EmptyCtrl",["$scope",function(a){}]),angular.module("tbcApp").controller("TapCtrl",["$scope","Lightbox",function(a,b){a.images=[];a.images.push({thumb:"/images/tap/tap1t.adbb9f3d.jpg",url:"/images/tap/tap1.4a895fb8.jpg"}),a.images.push({url:"/images/tap/tap2.4602565c.jpg",thumb:"/images/tap/tap2t.9cbae961.jpg"}),a.images.push({url:"/images/tap/tap3.0ec6e5f0.jpg",thumb:"/images/tap/tap3t.9bb0f002.jpg"}),a.images.push({url:"/images/tap/tap4.7fd2ef7c.jpg",thumb:"/images/tap/tap4t.9a501503.jpg"}),a.images.push({url:"/images/tap/tap5.3b806602.jpg",thumb:"/images/tap/tap5t.d64ddb73.jpg"}),a.images.push({url:"/images/tap/tap6.f91bccee.jpg",thumb:"/images/tap/tap6t.d1e26d45.jpg"}),a.images.push({url:"/images/tap/tap7.5c92c5ab.jpg",thumb:"/images/tap/tap7t.9d289fc5.jpg"}),a.images.push({url:"/images/tap/tap8.6a816401.jpg",thumb:"/images/tap/tap8t.bfc8800c.jpg"}),a.images.push({url:"/images/tap/tap9.e5f1b32c.jpg",thumb:"/images/tap/tap9t.f24ae973.jpg"}),a.images.push({url:"/images/tap/tap10.7aea55be.jpg",thumb:"/images/tap/tap10t.762fecb4.jpg"}),a.images.push({url:"/images/tap/tap11.e22d632a.jpg",thumb:"/images/tap/tap11t.75453a11.jpg"}),a.openLightboxModal=function(c){b.openModal(a.images,c)}}]),angular.module("tbcApp").controller("TbcCtrl",["$scope","Lightbox",function(a,b){a.images=[];a.images.push({thumb:"/images/tbc/tbc1t.063c434e.jpg",url:"/images/tbc/tbc1.a7f360ce.jpg"}),a.images.push({url:"/images/tbc/tbc2.04292dc5.jpg",thumb:"/images/tbc/tbc2t.8b122d87.jpg"}),a.images.push({url:"/images/tbc/tbc3.9d868909.jpg",thumb:"/images/tbc/tbc3t.dd78f143.jpg"}),a.images.push({url:"/images/tbc/tbc4.72c991fe.jpg",thumb:"/images/tbc/tbc4t.09af44b1.jpg"}),a.images.push({url:"/images/tbc/tbc5.5be47515.jpg",thumb:"/images/tbc/tbc5t.d31c62d1.jpg"}),a.images.push({url:"/images/tbc/tbc6.c72dd553.jpg",thumb:"/images/tbc/tbc6t.173754c0.jpg"}),a.images.push({url:"/images/tbc/tbc7.55057b61.jpg",thumb:"/images/tbc/tbc7t.2be80cff.jpg"}),a.images.push({url:"/images/tbc/tbc8.59746e16.jpg",thumb:"/images/tbc/tbc8t.d95f69a0.jpg"}),a.images.push({url:"/images/tbc/tbc9.7d036ae0.jpg",thumb:"/images/tbc/tbc9t.051880e7.jpg"}),a.images.push({url:"/images/tbc/tbc10.79202da7.jpg",thumb:"/images/tbc/tbc10t.622d70a1.jpg"}),a.images.push({url:"/images/tbc/tbc11.a1d0e404.jpg",thumb:"/images/tbc/tbc11t.a0ebee07.jpg"}),a.openLightboxModal=function(c){b.openModal(a.images,c)}}]);