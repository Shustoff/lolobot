// Generated by CoffeeScript 1.6.1

LOL.filter('initItems', function(localService) {
  return function(items) {
    var i, locItem, numberItem, _i;
    numberItem = 0;
    for (i = _i = 0; _i < 7; i = ++_i) {
      locItem = $('.image img').attr('id') + 'Item' + numberItem;
      if (localService.get(locItem) != null) {
        items[i] = localService.get(locItem);
      }
      numberItem++;
    }
    return items;
  };
});

LOL.filter('initSpells', function(localService) {
  return function(spells) {
    var i, locSpell, numberSpell, _i;
    numberSpell = 0;
    for (i = _i = 0; _i < 2; i = ++_i) {
      locSpell = $('.image img').attr('id') + 'Spell' + numberSpell;
      if (localService.get(locSpell) != null) {
        spells[i] = localService.get(locSpell);
      }
      numberSpell++;
    }
    return spells;
  };
});

LOL.filter('existsSpells', function(localService) {
  return function(spells) {
    var allSpells, firstSpell, key, secondSpell, value;
    firstSpell = $('.spells img:first').attr('src');
    secondSpell = $('.spells img:last').attr('src');
    allSpells = {};
    for (key in spells) {
      value = spells[key];
      if ((value === firstSpell) || (value === secondSpell)) {
        continue;
      }
      allSpells[key] = value;
    }
    return allSpells;
  };
});

LOL.filter('initSkills', function(localService) {
  return function(skills) {
    var i, locSkill, numberSkill, _i;
    numberSkill = 0;
    for (i = _i = 0; _i < 18; i = ++_i) {
      locSkill = $('.image img').attr('id') + 'Skill' + numberSkill;
      if (localService.get(locSkill) != null) {
        skills[i] = localService.get(locSkill);
      }
      numberSkill++;
    }
    return skills;
  };
});

LOL.filter('initOffensive', function(localService) {
  return function(offensive) {
    var arg, i, locOff, m, numberMaster, _i, _j, _ref, _results;
    numberMaster = 1;
    $scope.offensiveUp = 0;
    for (m = _i = 0; _i < 17; m = ++_i) {
      locOff = $($scope.image).attr('id' + numberMaster);
      if ($resource.localService.get(locOff) != null) {
        offensive[m] = $resource.localService.get(locOff);
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

LOL.filter('initDefensive', function(localService) {
  return function(defensive) {
    var arg, i, locOff, m, numberMaster, _i, _j, _ref, _results;
    numberMaster = 18;
    $scope.defensiveUp = 0;
    for (m = _i = 0; _i < 16; m = ++_i) {
      locOff = $($scope.image).attr('id') + numberMaster;
      if ($resource.localService.get(locOff) != null) {
        defensive[m] = $resource.localService.get(locOff);
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

LOL.filter('initUtility', function(localService) {
  return function(utility) {
    var arg, i, locOff, m, numberMaster, _i, _j, _ref, _results;
    numberMaster = 34;
    $scope.utilityUp = 0;
    for (m = _i = 0; _i < 16; m = ++_i) {
      locOff = $($scope.image).attr('id') + numberMaster;
      if ($resource.localService.get(locOff) != null) {
        utility[m] = $resource.localService.get(locOff);
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

LOL.filter('initRunes', function(localService) {
  return function(runes) {
    var i, locRune, numberRune, _i, _results;
    numberRune = 0;
    _results = [];
    for (i = _i = 0; _i < 4; i = ++_i) {
      locRune = $($scope.image).attr('id') + 'Rune' + numberRune;
      if ($resource.localService.get(locRune) != null) {
        runes[i] = $resource.localService.get(locRune);
      }
      _results.push(numberRune++);
    }
    return _results;
  };
});
