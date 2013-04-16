describe 'LOL testing directives', ->

	[scope, el, prevEl] = [null, null, []]

	beforeEach module 'lol'

	beforeEach inject ($rootScope, $compile, $controller) ->
		scope = $rootScope
		ctrl = $controller 'MainCtrl', $scope: scope

	describe 'Stats testing', ->

		beforeEach inject ($rootScope, $compile, $controller) ->
			el = angular.element "<stats></stats>"
			$compile(el)(scope)
			scope.$digest()

		it 'should be 10 stats for character', ->
			lists = el.find 'li'
			expect(lists.length).toBe 10

		it 'stats should be an Object with params', ->
			expect(scope.stats).toEqual jasmine.any Object

	describe 'Items testing', ->
		
		beforeEach inject ($compile) ->
			el = angular.element "<div><items ng-repeat='item in items | initItems:name' ng-src='{{ item }}'></items></div>"
			$compile(el)(scope)
			scope.$digest()

		it 'should be 6 items for character', ->
			items = el.find 'img'
			expect(items.length).toBe 6

		it 'items should be an Object with params', ->
			expect(scope.items).toEqual jasmine.any Object

		it 'onclick should be show inner-items block', ->
			item = el.find 'img:first'
			item.click()
			expect(scope.visibleInnerItems).toBeTruthy()

	describe 'Inner Items testing', ->

		beforeEach inject ($compile) ->
			prevEl[0] = angular.element "<div><items ng-repeat='item in items | initItems:name' ng-src='{{ item }}'></items></div>"
			el = angular.element "<div><inner-items ng-repeat='item in AllItems' ng-src='{{ item }}'></inner-items><div>"
			$compile(prevEl[0])(scope)
			$compile(el)(scope)
			scope.$digest()

		it 'should be available all 130 items for character', ->
			innerItems = el.find 'img'
			expect(innerItems.length).toBe 130

		it 'All items should be an Object with params', ->
			expect(scope.AllItems).toEqual jasmine.any Object

		it 'onclick should be add item in build and hide block', ->
			flag = null
			spyOn scope, 'hideItemsBlock'
			item = el.find 'img:first'
			item.click()
			setTimeout ->
				expect(angular.element(prevEl[0].find 'img:first' ).attr 'src' ).toBe angular.element(item).attr 'src'
			, 500
			expect(scope.hideItemsBlock).toHaveBeenCalled()


	describe 'Spells testing', ->

		beforeEach inject ($compile) ->
			el = angular.element "<div><spells ng-repeat='spell in spells | initSpells:name' ng-src='{{ spell }}'></spells></div>"
			$compile(el)(scope)
			scope.$digest()

		it 'should be 2 spells for character', ->
			spells = el.find 'img'
			expect(spells.length).toBe 2

		it 'spells should be an Object with params', ->
			expect(scope.spells).toEqual jasmine.any Object

		it 'onclick should be show inner-spells block', ->
			spell = el.find 'img:first'
			spell.click()
			expect(scope.visibleInnerSpells).toBeTruthy()

	describe 'Inner Spells testing', ->

		beforeEach inject ($compile) ->
			prevEl[1] = angular.element "<div><spells ng-repeat='spell in spells | initSpells:name' ng-src='{{ spell }}'></spells></div>"
			el = angular.element "<div><inner-spells ng-repeat='spell in AllSpells | existsSpells' ng-src='{{ spell }}'></inner-spells><div>"
			$compile(prevEl[1])(scope)
			$compile(el)(scope)
			scope.$digest()
 
		it 'should be available all 14 spells for character', ->
			innerSpells = el.find 'img'
			expect(innerSpells.length - 2).toBe 14 # -2 exist spell (not repeat spells)

		it 'All spells should be an Object with params', ->
			expect(scope.AllSpells).toEqual jasmine.any Object

		it 'onclick should be add spell in build and hide block', ->
			spyOn scope, 'hideSpellsBlock' 
			spell = el.find 'img:first'
			spell.click()
			setTimeout ->
				expect(angular.element(prevEl[1].find 'img:first' ).attr 'src' ).toBe angular.element(spell).attr 'src'
			, 500
			expect(scope.hideSpellsBlock).toHaveBeenCalled()

	describe 'Skills testing', ->

		beforeEach inject ($rootScope, $compile, $controller) ->
			el = angular.element "<div><skills ng-repeat='skill in skills | initSkills:name' ng-src='{{ skill }}'></skills></div>"
			$compile(el)(scope)
			scope.$digest()
 
		it 'should be 18 skills for character', ->
			skills = el.find 'img'
			expect(skills.length).toBe 18

		it 'skills should be an Object with params', ->
			expect(scope.skills).toEqual jasmine.any Object

	describe 'Runes testing', ->

		beforeEach inject ($compile) ->
			el = angular.element "<runes></runes>"
			$compile(el)(scope)
			scope.$digest()

		it 'should be 4 runes for character', ->
			runes = el.find 'img'
			expect(runes.length).toBe 4

		it 'runes should be an Object with params', ->
			expect(scope.runes).toEqual jasmine.any Object

		it 'onclick should be show inner-runes block', ->
			rune = el.find 'img:first'
			rune.click()
			expect(scope.visibleInnerRunes).toBeTruthy()

	describe 'Inner Runes testing', ->

		beforeEach inject ($compile) ->
			prevEl[2] = angular.element "<runes></runes>"
			el = angular.element "<div><inner-runes ng-repeat='rune in AllRunes' ng-src='{{ rune }}'></inner-runes></div>"
			$compile(prevEl[2])(scope)
			$compile(el)(scope)
			scope.$digest()
 
		it 'should be available all 38 runes for character', ->
			innerRunes = el.find 'img'
			expect(innerRunes.length).toBe 38

		it 'All runes should be an Object with params', ->
			expect(scope.AllRunes).toEqual jasmine.any Object

		it 'onclick should be add rune in build and hide block', ->
			spyOn scope, 'hideRunesBlock'
			rune = el.find 'img:first'
			rune.click()
			setTimeout -> 
				expect(angular.element(prevEl[2].find 'img:first' ).attr 'src' ).toBe angular.element(rune).attr 'src'
			, 500
			expect(scope.hideRunesBlock).toHaveBeenCalled()