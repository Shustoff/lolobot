# Методы инициализации при загрузке приложения
$ ->
	initActions = () ->
	    initItemsAction()
	    initSpellsAction()
	    initSkillsAction()
	    initRunesAction()
	    initMasterAction()
	    initMasteries()
	    null

	$('#myModal').modal 'hide'

	$("#tabs").tabs()

	$('.ui-tabs-nav a').bind 'click', () ->
	    $('.character').effect 'slide', 800
	    null

    $('.inner-items').draggable()
    $('.inner-spells').draggable()
    $('.inner-runes').draggable()


    # Инициализация скиллов
    $('.skills-inner')
        .sortable(
            placeholder: 'placehold'
            revert: 'true'
            items: 'img'
            tolerance: 'pointer'
            deactivate: (event, ui) ->
                saves = $(ui.item).siblings().andSelf()
                localService = angular.element('html').injector().get('localService')
                $(saves).each () ->
                    item = $('.image img').attr('id') + 'Skill' + $(this).index()
                    try
                        localService.set(item, $(this).attr 'src' )
                    catch error
                        alert "Сохранить в локальное хранилище не удалось: " + error
                    null
                null
        )
        .disableSelection()

    $('.arguments').each () ->
       text = parseInt $(this).text()
       if text isnt 0
           $(this).parent('p').removeClass('disabled');

    null