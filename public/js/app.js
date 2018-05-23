(function() {
    "use strict";
    angular.module('milvus', [
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ui.select',
        'ngSanitize',
        'ui.utils.masks',
        'ui-notification',
    ]);
})();

(function () {
    "use strict";
    angular.module('milvus')
    .directive('example', [function () {
        return {
            restrict: 'AE',
            scope: {

            },
            // link: function ($scope, $element, $attrs, $ctrl) {

            // }
        };
    }]);
})();
(function () {
    "use strict";
    angular.module('milvus')
    .constant('config', {
        API_URL: ''
    })
    .config(['NotificationProvider', function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 80,
            maxCount: 5,
        });
    }]);
})();

(function () {
  "use strict";
  angular.module('milvus')
    .config(['$routeProvider', '$controllerProvider', '$locationProvider', function ($routeProvider, $controllerProvider, $locationProvider) {

      $routeProvider.otherwise({ redirectTo: '/' });

      $controllerProvider.allowGlobals();
      $locationProvider.hashPrefix('');

    }]);
})();

(function () {
  "use strict";
  angular.module('milvus').run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$routeChangeSuccess', function () {
      window.scrollTo(0, 0);
    });

  }]);
})();

(function () {
  "use strict";
  angular.module('milvus')

    .filter('cpf', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : '';
      };
    }])
    .filter('rg', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4") : '';
      };
    }])

    .filter('telefone', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3") : '';
      };
    }])

    .filter('cep', [function () {
        return function (text) {
          return text ? String(text).replace(/^(\d{5})(\d{3})/, "$1-$2") : '';
        };
    }]);
})();

