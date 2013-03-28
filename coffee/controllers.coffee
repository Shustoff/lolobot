# Главный контроллер
LOL.controller('MainCtrl', ($timeout, $compile, $scope, $routeParams, localService) ->
    $scope.visibleModal = false

    $scope.visibleInnerItems = false
    $scope.visibleInnerSpells = false
    $scope.visibleInnerRunes = false
    $scope.isCanSave = false
    
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

    # Обновляем jQuery UI компоненты после рендера другого персонажа
    $scope.$on '$routeChangeSuccess', (scope, next, current) ->
        $('.inner-items').draggable()
        $('.inner-spells').draggable()
        $('.inner-runes').draggable()
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

    # Помечаем активную ссылку
    $scope.markActiveClass = (key) ->
        'ui-tabs-active ui-state-active' if $routeParams.name == key

    # Сбрасываем все билды
    $scope.resetBuilds = ->
        localService.reset()

    # Показываем блок с итемами
    $scope.showItemsBlock = ($event) ->
        $scope.selectedItem = $event.target
        $scope.visibleInnerItems = !$scope.visibleInnerItems
        null

    # Показываем блок со спеллами
    $scope.showSpellsBlock = ($event) ->
        $scope.selectedSpell = $event.target
        $scope.visibleInnerSpells = !$scope.visibleInnerSpells
        null

    # Показываем блок с рунами
    $scope.showRunesBlock = ($event) ->
        $scope.selectedRune = $event.target
        $scope.visibleInnerRunes = !$scope.visibleInnerRunes
        null

    # Скрываем блок с итемами
    $scope.hideItemsBlock = ->
        $scope.visibleInnerItems = !$scope.visibleInnerItems
        null

    # Скрываем блок со спеллами
    $scope.hideSpellsBlock = ->
        $scope.visibleInnerSpells = !$scope.visibleInnerSpells
        null

    # Скрываем блок с рунами
    $scope.hideRunesBlock = ->
        $scope.visibleInnerRunes = !$scope.visibleInnerRunes
        null

    # Добавляем итем в сборку
    $scope.addItemInBuild = (item, $event) ->
        target = $event.target
        $('.inner-items > img').css 'opacity', '1'
        $(target).css 'opacity', '0.3'
        $($scope.selectedItem).attr('src', item)    
        item = $('.image img').attr('id') + 'Item' + $($scope.selectedItem).index()
        try
            localService.set(item, $(target).attr 'ng-src')
            $scope.hideItemsBlock()
        catch e
            alert "Сохранить в локальное хранилище не удалось: " + e
        $timeout( () -> 
            Tooltips.items() 
        , 100)
        null

    # Добавляем спелл в сборку
    $scope.addSpellInBuild = (spell, $event) ->
        target = $event.target
        $($scope.selectedSpell).attr 'src', spell    
        spell = $('.image img').attr('id') + 'Spell' + $($scope.selectedSpell).index()
        try
            localService.set(spell, $(target).attr 'ng-src')
            $scope.hideSpellsBlock()
        catch e
            alert "Сохранить в локальное хранилище не удалось: " + e
        $timeout( () -> 
            Tooltips.spells() 
        , 100)
        null

    # Добавляем руны в сборку 
    $scope.addRuneInBuild = (rune, $event) ->
        target = $event.target
        $($scope.selectedRune).attr 'ng-src', rune
        rune = $('.image img').attr('id') + 'Rune' + $($scope.selectedRune).index()
        try 
            localService.set(rune, $(target).attr 'ng-src')
            $scope.hideRunesBlock()
        catch e
            alert "Сохранить в локальное хранилище не удалось: " + e

        cloner = $('.runes > div > div').clone()
        $('.runes > div > div').remove();
        clonedEl = $compile(cloner)($scope)
        $('.runes > div').append clonedEl
        
        null

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

    # Сброс мастерис
    $scope.resetMasteries = () ->
        $scope.offensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.defensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.utility = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.doMasteriesCount()
        $scope.isCanSave = true
        null

    # Считаем общее количество прокачанных мастерис
    $scope.doMasteriesCount = () ->
        $scope.masteriesCount = $scope.offensiveCount($scope.offensive) + $scope.defensiveCount($scope.defensive) + $scope.utilityCount($scope.utility)
        $scope.masteriesCount

    # Сохранение мастерис
    $scope.saveMasteries = () ->
        $('table p > span:first-child').each () ->
            item = $('.image img').attr('id') + $(this).attr 'id'
            try
                localService.set item, $(this).text()
            catch error
                alert "Сохранить в локальное хранилище не удалось: " + error
            $scope.isCanSave = false
            null
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