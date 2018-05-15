angular.module('forum', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.myjson.com/bins/hildr',
    'https://api.myjson.com/bins/dck5b'
  ]);
});