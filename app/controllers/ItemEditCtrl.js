'use strict';

app.controller('ItemEditCtrl', function($scope, $location, $routeParams, ItemStorage) {

    $scope.title = 'Edit Item';
    $scope.btnText = 'Update';
    $scope.newTask = {};

    ItemStorage.getSingleItem($routeParams.itemId)
        .then( (response) => {
            console.log(response);
            $scope.newTask = response;
        });

    $scope.addNewItem = () => {
        ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
            .then( (response) => {
                $location.url('/items/list');
            });
    };
});
//good