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
        templateUrl:'app/partials/home.html', 
        controller:'MainCtrl'
    }).
    when('/home/whySK',{
        templateUrl:'app/partials/whySK.html',
        controller:'WhySKCtrl'
    }).
    otherwise({
        redirectTo: '/home'});
}]);



