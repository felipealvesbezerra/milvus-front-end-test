(function () {
    "use strict";
    angular.module('milvus')
        .factory('userHttpServices', ['$http', 'config', function ($http) {

            var _getUsers = function () {
                return $http({
                    method: 'GET',
                    url: 'users.json',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            };

            return {
                getUsers: _getUsers
            };

        }]);

})();