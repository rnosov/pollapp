'use strict';


angular.module('pollappApp')
  .controller('ReportCtrl', function ($scope, $state, $stateParams) {
    $scope.ctrl = this;

    $scope.chartType = 'pie'

    $scope.config = {
      "labels": false,
      "title": "Products",
      "legend": {
        "display": true,
        "position": "right"
      }
    }

    $scope.series = [
      "Sales",
      "Income",
      "Expense"
    ]


  });

