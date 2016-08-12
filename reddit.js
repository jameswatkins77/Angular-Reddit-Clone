var app = angular.module("redditApp", []);

app.controller("redditController", function($scope){
  $scope.data = {};
  $scope.data.posts = [];
  $scope.data.counter = 0;
  $scope.data.num = 1;
  $scope.data.commentCount = 1;
  $scope.data.location = 'Parker, CO';
  $scope.counterUp = function() {
    console.log($scope.data.counter);
    $scope.data.counter++;
  }
  $scope.counterDown = function() {
    $scope.data.counter--;
  }
  $scope.open_post = function() {
    $scope.data.num = 0;
  }
  $scope.submitPost = function() {
    $scope.data.num = 1;
    $scope.data.posts.push({
      title: $scope.data.title,
      author : $scope.data.author,
      url : $scope.data.url,
      description : $scope.data.description
    })
    console.log($scope.data.posts);
  }
});
