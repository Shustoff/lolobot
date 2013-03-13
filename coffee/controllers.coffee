# Главный модуль
LOL = angular.module('lol', [])
	.config '$routeProvider', ($routeProvider) ->
		$routeProvider.when '/', {
			controller: 'AhriCtrl'
		}

# Главный контроллер
LOL.AhriCtrl = ($scope) ->
	$scope.stats = Characters.ahri
	$scope.image = Images.ahri

	$scope.items = [
		Items.sorcerersShoes, 
		Items.rylaisCrystalScepter, 
		Items.willOfTheAncients,
		Items.rabadonsDeathcap, 
		Items.morellosEvilTome, 
		Items.voidStaff
	]
	$scope.initMain = ->
		numberItem = 1
		for i in [2...8]
			locItem = $( $scope.image ).attr('id') + 'Item' + numberItem
			$scope.items[i] = Helpers.lGet locItem if Helpers.lGet(locItem)?
			numberItem++

	$scope.spells = [Spells.ignite, Spells.flash]
	$scope.initSpells = ->
    	numberSpell = 1
		for i in [0...2]
    		locSpell = $( $scope.image ).attr('id') + 'Spell' + numberSpell
    		$scope.spells[i] = Helpers.lGet locSpell if Helpers.lGet(locSpell)?
    		numberSpell++

    $scope.skills = [ 
    	Skills.orbOfDeception, 
    	Skills.charm, 
    	Skills.foxFire,
    	Skills.orbOfDeception, 
    	Skills.orbOfDeception, 
    	Skills.spiritRush, 
    	Skills.orbOfDeception, 
    	Skills.foxFire, 
    	Skills.orbOfDeception, 
    	Skills.foxFire, 
    	Skills.spiritRush, 
    	Skills.foxFire, 
    	Skills.foxFire, 
    	Skills.charm, 
    	Skills.charm, 
    	Skills.spiritRush, 
    	Skills.charm, 
    	Skills.charm
    ]
    $scope.initSkills = ->
		numberSkill = 1
		for i in [2...20]
    		locSkill = $( $scope.image ).attr('id') + 'Skill' + numberSkill
    		$scope.skills[i] = Helpers.lGet locSkill if Helpers.lGet(locSkill)?
    		numberSkill++

    $scope.offensive = [1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1]
    $scope.initOffensive = -> 
    	numberMaster = 1
	    $scope.offensiveUp = 0

		for m in [0...17]
            locOff = $( $scope.image ).attr 'id' + numberMaster
            $scope.offensive[m] = Helpers.lGet locOff if Helpers.lGet(locOff)?
            numberMaster++

		for i in [0...$scope.offensive.length]
		    arg = parseInt $scope.offensive[i]
		    $scope.offensiveUp += arg

    $scope.defensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    $scope.initDefensive = ->
    	numberMaster = 18
	    $scope.defensiveUp = 0

		for m in [0...16]
			locOff = $( $scope.image ).attr('id') + numberMaster
			$scope.defensive[m] = Helpers.lGet locOff if Helpers.lGet(locOff)?
			numberMaster++

		for i in [0...$scope.defensive.length]
            arg = parseInt $scope.defensive[i]
            $scope.defensiveUp += arg

    $scope.utility [1, 0, 3, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    $scope.initUtility = ->
    	numberMaster = 34
	    $scope.utilityUp = 0

		for m in [0...16]
			locOff = $( $scope.image ).attr('id') + numberMaster
			$scope.utility[m] = Helpers.lGet locOff if Helpers.lGet(locOff)?
			numberMaster++

		for i in [0...$scope.utility.length]
			arg = parseInt $scope.utility[i]
			$scope.utilityUp += arg

	$scope.runes = [
		Runes.greaterMarkOfInsight, 
		Runes.greaterSealOfClarity, 
		Runes.greaterGlyphOfForce
	]
	$scope.initRunes = ->
		numberRune = 1

		for i in [0...4]
			locRune = $( $scope.image ).attr('id') + 'Rune' + numberRune;
			$scope.runes[i] = Helpers.lGet locRune if Helpers.lGet(locRune)?
			numberRune++;

	$scope.initTooltip = ->
        initTooltipItems()
        initTooltipRunes()
        initTooltipSpells()
        initTooltipMasteries()

	    $("table p").each () ->
	        value = /0/
	        unless $(this).text().search value 
	            $(this).addClass 'disabled'

    $scope.initTooltipAhri = ->
    	initTooltipAhri()

$ () ->
    block = $ '#block'
    
    initActions () ->
        initTooltip()
        initItemsAction()
        initSpellsAction()
        initSkillsAction()
        initRunesAction()
        initMasterAction()
        initMasteries()

    $('#myModal').modal 'hide'
    $("#tabs").tabs()

    $('#tabs .menu a').bind 'click', () ->
        $('.character').effect 'slide', 800
        initActions()

    initAhri()
    initActions()