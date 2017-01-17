'use strict';

app.controller('LoginCtrl', function($scope, $window, AuthFactory) {
  $scope.account = {
    email: '',
    password: ''
  };

 $scope.register = () => {

  console.log('you clicked register');
  AuthFactory.createUser({
    email: $scope.account.email,
    password: $scope.account.password
  })
  .then( (userData) => {
    console.log('newUser', userData.uid);
    $scope.login();
  }, (error) => {
    console.log(`Error creating user: ${error}`);
  });
 };


$scope.login = () => {
  console.log('you clicked login');
  AuthFactory.loginUser($scope.account)
  .then( (data) => {
    console.log("logged in user: ", data.uid);
    if (data) {
    $window.location.href = '#/items/list';
  } else {
    $window.location.href = '#/login';
    }
        console.log("data from login ", data);
  }, (error) => {
    console.log('error', error);
  });
};
//we cannot access the window object from inside these controllers, so we must pass it in
});
