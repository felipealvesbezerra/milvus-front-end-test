(function () {
    "use strict";
    angular.module('milvus')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/create-user', {
                templateUrl: 'app/pages/createUser/createUser.html',
                controller: 'createUserController',
            });

    }]);
})();
