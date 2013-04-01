# Создаем модуль приложения
LOL = angular.module('lol', []).value('$anchorScroll', angular.noop)

# При запуске генерируем модальное окно бутстрапа
LOL.run ->
	$('#myModal').modal 'hide'

# Устанавливаем роуты
LOL.config ($routeProvider, $locationProvider) ->
	$routeProvider.when '/', redirectTo: '/Ahri'
	$routeProvider.when '/:name', 
		controller: 'MainCtrl' 
		template: $('#tabs').html()
	$locationProvider.html5Mode(false)
	null
