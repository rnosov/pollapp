'use strict';


angular.module('pollappApp')
  .controller('ReportCtrl', function ($scope, $state, $stateParams) {
    $scope.ctrl = this;

    $scope.chartType = 'pie'

    $scope.config = {
      title : '',
      tooltips: true,
      labels : false,
      mouseover: function() {},
      mouseout: function() {},
      click: function() {},
      legend: {
        display: true,
        //could be 'left, right'
        position: 'left'
      }
    }


  });

