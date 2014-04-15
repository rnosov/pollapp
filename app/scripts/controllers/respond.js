'use strict';

angular.module('pollappApp')
  .controller('RespondCtrl', function ($scope, $state, $stateParams, $http) {
    $scope.ctrl = this;

    $scope.responseCode = ($stateParams.responseCode || '');

    $scope.submitted = false

    $scope.poll = {
        pollId : 101,
        title : "Local council review",
        description: "We are trying to improve council services. Please answer the following questions, to help us tell how well we are doing.",
        startDate: "2014-04-14",
        endDate: "2014-04-20",
        questions:[
                    {
                        questionId: 11,
                        question : "Are you interested in your local council’s decisions?",
                        options : ["Yes", "No"],
                        format: "YES_NO"
                    },
                    {
                        questionId: 12,
                        question : "Are you satisfied with your local council’s efforts with respect to waste management and sanitation?",
                        options : ["Yes", "No"],
                        format: "YES_NO"
                    },
                    {
                        questionId: 13,
                        question : "Are you satisfied with your local council’s efforts with respect to educational opportunities?",
                        options : ["Yes", "No"],
                        format: "YES_NO"
                    },
                    {
                        questionId: 14,
                        question : "Are you satisfied with your local council’s efforts with respect to public safety?",
                        options : ["Yes", "No"],
                        format: "YES_NO"
                    },
                    {
                        questionId: 15,
                        question : "Are you satisfied with your local council’s efforts with respect healthcare provision?",
                        options : ["Yes", "No"],
                        format: "YES_NO"
                    },
                    {
                        questionId: 16,
                        question : "Would you like to get involved in local Council activities?",
                        options : ["Yes", "No"],
                        format: "YES_NO"
                    }
            ]
    };

    this.submit_poll = function() {
        var i, q, submit_data;
        submit_data = {
            responseCode: $scope.responseCode,
            responses: {}
        };
        for (i = 0; i < $scope.poll.questions.length; i++) {
            q = $scope.poll.questions[i];
            submit_data.responses[q.questionId] = q.response;
        }
        $scope.submitted = true
        console.log(submit_data);
    };

  });
