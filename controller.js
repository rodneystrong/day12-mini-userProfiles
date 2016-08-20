angular
  .module('userProfiles')
  .controller('MainController', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";

    $scope.getData = function() {
      $scope.users = mainService.getData();
    }

    $scope.getData();

    $scope.toggleFavorite = mainService.toggleFavorite;

})
