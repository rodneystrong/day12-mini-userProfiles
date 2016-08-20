angular
  .module('userProfiles')
  .controller('MainController', function($scope, mainService, $http){

    $scope.thisAppIsBroken = "This angular app is working";

    $scope.getUsers = function() {
      $scope.users = mainService.getUsers();
    }

    $scope.toggleFavorite = mainService.toggleFavorite;

    $scope.getUsers();


})
