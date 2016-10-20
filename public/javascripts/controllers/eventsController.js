app.controller('eventsController', function($http, $scope, $rootScope, $route, $routeParams, $location) {

console.log("event Controller");


$http.get('current/events').then(function(result){
  console.log(result['data']);
  $scope.events = result['data']
})



})
