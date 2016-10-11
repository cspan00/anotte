var app = angular.module("anotte", ['ngRoute']);


  app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'mainController '
    })
    .when('/FF', {
      templateUrl: 'partials/5FF.html'
    })
    .when('/photo_index', {
      templateUrl: 'partials/photo_index.html',
      controller: 'mainController'
    })
    .when('/photos/:id', {
      templateUrl: 'partials/photo_album.html',
      controller: 'photoController'
    })
    .when('/faq', {
      templateUrl: 'partials/faq.html'
    })
    .when('/upcoming_events', {
      templateUrl: 'partials/upcoming_events.html'
    })
    .when('/admin', {
      templateUrl: 'partials/login.html',
      controller: 'loginController'
    })
    .when('/edit', {
      templateUrl: 'partials/edit.html',
      controller: 'editController'
    })


  })
