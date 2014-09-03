'use strict';

/* App Module */

angular.module('myApp', [
    'ngRoute'
]).
config(['$routeProvider', 
    function($routeProvider){
    $routeProvider.
    when('/home',{
        templateUrl:'partials/home.html', 
        controller:'MainCtrl'
    }).
    otherwise({
        redirectTo: '/home'});
}]);



