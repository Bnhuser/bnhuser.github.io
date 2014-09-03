'use strict';

/* App Module */

angular.module('myApp', [
    'ngRoute',
    'homeController',
    'whySKController',
    'exampleController',
    'moreController'
]).
config(['$routeProvider', 
    function($routeProvider){
    $routeProvider.
    when('/home',{
        templateUrl:'app/partials/home.html', 
        controller:'MainCtrl'
    }).
    when('/home/whySK',{
        templateUrl:'app/partials/whySK.html',
        controller:'WhySKCtrl'
    }).
    when('/home/example',{
        templateUrl:'app/partials/example.html',
        controller:'exampleCtrl'
    }).
    when('/home/more',{
        templateUrl:'app/partials/more.html',
        controller:'moreCtrl'
    }).
    otherwise({
        redirectTo: '/home'});
}]);



