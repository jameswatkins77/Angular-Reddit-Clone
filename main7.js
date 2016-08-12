var app = angular.module("contactApp", []);

app.controller("contactCreater", function($scope){
  $scope.newContact = {};
  $scope.contacts = [];
  $scope.submitContact = function() {
    $scope.contacts.push({
      nameA_input: $scope.newContact.name_input,
      emailA : $scope.newContact.email,
      phoneA : $scope.newContact.phone
    })
    $scope.newContact.nameA_input = $scope.newContact.name_input;
    $scope.newContact.name_input = '';
    $scope.newContact.emailA = $scope.newContact.email;
    $scope.newContact.email = '';
    $scope.newContact.phoneA = $scope.newContact.phone;
    $scope.newContact.phone = '';
  }
  $scope.changeColor = function() {
    $scope.tdColor = {'background-color': randomColor()};
  };
  $scope.returnColor = function(){
    $scope.tdColor = {'background-color': randomColor()};
  }
  function randomColor() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    return color;
  }
});
