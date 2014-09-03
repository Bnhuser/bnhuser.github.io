'use strict';

/* App Module */

angular.module('myApp', [
    'ngRoute',
    'homeController',
    'whySKController'
]).
config(['$routeProvider', 
    function($routeProvider){
    $routeProvider.
    when('/home',{
        templateUrl:'partials/home.html', 
        controller:'MainCtrl'
    }).
    when('/home/whySK',{
        templateUrl:'partials/whySK.html',
        controller:'WhySKCtrl'
    }).
    otherwise({
        redirectTo: '/home'});
}]);



