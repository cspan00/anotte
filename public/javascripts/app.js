var app = angular.module("anotte", ['ngRoute']);


  app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
    })
    .when('/FF', {
      templateUrl: 'partials/5FF.html'
    })
    .when('/photos', {
      templateUrl: 'partials/photo_index.html'
    })
    .when('/faq', {
      templateUrl: 'partials/faq.html'
    })


  })
