(function () {
    "use strict";
    angular.module('milvus')
        .factory('exampleUtilService', [function () {

            var _fazAlgo = function (params) {
                console.log(params);
            };

            return {
                fazAlgo: _fazAlgo
            };

        }]);
})();