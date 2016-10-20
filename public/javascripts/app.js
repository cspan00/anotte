var app = angular.module("anotte", ['ngRoute']);



  app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
    })
    .when('/FF', {
      templateUrl: 'partials/5FF.html'
    })
    .when('/photo_index', {
      templateUrl: 'partials/photo_index.html',
    })
    .when('/photos/:id', {
      templateUrl: 'partials/photo_album.html',
    })
    .when('/faq', {
      templateUrl: 'partials/faq.html'
    })
    .when('/upcoming_events', {
      templateUrl: 'partials/upcoming_events.html'
    })
    .when('/create_event', {
      templateUrl: 'partials/create_event.html',
      controller: 'eventsController'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit_event.html',
      controller: 'editEventController'
    })




  })