(function () {
    "use strict";
    angular.module('milvus')
        .controller('testFrontEndController', ['$scope', function ($scope) {
            
            $scope.testFrontEnd = "Teste Front-End";

        }]);
})();

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
(function () {
    "use strict";
    angular.module('milvus')
        .controller('createUserController', [function () {


        }]);
})();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImRpcmVjdGl2ZXMvZXhhbXBsZURpcmVjdGl2ZS5qcyIsImNvbmZpZy9jb25maWcuanMiLCJjb25maWcvcm91dGVDb25maWcuanMiLCJjb25maWcvcnVuQ29uZmlnLmpzIiwiZmlsdGVycy9maWx0ZXJzLmpzIiwicGFnZXMvdGVzdGVGcm9udEVuZC90ZXN0RnJvbnRFbmRDb250cm9sbGVyLmpzIiwicGFnZXMvdGVzdGVGcm9udEVuZC90ZXN0RnJvbnRFbmRSb3V0ZS5qcyIsInNlcnZpY2VzL2h0dHAvdXNlckh0dHBTZXJ2aWNlcy5qcyIsInNlcnZpY2VzL3V0aWwvZXhhbXBsZVV0aWxTZXJ2aWNlcy5qcyIsInBhZ2VzL2NyZWF0ZVVzZXIvY3JlYXRlVXNlckNvbnRyb2xsZXIuanMiLCJwYWdlcy9jcmVhdGVVc2VyL2NyZWF0ZVVzZXJSb3V0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdtaWx2dXMnLCBbXG4gICAgICAgICduZ1JvdXRlJyxcbiAgICAgICAgJ25nQW5pbWF0ZScsXG4gICAgICAgICduZ1RvdWNoJyxcbiAgICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAgICd1aS5zZWxlY3QnLFxuICAgICAgICAnbmdTYW5pdGl6ZScsXG4gICAgICAgICd1aS51dGlscy5tYXNrcycsXG4gICAgICAgICd1aS1ub3RpZmljYXRpb24nLFxuICAgIF0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ21pbHZ1cycpXG4gICAgLmRpcmVjdGl2ZSgnZXhhbXBsZScsIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkY3RybCkge1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH07XG4gICAgfV0pO1xufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdtaWx2dXMnKVxuICAgIC5jb25zdGFudCgnY29uZmlnJywge1xuICAgICAgICBBUElfVVJMOiAnJ1xuICAgIH0pXG4gICAgLmNvbmZpZyhbJ05vdGlmaWNhdGlvblByb3ZpZGVyJywgZnVuY3Rpb24gKE5vdGlmaWNhdGlvblByb3ZpZGVyKSB7XG4gICAgICAgIE5vdGlmaWNhdGlvblByb3ZpZGVyLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgc3RhcnRUb3A6IDgwLFxuICAgICAgICAgICAgbWF4Q291bnQ6IDUsXG4gICAgICAgIH0pO1xuICAgIH1dKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgYW5ndWxhci5tb2R1bGUoJ21pbHZ1cycpXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgJyRjb250cm9sbGVyUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsICRjb250cm9sbGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cbiAgICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86ICcvJyB9KTtcblxuICAgICAgJGNvbnRyb2xsZXJQcm92aWRlci5hbGxvd0dsb2JhbHMoKTtcbiAgICAgICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJycpO1xuXG4gICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBhbmd1bGFyLm1vZHVsZSgnbWlsdnVzJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG5cbiAgICAkcm9vdFNjb3BlLiRvbignJHJvdXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9KTtcblxuICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGFuZ3VsYXIubW9kdWxlKCdtaWx2dXMnKVxuXG4gICAgLmZpbHRlcignY3BmJywgW2Z1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dCA/IFN0cmluZyh0ZXh0KS5yZXBsYWNlKC9eKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvLCBcIiQxLiQyLiQzLSQ0XCIpIDogJyc7XG4gICAgICB9O1xuICAgIH1dKVxuICAgIC5maWx0ZXIoJ3JnJywgW2Z1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dCA/IFN0cmluZyh0ZXh0KS5yZXBsYWNlKC9eKFxcZHsyfSkoXFxkezN9KShcXGR7M30pKFxcZHsxfSkvLCBcIiQxLiQyLiQzLSQ0XCIpIDogJyc7XG4gICAgICB9O1xuICAgIH1dKVxuXG4gICAgLmZpbHRlcigndGVsZWZvbmUnLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0ID8gU3RyaW5nKHRleHQpLnJlcGxhY2UoL14oXFxkezJ9KShcXGR7NCw1fSkoXFxkezR9KS8sIFwiKCQxKSAkMi0kM1wiKSA6ICcnO1xuICAgICAgfTtcbiAgICB9XSlcblxuICAgIC5maWx0ZXIoJ2NlcCcsIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0ID8gU3RyaW5nKHRleHQpLnJlcGxhY2UoL14oXFxkezV9KShcXGR7M30pLywgXCIkMS0kMlwiKSA6ICcnO1xuICAgICAgICB9O1xuICAgIH1dKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdtaWx2dXMnKVxuICAgICAgICAuY29udHJvbGxlcigndGVzdEZyb250RW5kQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkc2NvcGUudGVzdEZyb250RW5kID0gXCJUZXN0ZSBGcm9udC1FbmRcIjtcblxuICAgICAgICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBhbmd1bGFyLm1vZHVsZSgnbWlsdnVzJylcbiAgICAgICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG5cbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL3Rlc3RlRnJvbnRFbmQvdGVzdEZyb250RW5kLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICd0ZXN0RnJvbnRFbmRDb250cm9sbGVyJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ21pbHZ1cycpXG4gICAgICAgIC5mYWN0b3J5KCd1c2VySHR0cFNlcnZpY2VzJywgWyckaHR0cCcsICdjb25maWcnLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuICAgICAgICAgICAgdmFyIF9nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICd1c2Vycy5qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0VXNlcnM6IF9nZXRVc2Vyc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9XSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBhbmd1bGFyLm1vZHVsZSgnbWlsdnVzJylcbiAgICAgICAgLmZhY3RvcnkoJ2V4YW1wbGVVdGlsU2VydmljZScsIFtmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBfZmF6QWxnbyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmYXpBbGdvOiBfZmF6QWxnb1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9XSk7XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ21pbHZ1cycpXG4gICAgICAgIC5jb250cm9sbGVyKCdjcmVhdGVVc2VyQ29udHJvbGxlcicsIFtmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBhbmd1bGFyLm1vZHVsZSgnbWlsdnVzJylcbiAgICAgICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG5cbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvY3JlYXRlLXVzZXInLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvY3JlYXRlVXNlci9jcmVhdGVVc2VyLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjcmVhdGVVc2VyQ29udHJvbGxlcicsXG4gICAgICAgICAgICB9KTtcblxuICAgIH1dKTtcbn0pKCk7XG4iXX0=
