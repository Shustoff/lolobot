# Создаем модуль приложения
LOL = angular.module('lol', [], ($routeProvider, $locationProvider) ->
	$routeProvider.when '/', redirectTo: '/ahri'
	$routeProvider.when '/ahri', controller: 'AhriCtrl'
	$routeProvider.when '/akali', controller: 'AkaliCtrl'
	$routeProvider.when '/alistar', controller: 'AlistarCtrl'
)
# LOL.constant('block', $ '#block')
