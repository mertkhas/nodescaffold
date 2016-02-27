'use strict';

angular.module('p01App')
  .controller('HeaderCtrl', function ($scope,authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
