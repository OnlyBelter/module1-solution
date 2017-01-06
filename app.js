(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  // $scope.inputString;
  $scope.printInfo = '';
  var style = "null";
  $scope.CheckIfTooMuch = function() {
    var foodCount = CountFood($scope.inputString);
    if (foodCount === 0) {
      $scope.printInfo = 'Please enter data first';
      style = "red";
    } else if (foodCount <= 3) {
      $scope.printInfo = 'Enjoy!';
      style = "green";
    } else {
      $scope.printInfo = 'Too much!';
      style = "green";
    }
    if (style === "red") {
      $scope.myFontStyle = {'color': 'red'};
      $scope.myBoxStyle = {'border-style': 'solid', 'border-color': 'red'}
    } else if (style === "green") {
      $scope.myFontStyle = {'color': 'green'};
      $scope.myBoxStyle = {'border-style': 'solid', 'border-color': 'green'}
    }
  }

  function CountFood(aString) {
    var stringLen = 0;
    if (aString) {
      var s_list = aString.split(',');
      var new_s_list = [];
      console.log(s_list);
      for (var x=0; x<s_list.length; x++) {
        var elem = s_list[x].trim();
        if (elem) {
          new_s_list.push(elem);
        }
      }
      stringLen = new_s_list.length;
    }
    return stringLen;
  }





}
})();
