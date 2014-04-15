'use strict';

angular.module('pollappApp')
  .controller('StartCtrl', function ($scope, $state, $stateParams) {
    $scope.ctrl = this;

    $scope.form = {
        response_code: ($stateParams.response_code || '')
    };

    this.use_response_code = function() {
        $state.go('respond', {response_code: $scope.form.response_code});
    };

  });
