describe 'LOL testing filters', ->
	
	scope = null
	localService = null
	filter = null

	beforeEach module 'lol'

	beforeEach inject ($rootScope, $controller, $injector, $filter) ->
		scope = $rootScope
		ctrl = $controller 'MainCtrl', $scope: scope
		filter = $filter
		localService = $injector.get 'localService'

	describe 'Test Init Filter', ->
		it 'should be exist', -> expect(filter('initItems')).not.toEqual(null)
		it 'should return 6 filtered items', ->
			items = filter('initItems')(scope.items, 'Ahri')
			expect(items.length).toBe(6)
		it 'should be request to localService get items', ->
			spyOn localService, 'get'
			filter('initItems')(scope.items, 'Ahri')
			expect(localService.get).toHaveBeenCalled()

	describe 'Test Init spells', ->
		it 'should be exist', -> expect(filter('initSpells')).not.toEqual(null)
		it 'should return 2 filtered spells', ->
			spells = filter('initSpells')(scope.spells, 'Ahri')
			expect(spells.length).toBe(2)
		it 'should be request to localService get spells', ->
			spyOn localService, 'get'
			filter('initSpells')(scope.spells, 'Ahri')
			expect(localService.get).toHaveBeenCalled()

	describe 'Test exists Spells', ->
		it 'should be exist', -> expect(filter('existsSpells')).not.toEqual(null)
		it 'should return 14 filtered spells without exists spells', ->
			eSpells = filter('existsSpells')(scope.AllSpells)
			expect(_.values(eSpells).length - 2).toBe(14)

	describe 'Test Init Skills', ->
		it 'should be exist', -> expect(filter('initSkills')).not.toEqual(null)
		it 'should return 18 filtered skills', ->
			skills = filter('initSkills')(scope.skills, 'Ahri')
			expect(skills.length).toBe(18)
		it 'should be request to localService get skills', ->
			spyOn localService, 'get'
			filter('initSkills')(scope.items, 'Ahri')
			expect(localService.get).toHaveBeenCalled()

	describe 'Test Init Offensive', ->
		it 'should be exist', -> expect(filter('initOffensive')).not.toEqual(null)
		it 'should return 17 filtered offensive masteries', ->
			offensive = filter('initOffensive')(scope.offensive, 'Ahri')
			expect(offensive.length).toBe(17)
		it 'should be request to localService get offensive', ->
			spyOn localService, 'get'
			filter('initOffensive')(scope.offensive, 'Ahri')
			expect(localService.get).toHaveBeenCalled()

	describe 'Test Init Defensive', ->
		it 'should be exist', -> expect(filter('initDefensive')).not.toEqual(null)
		it 'should return 16 filtered defensive masteries', ->
			defensive = filter('initDefensive')(scope.defensive, 'Ahri')
			expect(defensive.length).toBe(16)
		it 'should be request to localService get defensive', ->
			spyOn localService, 'get'
			filter('initDefensive')(scope.defensive, 'Ahri')
			expect(localService.get).toHaveBeenCalled()

	describe 'Test Init Utility', ->
		it 'should be exist', -> expect(filter('initUtility')).not.toEqual(null)
		it 'should return 16 filtered utility masteries', ->
			utility = filter('initUtility')(scope.utility, 'Ahri')
			expect(utility.length).toBe(16)
		it 'should be request to localService get utility', ->
			spyOn localService, 'get'
			filter('initUtility')(scope.utility, 'Ahri')
			expect(localService.get).toHaveBeenCalled()

	describe 'Test Runes', ->
		it 'should be exist', -> expect(filter('initRunes')).not.toEqual(null)
		it 'should return 4 filtered runes', ->
			runes = filter('initRunes')(scope.runes, 'Ahri')
			expect(runes.length).toBe(4)
		it 'should be request to localService get runes', ->
			spyOn localService, 'get'
			filter('initRunes')(scope.runes, 'Ahri')
			expect(localService.get).toHaveBeenCalled()

	describe 'Test Exists Runes', ->
		it 'should be exist', -> expect(filter('existsRunes')).not.toEqual(null)
		it 'should return 8 filtered runes mark type without exist', ->
			eRunes = filter('existsRunes')(scope.AllRunes, 'mark')
			expect(_.values(eRunes).length - 1).toBe(8)
		it 'should return 7 filtered runes seal type without exist', ->
			eRunes = filter('existsRunes')(scope.AllRunes, 'seal')
			expect(_.values(eRunes).length - 1).toBe(7)
		it 'should return 6 filtered runes glyph type without exist', ->
			eRunes = filter('existsRunes')(scope.AllRunes, 'glyph')
			expect(_.values(eRunes).length - 1).toBe(6)
		it 'should return 10 filtered runes quint type without exist', ->
			eRunes = filter('existsRunes')(scope.AllRunes, 'quint')
			expect(_.values(eRunes).length - 1).toBe(10)

	describe 'Test Max To', ->
		it 'should be exist and return max value', ->
			maxValue1 = filter('maxTo')(3, 4)
			maxValue2 = filter('maxTo')(6, 4)
			expect(maxValue1).toBe(3)
			expect(maxValue2).toBe(4)