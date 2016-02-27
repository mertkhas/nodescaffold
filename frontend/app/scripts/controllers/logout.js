'use strict';

angular.module('p01App')
  .controller('LogoutCtrl', function (authToken,$state) {
      authToken.removeToken();
      $state.go('main');
  });
