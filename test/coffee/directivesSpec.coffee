describe 'LOL testing directives', ->

	beforeEach module 'lol'
	
	describe 'Stats testing', ->

		scope = null
		el = null

		beforeEach inject ($rootScope, $compile, $controller) ->
			el = angular.element "<stats></stats>"
			scope = $rootScope
			ctrl = $controller 'MainCtrl', $scope: scope
			$compile(el)(scope)
			scope.$digest()

		it 'should be 10 stats for character', ->
			lists = el.find 'li'
			expect(lists.length).toBe 10

		it 'stats should be an Object with params', ->
			expect(scope.stats).toEqual jasmine.any Object

	describe 'Items testing', ->
		