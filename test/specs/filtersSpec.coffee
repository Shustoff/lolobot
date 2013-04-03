describe 'filter', ->

	beforeEach(angular.module('lol.filters'))

	describe 'interpolate', ->
		it 'should run filter', ->
			$filter 'maxTo'
