# Главный контроллер
LOL.controller('MainCtrl', ($scope, localService) ->
    $scope.visibleModal = false

    $scope.visibleInnerItems = false
    $scope.visibleInnerSpells = false
    
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

    $scope.offensiveUp = (offensive) ->
        out = _.reduce offensive, (i, k) ->
            i + k
        out
    
    $scope.defensiveUp = (defensive) ->
        out = _.reduce defensive, (i, k) ->
            i + k
        out

    $scope.utilityUp = (utility) ->
        out = _.reduce utility, (i, k) ->
            i + k
        out

    null
)

# Контроллер Ahri
LOL.controller('AhriCtrl', ($scope) ->
    $scope.stats = Characters.ahri.stats
    $scope.image = Images.ahri
    $scope.items = Characters.ahri.items
    $scope.spells = Characters.ahri.spells
    $scope.skills = Characters.ahri.skills
    $scope.offensive = Characters.ahri.offensive
    $scope.defensive = Characters.ahri.defensive
    $scope.utility = Characters.ahri.utility
    $scope.runes = Characters.ahri.runes
    $scope.initCharacterTooltip = -> Tooltips.Ahri()
    null
)

