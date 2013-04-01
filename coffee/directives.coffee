# Stats
LOL.directive 'stats', ->
	stats = 
		template: "<ul><li ng-repeat='(key, val) in stats'>{{ key }} <span>{{ val }}</span></li></ul>"
		restrict: 'E'
		scope: '='



# Items
LOL.directive 'items', ($timeout, localService) ->
    items = 
        template: "<img  />"
        restrict: "E"
        replace: true
        link: (scope, element, attrs) ->
            element.bind 'click', ->
                scope.$parent.selectedItem = element
                scope.$parent.visibleInnerItems = not scope.$parent.visibleInnerItems
                scope.$parent.$apply()

LOL.directive 'innerItems', ($timeout, localService) ->
    innerItems = 
        template: "<img  />"
        restrict: "E"
        replace: true
        link: (scope, element, attrs) ->
            element.bind 'click', ->
                $('.inner-items > img').css 'opacity', '1'
                $(element).css 'opacity', '0.3'
                $(scope.$parent.selectedItem).attr('src', item)    
                item = scope.$parent.name + 'Item' + $(scope.$parent.selectedItem).index()
                try
                    localService.set item, $(element).attr 'ng-src'
                    scope.$parent.hideItemsBlock()
                catch error
                    alert "Сохранить в локальное хранилище не удалось: #{error}"
                $timeout -> Tooltips.items()



# Spells
LOL.directive 'spells', ->
	spells =
		template: "<img />"
		restrict: "E"
		replace: true
		link: (scope, element, attrs) ->
            element.bind 'click', ->
                scope.$parent.selectedSpell = element
                scope.$parent.visibleInnerSpells = not scope.$parent.visibleInnerSpells
                scope.$parent.$apply()

LOL.directive 'innerSpells', ($timeout, localService) ->
	innerSpells =
		template: "<img />"
		restrict: "E"
		replace: true
		link: (scope, element, attrs) ->
            element.bind 'click', ->
                $(scope.$parent.selectedSpell).attr 'src', spell    
                spell = scope.$parent.name + 'Spell' + $(scope.$parent.selectedSpell).index()
                try
                    localService.set(spell, $(element).attr 'ng-src')
                    scope.$parent.hideSpellsBlock()
                catch error
                    alert "Сохранить в локальное хранилище не удалось: #{error}"
                $timeout -> Tooltips.spells() 



# Skills
LOL.directive 'skills', (localService) ->
	skills = 
		template: "<img />"
		restrict: "E"
		replace: true



# Runes
LOL.directive 'runes', ($rootScope) ->
	runes =
		template: "<div>
                       <img class='mark' ng-src='{{ runes[0] }}'/>x9
                       <img class='seal' ng-src='{{ runes[1] }}'/>x9
                       <img class='glyph' ng-src='{{ runes[2] }}'/>x9
                       <img class='quint' ng-src='{{ runes[3] }}' />x3
                   </div>"
		restrict: "E"
		replace: true
		link: (scope, element, attrs) ->
            element.find('img').bind 'click', (e) ->
                $rootScope.typeRune = e.target.className
                $rootScope.selectedRune = e.target
                $rootScope.visibleInnerRunes = not $rootScope.visibleInnerRunes
                $rootScope.$apply()
                Tooltips.runes()

LOL.directive 'innerRunes', ($timeout, $rootScope, $compile, localService) ->
	innerRunes =
		template: "<img />"
		restrict: "E"
		replace: true
		link: (scope, element, attrs) ->
            element.bind 'click', ->
                $($rootScope.selectedRune).attr 'src', scope.rune
                rune = scope.name + 'Rune' + $($rootScope.selectedRune).index()
                try 
                    localService.set rune, $(element).attr 'src'
                    scope.hideRunesBlock()
                catch error
                    alert "Сохранить в локальное хранилище не удалось: #{error}"
                $rootScope.$apply()
