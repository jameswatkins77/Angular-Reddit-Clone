var app = angular.module("madLibs", []);

app.controller("MadLibsController", function($scope){
  $scope.boys_name;
  $scope.adjective;
  $scope.plural_noun;
  $scope.plural_noun2;
  $scope.insect_plural;
  $scope.plural_noun3;
  $scope.verb;

  $scope.generate = function(){
      $scope.boys_name_final = $scope.boys_name;
      $scope.adjective_final = $scope.adjective;
      $scope.plural_noun_final = $scope.plural_noun;
      $scope.plural_noun2_final =$scope.plural_noun2;
      $scope.insect_plural_final = $scope.insect_plural;
      $scope.plural_noun3_final = $scope.plural_noun3;
      $scope.verb_final = $scope.verb;
  };

  $scope.remove = function(){
      $scope.boys_name = '';
      $scope.adjective = '';
      $scope.plural_noun = '';
      $scope.plural_noun2 = '';
      $scope.insect_plural = '';
      $scope.plural_noun3 = '';
      $scope.verb = '';
  }
});
