# Главный контроллер
LOL.controller('MainCtrl', ($scope, localService) ->
    $scope.visibleModal = false

    $scope.visibleInnerItems = false
    $scope.visibleInnerSpells = false

    $scope.isCanSave = false
    
    $scope.Masteries = Masteries
    $scope.AllItems = Items
    $scope.AllSpells = Spells

    # Сбрасываем все билды
    $scope.resetBuilds = ->
        localService.reset()

    # Генерируем общие подсказки
    $scope.initTooltips = ->
        Tooltips.items()
        Tooltips.runes()
        Tooltips.spells()
        Tooltips.masteries()
        $("table p").each () ->
            value = /0/
            unless $(this).text().search value 
                $(this).addClass 'disabled'
            null
        null

    # Показываем блок с итемами
    $scope.showItemsBlock = ($event) ->
        $scope.selectedItem = $event.target
        $scope.visibleInnerItems = !$scope.visibleInnerItems
        Tooltips.items()
        null

    # Показываем блок со спеллами
    $scope.showSpellsBlock = ($event) ->
        $scope.selectedSpell = $event.target
        $scope.visibleInnerSpells = !$scope.visibleInnerSpells
        Tooltips.spells()
        null

    # Скрываем блок с итемами
    $scope.hideItemsBlock = ->
        $scope.visibleInnerItems = !$scope.visibleInnerItems
        null

    # Скрываем блок со спеллами
    $scope.hideSpellsBlock = ->
        $scope.visibleInnerSpells = !$scope.visibleInnerSpells
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
        null

    # Считаем прокачанные offensive
    $scope.offensiveUp = (offensive) ->
        _.reduce offensive, (i, k) ->
            i + k

    # Считаем прокачанные defensive
    $scope.defensiveUp = (defensive) ->
        _.reduce defensive, (i, k) ->
            i + k

    # Считаем прокачанные utility
    $scope.utilityUp = (utility) ->
         _.reduce utility, (i, k) ->
            i + k

    # Сброс мастерис
    $scope.resetMasteries = (offensive, defensive, utility) ->
        $scope.offensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.defensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $scope.utility = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        $("table p > span:first-child").each () ->
            $('table p').addClass 'disabled'
            $('table .first-off p').removeClass 'disabled'
            $scope.isCanSave = true
            $('.btn-success').text 'Сохранить мастерис'
            null
        null

    # Сохранение мастерис
    $scope.saveMasteries = () ->
        $('.arguments').each () ->
            item = $('.image img').attr 'id'
            item += $(this).attr 'id'
            try
                localService.set item, $(this).text()
            catch e
                alert "Сохранить в локальное хранилище не удалось: " + e
            $scope.isCanSave = false
            $('.btn-success').text 'Сохранено успешно'
            null
        null

    # Проверка прокачанных мастерис
    $scope.checkMasteries = () ->
            sum = $scope.offensiveUp + $scope.defensiveUp + $scope.utilityUp
            if sum >= 30
                $('table img').click false
            null

    null
)

# Контроллер Ahri
LOL.controller('AhriCtrl', ($scope) ->
    $scope.stats = Characters.ahri.stats
    $scope.image = Images.ahri
    $scope.items = Characters.ahri.items
    $scope.spells = Characters.ahri.spells
    $scope.skills = Characters.ahri.skills
    $scope.$parent.offensive = Characters.ahri.offensive
    $scope.$parent.defensive = Characters.ahri.defensive
    $scope.$parent.utility = Characters.ahri.utility
    $scope.runes = Characters.ahri.runes
    $scope.initCharacterTooltip = -> Tooltips.Ahri()
    null
)

