// Generated by CoffeeScript 1.6.1

LOL.controller('MainCtrl', function($scope, localService) {
  $scope.visibleModal = false;
  $scope.visibleInnerItems = false;
  $scope.visibleInnerSpells = false;
  $scope.isCanSave = false;
  $scope.isNew = true;
  $scope.Masteries = Masteries;
  $scope.AllItems = Items;
  $scope.AllSpells = Spells;
  $scope.resetBuilds = function() {
    return localService.reset();
  };
  $scope.initTooltips = function() {
    Tooltips.items();
    Tooltips.runes();
    Tooltips.spells();
    Tooltips.masteries();
    $("table p").each(function() {
      var value;
      value = /0/;
      if (!$(this).text().search(value)) {
        $(this).addClass('disabled');
      }
      return null;
    });
    return null;
  };
  $scope.showItemsBlock = function($event) {
    $scope.selectedItem = $event.target;
    $scope.visibleInnerItems = !$scope.visibleInnerItems;
    Tooltips.items();
    return null;
  };
  $scope.showSpellsBlock = function($event) {
    $scope.selectedSpell = $event.target;
    $scope.visibleInnerSpells = !$scope.visibleInnerSpells;
    Tooltips.spells();
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
    return null;
  };
  $scope.offensiveCount = function(offensive) {
    return _.reduce(offensive, function(i, k) {
      return i + k;
    });
  };
  $scope.defensiveCount = function(defensive) {
    return _.reduce(defensive, function(i, k) {
      return i + k;
    });
  };
  $scope.utilityCount = function(utility) {
    return _.reduce(utility, function(i, k) {
      return i + k;
    });
  };
  $scope.resetMasteries = function(offensive, defensive, utility) {
    $scope.offensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.defensive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.utility = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.upAllMasteries = 0;
    $scope.isNew = false;
    $("table p > span:first-child").each(function() {
      $('table p').addClass('disabled');
      $('table .first-off p').removeClass('disabled');
      $scope.isCanSave = true;
      $('.btn-success').text('Сохранить мастерис');
      return null;
    });
    return null;
  };
  $scope.saveMasteries = function() {
    $('.arguments').each(function() {
      var item;
      item = $('.image img').attr('id');
      item += $(this).attr('id');
      try {
        localService.set(item, $(this).text());
      } catch (e) {
        alert("Сохранить в локальное хранилище не удалось: " + e);
      }
      $scope.isCanSave = false;
      $('.btn-success').text('Сохранено успешно');
      return null;
    });
    return null;
  };
  $scope.checkMasteries = function() {
    $scope.upAllMasteries = $scope.offensiveCount($scope.offensive) + $scope.defensiveCount($scope.defensive) + $scope.utilityCount($scope.utility);
    if ($scope.upAllMasteries >= 30) {
      $("table p").each(function() {
        var value;
        value = /0/;
        if (!$(this).text().search(value)) {
          return $(this).addClass('disabled');
        }
      });
      $('table img').attr('ng-click', 'false');
    }
    return null;
  };
  $scope.offensiveUp = function($event, i, max) {
    var target;
    target = $event.target;
    $scope.checkMasteries();
    if ($scope.offensive[i] < max && $scope.upAllMasteries < 30) {
      $scope.offensive[i] += 1;
    }
    return null;
  };
  return null;
});

LOL.controller('AhriCtrl', function($scope) {
  $scope.stats = Characters.ahri.stats;
  $scope.image = Images.ahri;
  $scope.items = Characters.ahri.items;
  $scope.spells = Characters.ahri.spells;
  $scope.skills = Characters.ahri.skills;
  $scope.$parent.offensive = Characters.ahri.offensive;
  $scope.$parent.defensive = Characters.ahri.defensive;
  $scope.$parent.utility = Characters.ahri.utility;
  $scope.runes = Characters.ahri.runes;
  $scope.initCharacterTooltip = function() {
    return Tooltips.Ahri();
  };
  return null;
});
