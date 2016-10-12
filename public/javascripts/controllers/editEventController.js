app.controller('editEventController', function($sce, $http, $scope, $rootScope, $route, $routeParams, $location) {

console.log("event Controller");

$http.get('edit/'+$routeParams.id).then(function(result){
  console.log(result);
  $scope.event = result['data'][0]
  $scope.formMethod = $sce.trustAsHtml('<form method = "POST" action = "/edit/{{event.id}} enctype = "multipart/form-data" class = "event_form">')
})



})
