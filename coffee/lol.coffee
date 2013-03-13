# Создаем модуль приложения
LOL = angular.module('lol', [])
LOL.constant('block', $ '#block')

# Методы инициализации при загрузке приложения
$ () ->
	initActions () ->
	    initItemsAction()
	    initSpellsAction()
	    initSkillsAction()
	    initRunesAction()
	    initMasterAction()
	    initMasteries()
	    null

	$('#myModal').modal 'hide'
	$("#tabs").tabs()
	$('#tabs .menu a').bind 'click', () ->
	    $('.character').effect 'slide', 800
	    initActions()
	    null

    null