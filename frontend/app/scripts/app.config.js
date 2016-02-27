/**
 * Created by mk on 25.2.2016.
 */
'use strict';

angular.module('p01App').config(function($urlRouterProvider,$stateProvider,$httpProvider){


  $urlRouterProvider.otherwise('/');


    $stateProvider

      .state('main',{
        url: '/',
        templateUrl: '/views/main.html'
      })

      .state('logout',{
        url: '/logout',
       controller : 'LogoutCtrl'
      })

      .state('login',{
        url: '/login',
        templateUrl: '/views/login.html',
        controller : 'LoginCtrl'
      })

      .state('jobs',{
        url: '/jobs',
        templateUrl: '/views/jobs.html',
        controller:'JobsCtrl'
      })

      .state('register',{
      url: '/register',
      templateUrl: '/views/register.html',
      controller:'RegisterCtrl'
    });

  $httpProvider.interceptors.push('authInterceptor');

}).constant('API_URL','http://localhost:3000/');
