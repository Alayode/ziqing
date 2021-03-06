// angular.module('MyApp')
//  .controller('SignupCtrl',['$scope',function($scope){
//   $scope.header = { message: 'Signup Page' };
// }]);


angular.module('MyApp')
    .controller('SignupCtrl', function($scope, Auth) {
        $scope.signup = function() {
            Auth.signup({
                name: $scope.displayName,
                email: $scope.email,
                password: $scope.password
            });
        };
        //binded the  fadeZoom to scope
        $scope.pageClass = 'fadeZoom'
    });
