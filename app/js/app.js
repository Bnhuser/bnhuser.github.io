'use strict';

/* App Module */

angular.module('myApp', [
    'ngRoute',
    'fitbitController',
    'StuffServices',
    'teamController',
    'challengeController',
    'rankController',
    'personController',
    'loginController',
    'adminController',
    'myApp.services',
    'challenge.contants'
]).
config(['$routeProvider', 
    function($routeProvider){
    $routeProvider.
    when('/main',{
        templateUrl:'partials/main.html', 
        controller:'ListCtrl'
    }).
    when('/main/login',{
       templateUrl:'partials/login.html',
       controller:'LoginCtrl'
    }).
    when('/main/teams',{
        templateUrl: 'partials/teams.html',
        controller: 'MoreCtrl'
    }).
    when('/main/challenges', {
        templateUrl:'partials/challenges.html',
        controller:'ChallengeCtrl'
    }).
    when('/main/admin',{
        templateUrl:'partials/admin.html',
        controller:'AdminCtrl'
    }).
    when('/main/rank', {
        templateUrl:'partials/rankings.html',
        controller:'RankCtrl'
    }).
    when('/main/:personId',{
        templateUrl:'partials/person.html',
        controller:'PersonCtrl'
    }).
    otherwise({
        redirectTo: '/main'});
}]);



