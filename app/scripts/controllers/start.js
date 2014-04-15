'use strict';

angular.module('pollappApp')
  .controller('StartCtrl', function ($scope, $state, $stateParams) {
    $scope.ctrl = this;

    $scope.form = {
        responseCode: ($stateParams.responseCode || '')
      };

    this.useResponseCode = function() {
        $state.go('respond', {responseCode: $scope.form.responseCode});
      };

  });
