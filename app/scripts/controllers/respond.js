'use strict';

angular.module('pollappApp')
  .controller('RespondCtrl', function ($scope, $state, $stateParams) {
    $scope.ctrl = this;

    console.log($stateParams)

    //$scope.response_code:( $stateParams.response_code || '')

    this.respond = function() {
    };

  });
