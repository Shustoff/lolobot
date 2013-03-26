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
    var locOff, m, numberMaster, _i;
    numberMaster = 1;
    for (m = _i = 0; _i < 17; m = ++_i) {
      locOff = $('.image img').attr('id' + numberMaster);
      if (localService.get(locOff) != null) {
        offensive[m] = localService.get(locOff);
      }
      numberMaster++;
    }
    return offensive;
  };
});

LOL.filter('initDefensive', function(localService) {
  return function(defensive) {
    var locOff, m, numberMaster, _i;
    numberMaster = 18;
    for (m = _i = 0; _i < 16; m = ++_i) {
      locOff = $('.image img').attr('id') + numberMaster;
      if (localService.get(locOff) != null) {
        defensive[m] = localService.get(locOff);
      }
      numberMaster++;
    }
    return defensive;
  };
});

LOL.filter('initUtility', function(localService) {
  return function(utility) {
    var locOff, m, numberMaster, _i;
    numberMaster = 34;
    for (m = _i = 0; _i < 16; m = ++_i) {
      locOff = $('.image img').attr('id') + numberMaster;
      if (localService.get(locOff) != null) {
        utility[m] = localService.get(locOff);
      }
      numberMaster++;
    }
    return utility;
  };
});

LOL.filter('initRunes', function(localService) {
  return function(runes) {
    var i, locRune, numberRune, _i;
    numberRune = 0;
    for (i = _i = 0; _i < 4; i = ++_i) {
      locRune = $('.image img').attr('id') + 'Rune' + numberRune;
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
    }
    return input;
  };
});
