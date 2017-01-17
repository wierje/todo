"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant("FirebaseURL", "https://tododemo-f6be7.firebaseio.com");

let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("auth user");
    resolve();
  } else {
    console.log("not auth user");
    reject();
  }
});

app.config(function($routeProvider) {
  $routeProvider.
  when("/", {
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  }).
  when("/login", {
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  }).
  when("/items/list", {
    templateUrl: "partials/item-list.html",
    controller: "ItemListCtrl",
    resolve: {isAuth}
  }).
  when("/items/new", {
    templateUrl: "partials/item-form.html",
    controller: "ItemNewCtrl",
    resolve: {isAuth}
  }).
  when("/items/view/:itemId", {
    templateUrl: "partials/item-details.html",
    controller: "ItemViewCtrl",
    resolve: {isAuth}
  }).
  when("/items/edit/:itemId", {
    templateUrl: "partials/item-form.html",
    controller: "ItemEditCtrl",
    resolve: {isAuth}
  })
  .otherwise("/");

});

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});




















// app.controller("NavCtrl",function($scope) {
//   $scope.navItems = [
//   {name: "Logout"},
//   {name:"All Items"},
//   {name: "New Items"}
//   ];
// })
// $scope.items = [
//   {
//     id: 0,
//     task: "mow the lawn",
//     isCompleted: false,
//     dueDate: "12/5/17",
//     assignedTo: "Greg",
//     location: "Joe"s house",
//     urgency: "low",
//     dependencies: "sunshine, clippers, hat, water, headphones"
//   },
//   {
//     id: 1,
//     task: "grade quizzes",
//     isCompleted: false,
//     dueDate: "12/5/15",
//     assignedTo: "Christina",
//     location: "NSS",
//     urgency: "high",
//     dependencies: "wifi, tissues, vodka"
//   },
//   {
//     id: 2,
//     task: "take a nap",
//     isCompleted: false,
//     dueDate: "5/21/16",
//     assignedTo: "Joe",
//     location: "Porch of lakefront cabin",
//     urgency: "medium",
//     dependencies: "hammock, silence"
//   }
// ];
