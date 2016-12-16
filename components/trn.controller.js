(function() {

  var app = angular.module('EricsFantasyHockeyTeams', []);

  var trnController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };


    $http.get("https://api.github.com/users/nemloh27")
      .then(onUserComplete);

  };

  app.controller("trnController", ["$scope", "$http", trnController]);

}());