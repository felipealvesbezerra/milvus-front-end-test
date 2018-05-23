(function () {
  "use strict";
  angular.module('milvus')
    .config(['$routeProvider', '$controllerProvider', '$locationProvider', function ($routeProvider, $controllerProvider, $locationProvider) {

      $routeProvider.otherwise({ redirectTo: '/' });

      $controllerProvider.allowGlobals();
      $locationProvider.hashPrefix('');

    }]);
})();
