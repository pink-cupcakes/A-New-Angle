angular.module('forum')

.service('answers', function($http, $window) {
  this.search = function(query, callback) {
    $http.get('https://api.myjson.com/bins/hildr')
    .then(function({data}) {
      //////////Remove console log later!///////////
      console.log(data.items)
      if (callback) {
        callback(data.items);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});