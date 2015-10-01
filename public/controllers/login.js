// TODO: remove testing controller function once testing of pages are complete.

// angular.module('MyApp')
//  .controller('LoginCtrl',['$scope',function($scope){
//   $scope.header = { message: 'Login Page' };
// }]);

angular.module('MyApp')
    .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
        // Start Login Function generic app login
        $scope.login = function() {
            Auth.login({
                email: $scope.email,
                password: $scope.password
            });
        };//end login function

        //start facebookLogin function
        $scope.facebookLogin = function() {
          Auth.facebookLogin();
        };//end facebookLogin function

        //Start GoogleLogin function
        $scope.googleLogin = function() {
          Auth.google.login();
        };//end GoogleLoginfunction
    }]);
