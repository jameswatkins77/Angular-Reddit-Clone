var app = angular.module("firstApp", []);

app.controller("ExercisesController", function($scope){
  $scope.FavColor = "Blue";
  $scope.secondsInACentury = function(){
    return 60 * 60 * 24 * 365 * 100;
  };
  $scope.rightNow = function(){
    var first = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var result = dayNames[first.getDay()] + ", " + monthNames[first.getMonth()] + " " + first.getDate() + ", " + first.getFullYear()
    return result;
  }
});
