# Фильтруем итемы
LOL.filter('initItems', (localService) ->
    (items, name) ->
        numberItem = 0
        for i in [0...7]
            locItem = name + 'Item' + numberItem
            items[i] = localService.get locItem if localService.get(locItem)?
            numberItem++
        Tooltips.items()
        items
)

# Фильтруем спеллы
LOL.filter('initSpells', (localService) ->
    (spells, name) ->
        numberSpell = 0
        for i in [0...2]
            locSpell = name + 'Spell' + numberSpell
            spells[i] = localService.get locSpell if localService.get(locSpell)?
            numberSpell++
        Tooltips.spells()
        spells
)

# Фильтруем выбранные спеллы
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

# Фильтруем выбранные руны
LOL.filter('existsRunes', (localService) ->
    (runes, typeRune) ->
        allRunes = {}
        switch typeRune
            when 'mark' then reg = /MO/gi; src = $('.mark').attr 'ng-src'
            when 'seal' then reg = /SO/gi; src = $('.seal').attr 'ng-src'
            when 'glyph' then reg = /GO/gi; src = $('.glyph').attr 'ng-src'
            when 'quint' then reg = /QO/gi; src = $('.quint').attr 'ng-src'
            else reg = /MO/gi
        for key, value of runes
            if (not reg.test value) or (value is src) then continue
            allRunes[key] = value
        Tooltips.runes()
        allRunes
)

# Фильтруем скиллы
LOL.filter('initSkills', (localService, $routeParams) ->
    (skills, name) ->
        numberSkill = 0
        for i in [0...18]
            locSkill = name + 'Skill' + numberSkill
            skills[i] = localService.get locSkill if localService.get(locSkill)?
            numberSkill++   
        Tooltips[$routeParams.name || 'Ahri']()
        skills
)

# Фильтруем мастерис Offensive
LOL.filter('initOffensive', (localService, $timeout) ->
    (offensive, name) ->
        numberMaster = 1
        for i in [0...17]
            locOff = name + numberMaster
            offensive[i] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        $timeout( () ->
            Tooltips.masteries()
        , 100)
        offensive
)

# Фильтруем мастерис Defensive
LOL.filter('initDefensive', (localService) ->
    (defensive, name) ->
        numberMaster = 18
        for i in [0...16]
            locOff = name + numberMaster
            defensive[i] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        defensive
)

# Фильтруем мастерис Utility
LOL.filter('initUtility', (localService) ->
    (utility, name) ->
        numberMaster = 34
        for i in [0...16]
            locOff = name + numberMaster
            utility[i] = localService.get locOff if localService.get(locOff)?
            numberMaster++
        utility
)

# Фильтруем руны
LOL.filter('initRunes', (localService) ->
    (runes, name) ->
        numberRune = 0
        for i in [0...4]
            locRune = name + 'Rune' + numberRune;
            runes[i] = localService.get locRune if localService.get(locRune)?
            numberRune++;
        runes
)

# Фильтр максимального значения
LOL.filter('maxTo', () ->
    (input, num) ->
        if input >= num then num else input
)