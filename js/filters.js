// Generated by CoffeeScript 1.3.3
(function() {

  LOL.filter('initItems', function($scope, localService) {
    return function(items) {
      var i, locItem, numberItem, _i, _results;
      numberItem = 1;
      _results = [];
      for (i = _i = 2; _i < 8; i = ++_i) {
        locItem = $($scope.image).attr('id') + 'Item' + numberItem;
        if (localService.get(locItem) != null) {
          items[i] = localService.get(locItem);
        }
        _results.push(numberItem++);
      }
      return _results;
    };
  });

  LOL.filter('initSpells', function($scope, localService) {
    return function(spells) {
      var i, locSpell, numberSpell, _i, _results;
      numberSpell = 1;
      _results = [];
      for (i = _i = 0; _i < 2; i = ++_i) {
        locSpell = $($scope.image).attr('id') + 'Spell' + numberSpell;
        if (localService.get(locSpell) != null) {
          spells[i] = localService.get(locSpell);
        }
        _results.push(numberSpell++);
      }
      return _results;
    };
  });

  LOL.filter('initSkills', function($scope, localService) {
    return function(skills) {
      var i, locSkill, numberSkill, _i, _results;
      numberSkill = 1;
      _results = [];
      for (i = _i = 2; _i < 20; i = ++_i) {
        locSkill = $($scope.image).attr('id') + 'Skill' + numberSkill;
        if (localService.get(locSkill) != null) {
          skills[i] = localService.get(locSkill);
        }
        _results.push(numberSkill++);
      }
      return _results;
    };
  });

  LOL.filter('initOffensive', function($scope, localService) {
    return function(offensive) {
      var arg, i, locOff, m, numberMaster, _i, _j, _ref, _results;
      numberMaster = 1;
      $scope.offensiveUp = 0;
      for (m = _i = 0; _i < 17; m = ++_i) {
        locOff = $($scope.image).attr('id' + numberMaster);
        if (localService.get(locOff) != null) {
          offensive[m] = localService.get(locOff);
        }
        numberMaster++;
      }
      _results = [];
      for (i = _j = 0, _ref = offensive.length; 0 <= _ref ? _j < _ref : _j > _ref; i = 0 <= _ref ? ++_j : --_j) {
        arg = parseInt(offensive[i]);
        _results.push($scope.offensiveUp += arg);
      }
      return _results;
    };
  });

  LOL.filter('initDefensive', function($scope, localService) {
    return function(defensive) {
      var arg, i, locOff, m, numberMaster, _i, _j, _ref, _results;
      numberMaster = 18;
      $scope.defensiveUp = 0;
      for (m = _i = 0; _i < 16; m = ++_i) {
        locOff = $($scope.image).attr('id') + numberMaster;
        if (localService.get(locOff) != null) {
          defensive[m] = localService.get(locOff);
        }
        numberMaster++;
      }
      _results = [];
      for (i = _j = 0, _ref = defensive.length; 0 <= _ref ? _j < _ref : _j > _ref; i = 0 <= _ref ? ++_j : --_j) {
        arg = parseInt(defensive[i]);
        _results.push($scope.defensiveUp += arg);
      }
      return _results;
    };
  });

  LOL.filter('initUtility', function($scope, localService) {
    return function(utility) {
      var arg, i, locOff, m, numberMaster, _i, _j, _ref, _results;
      numberMaster = 34;
      $scope.utilityUp = 0;
      for (m = _i = 0; _i < 16; m = ++_i) {
        locOff = $($scope.image).attr('id') + numberMaster;
        if (localService.get(locOff) != null) {
          utility[m] = localService.get(locOff);
        }
        numberMaster++;
      }
      _results = [];
      for (i = _j = 0, _ref = utility.length; 0 <= _ref ? _j < _ref : _j > _ref; i = 0 <= _ref ? ++_j : --_j) {
        arg = parseInt(utility[i]);
        _results.push($scope.utilityUp += arg);
      }
      return _results;
    };
  });

  LOL.filter('initRunes', function($scope, localService) {
    return function(runes) {
      var i, locRune, numberRune, _i, _results;
      numberRune = 1;
      _results = [];
      for (i = _i = 0; _i < 4; i = ++_i) {
        locRune = $($scope.image).attr('id') + 'Rune' + numberRune;
        if (localService.get(locRune) != null) {
          runes[i] = localService.get(locRune);
        }
        _results.push(numberRune++);
      }
      return _results;
    };
  });

}).call(this);
