// Generated by CoffeeScript 1.6.1

LOL.controller('MainCtrl', function($timeout, $compile, $scope, $routeParams, localService) {
  $scope.visibleModal = false;
  $scope.visibleInnerItems = false;
  $scope.visibleInnerSpells = false;
  $scope.visibleInnerRunes = false;
  $scope.isCanSave = false;
  $scope.Characters = Characters;
  $scope.Masteries = Masteries;
  $scope.AllItems = Items;
  $scope.AllSpells = Spells;
  $scope.AllRunes = Runes;
  $scope.name = $routeParams.name || 'Ahri';
  $scope.stats = Characters[$scope.name].stats;
  $scope.items = Characters[$scope.name].items;
  $scope.spells = Characters[$scope.name].spells;
  $scope.skills = Characters[$scope.name].skills;
  $scope.offensive = Characters[$scope.name].offensive;
  $scope.defensive = Characters[$scope.name].defensive;
  $scope.utility = Characters[$scope.name].utility;
  $scope.runes = Characters[$scope.name].runes;
  $scope.$on('$routeChangeSuccess', function(scope, next, current) {
    $('.inner-items').draggable();
    $('.inner-spells').draggable();
    $('.inner-runes').draggable();
    $('.skills-inner').sortable({
      placeholder: 'placehold',
      revert: 'true',
      items: 'img',
      tolerance: 'pointer',
      deactivate: function(event, ui) {
        var saves;
        saves = $(ui.item).siblings().andSelf();
        localService = angular.element('html').injector().get('localService');
        $(saves).each(function() {
          var item;
          item = $('.image img').attr('id') + 'Skill' + $(this).index();
          try {
            localService.set(item, $(this).attr('src'));
          } catch (error) {
            alert("Сохранить в локальное хранилище не удалось: " + error);
          }
          return null;
        });
        return null;
      }
    }).disableSelection();
    return console.log('action');
  });
  $scope.markActiveClass = function(key) {
    if ($routeParams.name === key) {
      return 'ui-tabs-active ui-state-active';
    }
  };
  $scope.resetBuilds = function() {
    return localService.reset();
  };
  $scope.showItemsBlock = function($event) {
    $scope.selectedItem = $event.target;
    $scope.visibleInnerItems = !$scope.visibleInnerItems;
    return null;
  };
  $scope.showSpellsBlock = function($event) {
    $scope.selectedSpell = $event.target;
    $scope.visibleInnerSpells = !$scope.visibleInnerSpells;
    return null;
  };
  $scope.showRunesBlock = function($event) {
    $scope.selectedRune = $event.target;
    $scope.visibleInnerRunes = !$scope.visibleInnerRunes;
    return null;
  };
  $scope.hideItemsBlock = function() {
    $scope.visibleInnerItems = !$scope.visibleInnerItems;
    return null;
  };
  $scope.hideSpellsBlock = function() {
    $scope.visibleInnerSpells = !$scope.visibleInnerSpells;
    return null;
  };
  $scope.hideRunesBlock = function() {
    $scope.visibleInnerRunes = !$scope.visibleInnerRunes;
    return null;
  };
  $scope.addItemInBuild = function(item, $event) {
    var target;
    target = $event.target;
    $('.inner-items > img').css('opacity', '1');
    $(target).css('opacity', '0.3');
    $($scope.selectedItem).attr('src', item);
    item = $('.image img').attr('id') + 'Item' + $($scope.selectedItem).index();
    try {
      localService.set(item, $(target).attr('ng-src'));
      $scope.hideItemsBlock();
    } catch (e) {
      alert("Сохранить в локальное хранилище не удалось: " + e);
    }
    $timeout(function() {
      return Tooltips.items();
    }, 100);
    return null;
  };
  $scope.addSpellInBuild = function(spell, $event) {
    var target;
    target = $event.target;
    $($scope.selectedSpell).attr('src', spell);
    spell = $('.image img').attr('id') + 'Spell' + $($scope.selectedSpell).index();
    try {
      localService.set(spell, $(target).attr('ng-src'));
      $scope.hideSpellsBlock();
    } catch (e) {
      alert("Сохранить в локальное хранилище не удалось: " + e);
    }
    $timeout(function() {
      return Tooltips.spells();
    }, 100);
    return null;
  };
  $scope.addRuneInBuild = function(rune, $event) {
    var clonedEl, cloner, target;
    target = $event.target;
    $($scope.selectedRune).attr('ng-src', rune);
    rune = $('.image img').attr('id') + 'Rune' + $($scope.selectedRune).index();
    try {
      localService.set(rune, $(target).attr('ng-src'));
      $scope.hideRunesBlock();
    } catch (e) {
      alert("Сохранить в локальное хранилище не удалось: " + e);
    }
    cloner = $('.runes > div > div').clone();
    $('.runes > div > div').remove();
    clonedEl = $compile(cloner)($scope);
    $('.runes > div').append(clonedEl);
    return null;
  };
  $scope.offensiveCount = function(offensive) {
    return _.reduce(offensive, function(i, k) {
      return (+i) + (+k);
    });
  };
  $scope.defensiveCount = function(defensive) {
    return _.reduce(defensive, function(i, k) {
      return (+i) + (+k);
    });
  };
  $scope.utilityCount = function(utility) {
    return _.reduce(utility, function(i, k) {
      return (+i) + (+k);
    });
  };
  $scope.resetMasteries = function() {
    $scope.offensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.defensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.utility = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.doMasteriesCount();
    $scope.isCanSave = true;
    return null;
  };
  $scope.doMasteriesCount = function() {
    $scope.masteriesCount = $scope.offensiveCount($scope.offensive) + $scope.defensiveCount($scope.defensive) + $scope.utilityCount($scope.utility);
    return $scope.masteriesCount;
  };
  $scope.saveMasteries = function() {
    $('table p > span:first-child').each(function() {
      var item;
      item = $('.image img').attr('id') + $(this).attr('id');
      try {
        localService.set(item, $(this).text());
      } catch (error) {
        alert("Сохранить в локальное хранилище не удалось: " + error);
      }
      $scope.isCanSave = false;
      return null;
    });
    return null;
  };
  $scope.offensiveUp = function($event, i, max) {
    $scope.doMasteriesCount();
    if ($scope.offensive[i] < max && $scope.masteriesCount <= 29 && $scope.isCanSave) {
      $scope.offensive[i] += 1;
    }
    return null;
  };
  $scope.defensiveUp = function($event, i, max) {
    $scope.doMasteriesCount();
    if ($scope.defensive[i] < max && $scope.masteriesCount <= 29 && $scope.isCanSave) {
      $scope.defensive[i] += 1;
    }
    return null;
  };
  $scope.utilityUp = function($event, i, max) {
    $scope.doMasteriesCount();
    if ($scope.utility[i] < max && $scope.masteriesCount <= 29 && $scope.isCanSave) {
      $scope.utility[i] += 1;
    }
    return null;
  };
  return null;
});
