'use strict';

angular.module('pollappApp')
  .controller('RespondCtrl', function ($scope, $state, $stateParams, $http) {
    $scope.ctrl = this;

    $scope.responseCode = ($stateParams.responseCode || '');

    $scope.poll = {
        title: 'General Agreement Poll',
        description: 'The purpose of this poll is to collect data on the general level of agreement.',
        questions: [
            {
                qid:'reywette',
                questionText: 'Do you agree?',
                response: undefined
              },
              {
                qid:'asdfasdf',
                questionText: 'Are you in agreement?',
                response: undefined
              }
            ]
          };



    this.submit_poll = function() {
        $http
    };

  });
