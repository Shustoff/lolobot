describe 'LOL MainCtrl', ->
	[ctrl, scope, localService] = [null, null, null]

	beforeEach module 'lol'

	beforeEach inject ($controller, $rootScope, $injector) ->
		scope = $rootScope.$new()
		ctrl = $controller 'MainCtrl', $scope: scope
		localService = $injector.get 'localService'

	it 'inner items should be hidden by default', ->
		expect(scope.visibleInnerItems).toBeFalsy()

	it 'inner spells should be hidden by default', ->
		expect(scope.visibleInnerSpells).toBeFalsy()

	it 'inner runes should be hidden by default', ->
		expect(scope.visibleInnerRunes).toBeFalsy()

	it 'by default save masteries is disabled', ->
		expect(scope.isCanSave).toBeFalsy()

	it 'default route should be Ahri', ->
		expect(scope.name).toBe 'Ahri'

	it 'offset scroll is undefined by default', ->
		expect(scope.offsetScroll).toBeUndefined()

	it 'should be marked jquery-ui class active link', ->
		expect(scope.markActiveClass()).toBe 'ui-tabs-active ui-state-active'

	it 'should be reset all builds as request to localService', ->
		spyOn localService, 'reset'
		scope.resetBuilds()
		expect(localService.reset).toHaveBeenCalled()

	it 'should be hide items, spells, runes block', ->
		scope.hideItemsBlock()
		expect(scope.visibleInnerItems).toBeFalsy()
		scope.hideSpellsBlock()
		expect(scope.visibleInnerSpells).toBeFalsy()
		scope.hideRunesBlock()
		expect(scope.visibleInnerRunes).toBeFalsy()

	it 'should be summary offensive', ->
		spyOn _, 'reduce'
		scope.offensiveCount scope.offensive
		expect(_.reduce).toHaveBeenCalledWith scope.offensive, jasmine.any(Function)

	it 'should be summary defensive', ->
		spyOn _, 'reduce'
		scope.defensiveCount scope.defensive
		expect(_.reduce).toHaveBeenCalledWith scope.defensive, jasmine.any(Function)

	it 'should be summary utility', ->
		spyOn _, 'reduce'
		scope.utilityCount scope.utility
		expect(_.reduce).toHaveBeenCalledWith scope.utility, jasmine.any(Function)

	it 'should be summare all masteries', ->
		expect(scope.doMasteriesCount()).toBe scope.masteriesCount

	it 'should be save all masteries', ->
		spyOn localService, 'set'
		scope.saveMasteries()
		expect(localService.set).toHaveBeenCalledWith jasmine.any(String), jasmine.any(Number)

	it 'should be reset masteries', ->
		scope.resetMasteries()
		expect(scope.doMasteriesCount()).toBe 0
		expect(scope.isCanSave).toBeTruthy()

	it 'should be up offensive', ->
		scope.resetMasteries()
		scope.offensiveUp(null, 0, 1)
		expect(scope.doMasteriesCount()).toBeGreaterThan(0)
	
	it 'should be up defensive', ->
		scope.resetMasteries()
		scope.defensiveUp(null, 0, 1)
		expect(scope.doMasteriesCount()).toBeGreaterThan(0)
	
	it 'should be up utility', ->
		scope.resetMasteries()
		scope.utilityUp(null, 0, 1)
		expect(scope.doMasteriesCount()).toBeGreaterThan(0)