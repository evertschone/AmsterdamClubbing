angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('favsCtrl', function($scope, Favs) {
  $scope.favs = Favs.all();
  $scope.remove = function(chat) {
    Favs.remove(chat);
  }
})

.controller('FavDetailCtrl', function($scope, $stateParams, Favs) {
  $scope.fav = Favs.get($stateParams.favId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
      enableFriends: true,
      gender: 50
  };
});
