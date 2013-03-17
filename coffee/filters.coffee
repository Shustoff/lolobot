# Фильтры
LOL.filter('initItems', (localService) ->
    (items) ->
        numberItem = 0
        for i in [0...7]
            locItem = $('.image img').attr('id') + 'Item' + numberItem
            items[i] = localService.get locItem if localService.get(locItem)?
            numberItem++
        items
)

LOL.filter('initSpells', (localService) ->
    (spells) ->
        numberSpell = 0
        for i in [0...2]
            locSpell = $('.image img').attr('id') + 'Spell' + numberSpell
            spells[i] = localService.get locSpell if localService.get(locSpell)?
            numberSpell++
        spells
)

LOL.filter('existsSpells', (localService) ->
    (spells) ->
        firstSpell = $('.spells img:first').attr 'src'
        secondSpell = $('.spells img:last').attr 'src'
        allSpells = {}
        for key, value of spells
            if (value is firstSpell) or (value is secondSpell) then continue
            allSpells[key] = value
        allSpells
)

LOL.filter('initSkills', (localService) ->
    (skills) ->
        numberSkill = 0
        for i in [0...18]
            locSkill = $('.image img').attr('id') + 'Skill' + numberSkill
            skills[i] = localService.get locSkill if localService.get(locSkill)?
            numberSkill++   
        skills
)

LOL.filter('initOffensive', (localService) ->
    (offensive) ->
        numberMaster = 1
        $scope.offensiveUp = 0
        for m in [0...17]
            locOff = $( $scope.image ).attr 'id' + numberMaster
            offensive[m] = $resource.localService.get locOff if $resource.localService.get(locOff)?
            numberMaster++
        for i in [0...offensive.length]
            arg = parseInt offensive[i]
            $scope.offensiveUp += arg
)

LOL.filter('initDefensive', (localService) ->
    (defensive) ->
        numberMaster = 18
        $scope.defensiveUp = 0
        for m in [0...16]
            locOff = $( $scope.image ).attr('id') + numberMaster
            defensive[m] = $resource.localService.get locOff if $resource.localService.get(locOff)?
            numberMaster++
        for i in [0...defensive.length]
            arg = parseInt defensive[i]
            $scope.defensiveUp += arg
)

LOL.filter('initUtility', (localService) ->
    (utility) ->
        numberMaster = 34
        $scope.utilityUp = 0
        for m in [0...16]
            locOff = $( $scope.image ).attr('id') + numberMaster
            utility[m] = $resource.localService.get locOff if $resource.localService.get(locOff)?
            numberMaster++
        for i in [0...utility.length]
            arg = parseInt utility[i]
            $scope.utilityUp += arg
)

LOL.filter('initRunes', (localService) ->
    (runes) ->
        numberRune = 0
        for i in [0...4]
            locRune = $( $scope.image ).attr('id') + 'Rune' + numberRune;
            runes[i] = $resource.localService.get locRune if $resource.localService.get(locRune)?
            numberRune++;
)
