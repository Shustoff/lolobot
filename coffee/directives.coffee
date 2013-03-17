LOL.directive('stats', () ->
	directiveObj = 
		template: "<ul><li ng-repeat='(key, val) in stats'>{{ key }} <span>{{ val }}</span></li></ul>"
		restrict: 'E'
		scope: '='
)