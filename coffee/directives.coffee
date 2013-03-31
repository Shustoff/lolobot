LOL.directive 'stats', ->
	stats = 
		template: "<ul><li ng-repeat='(key, val) in stats'>{{ key }} <span>{{ val }}</span></li></ul>"
		restrict: 'E'
		scope: '='

LOL.directive 'items', ->
	items =
		template: ""
		restrict: "E"
		scope: "="
		link: (scope, element, attrs) ->

LOL.directive 'innerItems', ->
	innerItems =
		tempalte: ""
		restrict: "E"
		scope: "="
		link: (scope, element, attrs) ->

LOL.directive 'spells', ->
	spells =
		template: ""
		restrict: "E"
		scope: "="
		link: (scope, element, attrs) ->

LOL.directive 'innerSpells', ->
	innerSpells =
		template: ""
		restrict: "E"
		scope: "="
		link: (scope, element, attrs) ->

LOL.directive 'skills', ->
	skills = 
		template: ""
		restrict: "E"
		scope: "="
		link: (scope, element, attrs) ->

LOL.directive 'runes', ->
	runes =
		template: ""
		restrict: "E"
		scope: "="
		link: (scope, element, attrs) ->

LOL.directive 'innerRunes', ->
	innerRunes =
		tempalte: ""
		restrict: "E"
		scope: "="
		link: (scope, element, attrs) ->