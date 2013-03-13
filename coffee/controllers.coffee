# Главный контроллер
LOL.controller('MainCtrl', ($scope) ->
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

