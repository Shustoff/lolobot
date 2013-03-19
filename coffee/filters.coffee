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
        for m in [0...17]
            locOff = $('.image img').attr 'id' + numberMaster
            offensive[m] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        offensive
)

LOL.filter('initDefensive', (localService) ->
    (defensive) ->
        numberMaster = 18
        for m in [0...16]
            locOff = $('.image img').attr('id') + numberMaster
            defensive[m] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        defensive
)

LOL.filter('initUtility', (localService) ->
    (utility) ->
        numberMaster = 34
        for m in [0...16]
            locOff = $('.image img').attr('id') + numberMaster
            utility[m] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        utility
)

LOL.filter('initRunes', (localService) ->
    (runes) ->
        numberRune = 0
        for i in [0...4]
            locRune = $('.image img').attr('id') + 'Rune' + numberRune;
            runes[i] = localService.get locRune if localService.get(locRune)?
            numberRune++;
        runes
)

LOL.filter('maxTo', () ->
    (input, num) ->
        if input >= num
            return num
        input
)