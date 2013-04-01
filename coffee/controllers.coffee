# Главный контроллер
LOL.controller('MainCtrl', ($rootScope, $window, $timeout, $compile, $scope, $routeParams, localService) ->
    # Переменные статуса
    $scope.visibleModal = false
    $scope.visibleInnerItems = false
    $scope.visibleInnerSpells = false
    $scope.visibleInnerRunes = false
    $scope.isCanSave = false
    
    # Данные
    $scope.Characters = Characters
    $scope.Masteries = Masteries
    $scope.AllItems = Items
    $scope.AllSpells = Spells
    $scope.AllRunes = Runes
    $scope.name = $routeParams.name || 'Ahri'
    $scope.stats = Characters[$scope.name].stats
    $scope.items = Characters[$scope.name].items
    $scope.spells = Characters[$scope.name].spells
    $scope.skills = Characters[$scope.name].skills
    $scope.offensive = Characters[$scope.name].offensive
    $scope.defensive = Characters[$scope.name].defensive
    $scope.utility = Characters[$scope.name].utility
    $scope.runes = Characters[$scope.name].runes

    # Фиксируем проскроленную область чтобы страница не прыгала вверх
    $scope.$on '$routeChangeStart', () ->
        $rootScope.offsetScroll = $($window).scrollTop()

    # Обновляем jQuery UI компоненты после рендера другого персонажа
    $scope.$on '$routeChangeSuccess', (scope, next, current) ->
        $('#block').hide()
        $('.inner-items, .inner-spells, .inner-runes').draggable()
        $('.skills-inner')
            .sortable
                placeholder: 'placehold'
                revert: 'true'
                items: 'img'
                tolerance: 'pointer'
                deactivate: (event, ui) ->
                    saves = $(ui.item).siblings().andSelf()
                    localService = angular.element('html').injector().get('localService')
                    $(saves).each ->
                        item = $scope.name + 'Skill' + $(@).index()
                        try
                            localService.set( item, $(@).attr 'src' )
                        catch error
                            alert "Сохранить в локальное хранилище не удалось: #{error}" 
            .disableSelection()
        $('#block').fadeIn 1000
        $window.scrollTo 0, $rootScope.offsetScroll
        $timeout ->
            Tooltips.items()
            Tooltips.spells()
            Tooltips[$scope.name]()
            Tooltips.masteries()
            Tooltips.runes()
        , 100  

    # Помечаем активную ссылку
    $scope.markActiveClass = (key) ->
        'ui-tabs-active ui-state-active' if $routeParams.name is key

    # Сбрасываем все билды
    $scope.resetBuilds = ->
        localService.reset()

    # Показываем блок с рунами
    ###$scope.showRunesBlock = ($event) ->
        $scope.selectedRune = $event.target
        $scope.visibleInnerRunes = not $scope.visibleInnerRunes
        null###

    # Скрываем блок с итемами
    $scope.hideItemsBlock = ->
        $scope.visibleInnerItems = not $scope.visibleInnerItems
        null

    # Скрываем блок со спеллами
    $scope.hideSpellsBlock = ->
        $scope.visibleInnerSpells = not $scope.visibleInnerSpells
        null

    # Скрываем блок с рунами
    $scope.hideRunesBlock = ->
        $rootScope.visibleInnerRunes = not $rootScope.visibleInnerRunes
        null


    # Добавляем руны в сборку 
    ###$scope.addRuneInBuild = (rune, $event) ->
        target = $event.target
        $($scope.selectedRune).attr 'ng-src', rune
        rune = $scope.name + 'Rune' + $($scope.selectedRune).index()
        try 
            localService.set(rune, $(target).attr 'ng-src')
            $scope.hideRunesBlock()
        catch error
            alert "Сохранить в локальное хранилище не удалось: #{error}"
        cloner = $('.runes > div > div').clone()
        $('.runes > div > div').remove();
        clonedEl = $compile(cloner)($scope)
        $('.runes > div').append clonedEl
        null###

    # Считаем прокачанные offensive
    $scope.offensiveCount = (offensive) ->
        _.reduce offensive, (i, k) ->
            (+i) + (+k)

    # Считаем прокачанные defensive
    $scope.defensiveCount = (defensive) ->
        _.reduce defensive, (i, k) ->
            (+i) + (+k)

    # Считаем прокачанные utility
    $scope.utilityCount = (utility) ->
         _.reduce utility, (i, k) ->
            (+i) + (+k)

    # Считаем общее количество прокачанных мастерис
    $scope.doMasteriesCount = ->
        $scope.masteriesCount = $scope.offensiveCount($scope.offensive) + $scope.defensiveCount($scope.defensive) + $scope.utilityCount($scope.utility)
        $scope.masteriesCount

    # Сохранение мастерис
    $scope.saveMasteries = ->
        $('table p > span:first-child').each ->
            item = $scope.name + $(this).attr 'id'
            try
                localService.set item, $(this).text()
            catch error
                alert "Сохранить в локальное хранилище не удалось: #{error}"
            $scope.isCanSave = false
            null
        null

    # Сброс мастерис
    $scope.resetMasteries = ->
        $scope.offensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.defensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.utility = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.doMasteriesCount()
        $scope.isCanSave = true
        null

    # Прокачиваем offensive
    $scope.offensiveUp = ($event, i, max) ->
        $scope.doMasteriesCount()
        if $scope.offensive[i] < max and $scope.masteriesCount <= 29 and $scope.isCanSave
            $scope.offensive[i] += 1
        null

    # Прокачиваем defensive
    $scope.defensiveUp = ($event, i, max) ->
        $scope.doMasteriesCount()
        if $scope.defensive[i] < max and $scope.masteriesCount <= 29 and $scope.isCanSave
            $scope.defensive[i] += 1
        null

    # Прокачиваем utility
    $scope.utilityUp = ($event, i, max) ->
        $scope.doMasteriesCount()
        if $scope.utility[i] < max and $scope.masteriesCount <= 29 and $scope.isCanSave
            $scope.utility[i] += 1
        null

    null
)