'use strict';

angular.module('pollappApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
