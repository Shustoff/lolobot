// Generated by CoffeeScript 1.6.1

LOL.filter('initItems', function(localService) {
  return function(items, name) {
    var i, locItem, numberItem, _i;
    numberItem = 0;
    for (i = _i = 0; _i < 7; i = ++_i) {
      locItem = name + 'Item' + numberItem;
      if (localService.get(locItem) != null) {
        items[i] = localService.get(locItem);
      }
      numberItem++;
    }
    return items;
  };
});

LOL.filter('initSpells', function(localService) {
  return function(spells, name) {
    var i, locSpell, numberSpell, _i;
    numberSpell = 0;
    for (i = _i = 0; _i < 2; i = ++_i) {
      locSpell = name + 'Spell' + numberSpell;
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

LOL.filter('existsRunes', function($rootScope, $timeout, localService) {
  return function(runes, typeRune) {
    var allRunes, key, reg, src, value;
    allRunes = {};
    switch (typeRune) {
      case 'mark':
        reg = /MO/gi;
        src = $('.mark').attr('ng-src');
        break;
      case 'seal':
        reg = /SO/gi;
        src = $('.seal').attr('ng-src');
        break;
      case 'glyph':
        reg = /GO/gi;
        src = $('.glyph').attr('ng-src');
        break;
      case 'quint':
        reg = /QO/gi;
        src = $('.quint').attr('ng-src');
        break;
      default:
        reg = /MO/gi;
    }
    for (key in runes) {
      value = runes[key];
      if ((!reg.test(value)) || (value === src)) {
        continue;
      }
      allRunes[key] = value;
    }
    return allRunes;
  };
});

LOL.filter('initSkills', function(localService, $routeParams) {
  return function(skills, name) {
    var i, locSkill, numberSkill, _i;
    numberSkill = 0;
    for (i = _i = 0; _i < 18; i = ++_i) {
      locSkill = name + 'Skill' + numberSkill;
      if (localService.get(locSkill) != null) {
        skills[i] = localService.get(locSkill);
      }
      numberSkill++;
    }
    return skills;
  };
});

LOL.filter('initOffensive', function(localService, $timeout) {
  return function(offensive, name) {
    var i, locOff, numberMaster, _i;
    numberMaster = 1;
    for (i = _i = 0; _i < 17; i = ++_i) {
      locOff = name + numberMaster;
      if (localService.get(locOff) != null) {
        offensive[i] = localService.get(locOff);
      }
      numberMaster++;
    }
    return offensive;
  };
});

LOL.filter('initDefensive', function(localService) {
  return function(defensive, name) {
    var i, locOff, numberMaster, _i;
    numberMaster = 18;
    for (i = _i = 0; _i < 16; i = ++_i) {
      locOff = name + numberMaster;
      if (localService.get(locOff) != null) {
        defensive[i] = localService.get(locOff);
      }
      numberMaster++;
    }
    return defensive;
  };
});

LOL.filter('initUtility', function(localService) {
  return function(utility, name) {
    var i, locOff, numberMaster, _i;
    numberMaster = 34;
    for (i = _i = 0; _i < 16; i = ++_i) {
      locOff = name + numberMaster;
      if (localService.get(locOff) != null) {
        utility[i] = localService.get(locOff);
      }
      numberMaster++;
    }
    return utility;
  };
});

LOL.filter('initRunes', function(localService) {
  return function(runes, name) {
    var i, locRune, numberRune, _i;
    numberRune = 0;
    for (i = _i = 0; _i < 4; i = ++_i) {
      locRune = name + 'Rune' + numberRune;
      if (localService.get(locRune) != null) {
        runes[i] = localService.get(locRune);
      }
      numberRune++;
    }
    return runes;
  };
});

LOL.filter('maxTo', function() {
  return function(input, num) {
    if (input >= num) {
      return num;
    } else {
      return input;
    }
  };
});
