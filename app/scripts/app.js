'use strict';

angular.module('pollappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/response_start');

    $stateProvider
    .state('response_start', {
      url: '/response_start',
      templateUrl: 'views/response_start.html',
      controller: 'StartCtrl'
    })
    .state('respond', {
      url: '/response/:responseCode',
      templateUrl: 'views/respond.html',
      controller: 'RespondCtrl'
    });

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'partials/main',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/login', {
    //     templateUrl: 'partials/login',
    //     controller: 'LoginCtrl'
    //   })
    //   .when('/signup', {
    //     templateUrl: 'partials/signup',
    //     controller: 'SignupCtrl'
    //   })
    //   .when('/settings', {
    //     templateUrl: 'partials/settings',
    //     controller: 'SettingsCtrl',
    //     authenticate: true
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });

    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  });
  // .run(function ($rootScope, $location, Auth) {

  //   // Redirect to login if route requires auth and you're not logged in
  //   $rootScope.$on('$routeChangeStart', function (event, next) {

  //     if (next.authenticate && !Auth.isLoggedIn()) {
  //       $location.path('/login');
  //     }
  //   });
  // });
