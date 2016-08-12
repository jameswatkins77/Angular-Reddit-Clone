var app = angular.module("pingPongApp", []);

app.controller("pingPongTracker", function($scope){
  $scope.view = {};
  $scope.view.score = {};
  $scope.view.score.total = 0;
  $scope.view.score.player1 = 0;
  $scope.view.score.player2 = 0;
  $scope.view.server;
  $scope.view.enterCount = 0;

  $scope.counterLeft = function() {
    ++$scope.view.score.player1;
    setServe();
    return;
  }
  $scope.counterRight = function() {
    ++$scope.view.score.player2
    setServe();
    return;
  }
  $scope.reset = function() {
    $scope.view.score.player2 = 0;
    $scope.view.score.player1 = 0;
    $scope.view.score.total = 0;
    return;
  }
  var setServe = function() {
    $scope.view.score.total++;
    if ($scope.view.score.total === 2) {
      $scope.view.score.total = 0;
      $scope.view.server = !$scope.view.server;
      return;
    }
  }
  var colors = [];

  function randomColor() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    colors.push(color);
    console.log("this is colors: "+colors);
    return color;
  }
  $scope.changeColor = function() {
    $scope.divColor = {'background-color': randomColor()};
    $scope.view.enterCount++;
  };


  var replaying = false;
  $scope.replay = function() {
      var reverseColors = colors.reverse();
      $scope.view.enterCount = 0;
      console.log("this is colors reversed: "+reverseColors);
      for (var i = 0; i < reverseColors.length; i++) {
        $scope.divColor = reverseColors[i];
    }
  };

});
