# Создаем модуль приложения
LOL = angular.module('lol', [])

# При запуске генерируем модальное окно бутстрапа
LOL.run () ->
	$('#myModal').modal 'hide'

# Устанавливаем роуты
LOL.config ($routeProvider, $locationProvider) ->
	$locationProvider.html5Mode(false)
	$routeProvider.when '/', redirectTo: '/Ahri'
	$routeProvider.when '/:name', 
		controller: 'MainCtrl' 
		template: $('#tabs').html()
	null
