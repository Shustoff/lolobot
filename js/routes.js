// Generated by CoffeeScript 1.3.3
var LOL;

LOL = angular.module('lol', []).value('$anchorScroll', angular.noop);

LOL.run(function() {
  return $('#myModal').modal('hide');
});

LOL.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    redirectTo: '/Ahri'
  });
  $routeProvider.when('/:name', {
    controller: 'MainCtrl',
    template: $('#tabs').html()
  });
  $locationProvider.html5Mode(false);
  return null;
});
