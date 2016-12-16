(function() {

  var app = angular.module('EricsFantasyHockeyTeams', []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };


    $http.get("https://api.github.com/users/nemloh27")
      .then(onUserComplete);

  };

  app.controller("fphController", ["$scope", "$http", fphController]);

}());