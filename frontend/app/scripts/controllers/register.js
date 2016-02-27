'use strict';

angular.module('p01App')
  .controller('RegisterCtrl', function ($scope,alert,auth) {
    $scope.submit = function(){

       auth.register($scope.email,$scope.password)
         .success(function (res) {
           alert('success','Account Created!','Welcome, '+res.user.email +'!');
         })
         .error(function (err) {
           alert('warning','Hata oluştu :( ',err.message);
         });
    };
  });
