# Методы инициализации при загрузке приложения
$ ->
    # Создаем модальное окно
	$('#myModal').modal 'hide'

    # Создаем табы
	$("#tabs").tabs()

	$('.ui-tabs-nav a').bind 'click', () ->
	    $('.character').effect 'slide', 800
	    null

    # Делаем всплывающие блоки перетаскиваемыми
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

    # Создание подсказок на старте
    Tooltips.Ahri()
    Tooltips.items()
    Tooltips.runes()
    Tooltips.spells()
    Tooltips.masteries()

    null