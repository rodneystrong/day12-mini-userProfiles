angular
  .module('userProfiles')
  .controller('MainController', function(mainService, $scope){

    $scope.thisAppIsBroken = "This angular app is working";

    $scope.percent = "32%  + 62%";

    $scope.getUsers = function() {
      $scope.users = mainService.getUsers();
    }

    $scope.getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite;

})
