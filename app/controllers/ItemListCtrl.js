 'use strict';

app.controller('ItemListCtrl', function($scope, $location, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();
  console.log(user);

ItemStorage.getItemList(user)
    .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr;
    });

    $scope.itemDelete = (itemID)=> {
      ItemStorage.deleteItem(itemID)
      .then( (response) => {
        ItemStorage.getItemList()
        .then( (itemCollectionArr) => {
          $scope.items = itemCollectionArr;
        });
      });
    };
});

