'use strict';

/* Controllers */

var fitbitController = angular.module('fitbitController', []);


//==============================
//-----Home page controller-----
//==============================
fitbitController.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
       $http.get('data_items/stuff.json').success(function(data){
           $scope.data_items = data;
});
    
    $scope.orderProp = 'title';

}]);