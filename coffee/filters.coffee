# Фильтры
LOL.filter('initItems', ($scope, localService) ->
    (items) ->
        numberItem = 1
        for i in [2...8]
            locItem = $( $scope.image ).attr('id') + 'Item' + numberItem
            items[i] = localService.get locItem if localService.get(locItem)?
            numberItem++
)

LOL.filter('initSpells', ($scope, localService) ->
    (spells) ->
        numberSpell = 1
        for i in [0...2]
            locSpell = $( $scope.image ).attr('id') + 'Spell' + numberSpell
            spells[i] = localService.get locSpell if localService.get(locSpell)?
            numberSpell++
)

LOL.filter('initSkills', ($scope, localService) ->
    (skills) ->
        numberSkill = 1
        for i in [2...20]
            locSkill = $( $scope.image ).attr('id') + 'Skill' + numberSkill
            skills[i] = localService.get locSkill if localService.get(locSkill)?
            numberSkill++
)

LOL.filter('initOffensive', ($scope, localService) ->
    (offensive) ->
        numberMaster = 1
        $scope.offensiveUp = 0
        for m in [0...17]
            locOff = $( $scope.image ).attr 'id' + numberMaster
            offensive[m] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        for i in [0...offensive.length]
            arg = parseInt offensive[i]
            $scope.offensiveUp += arg
)

LOL.filter('initDefensive', ($scope, localService) ->
    (defensive) ->
        numberMaster = 18
        $scope.defensiveUp = 0
        for m in [0...16]
            locOff = $( $scope.image ).attr('id') + numberMaster
            defensive[m] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        for i in [0...defensive.length]
            arg = parseInt defensive[i]
            $scope.defensiveUp += arg
)

LOL.filter('initUtility', ($scope, localService) ->
    (utility) ->
        numberMaster = 34
        $scope.utilityUp = 0
        for m in [0...16]
            locOff = $( $scope.image ).attr('id') + numberMaster
            utility[m] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        for i in [0...utility.length]
            arg = parseInt utility[i]
            $scope.utilityUp += arg
)

LOL.filter('initRunes', ($scope, localService) ->
    (runes) ->
        numberRune = 1
        for i in [0...4]
            locRune = $( $scope.image ).attr('id') + 'Rune' + numberRune;
            runes[i] = localService.get locRune if localService.get(locRune)?
            numberRune++;
)
