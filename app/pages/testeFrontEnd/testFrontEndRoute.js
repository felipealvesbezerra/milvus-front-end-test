(function () {
    "use strict";
    angular.module('milvus')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/pages/testeFrontEnd/testFrontEnd.html',
                controller: 'testFrontEndController',
            });

    }]);
})();
