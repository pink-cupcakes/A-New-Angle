angular.module('forum')

.service('apiQuery', function($http, $window) {
  this.search = function(url, callback) {
    $http.get(url)
    .then(function({data}) {
      if (callback) {
        callback(data);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});