// Generated by CoffeeScript 1.6.1
var LOL;

LOL = angular.module('lol', []);

LOL.run(function() {
  return $('#myModal').modal('hide');
});

LOL.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $routeProvider.when('/', {
    redirectTo: '/Ahri'
  });
  $routeProvider.when('/:name', {
    controller: 'MainCtrl',
    template: $('#tabs').html()
  });
  return null;
});
