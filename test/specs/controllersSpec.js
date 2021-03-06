// Generated by CoffeeScript 1.6.2
describe('LOL MainCtrl', function() {
  var ctrl, localService, scope, _ref;

  _ref = [null, null, null], ctrl = _ref[0], scope = _ref[1], localService = _ref[2];
  beforeEach(module('lol'));
  beforeEach(inject(function($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {
      $scope: scope
    });
    return localService = $injector.get('localService');
  }));
  it('inner items should be hidden by default', function() {
    return expect(scope.visibleInnerItems).toBeFalsy();
  });
  it('inner spells should be hidden by default', function() {
    return expect(scope.visibleInnerSpells).toBeFalsy();
  });
  it('inner runes should be hidden by default', function() {
    return expect(scope.visibleInnerRunes).toBeFalsy();
  });
  it('by default save masteries is disabled', function() {
    return expect(scope.isCanSave).toBeFalsy();
  });
  it('default route should be Ahri', function() {
    return expect(scope.name).toBe('Ahri');
  });
  it('offset scroll is undefined by default', function() {
    return expect(scope.offsetScroll).toBeUndefined();
  });
  it('should be marked jquery-ui class active link', function() {
    return expect(scope.markActiveClass()).toBe('ui-tabs-active ui-state-active');
  });
  it('should be reset all builds as request to localService', function() {
    spyOn(localService, 'reset');
    scope.resetBuilds();
    return expect(localService.reset).toHaveBeenCalled();
  });
  it('should be hide items, spells, runes block', function() {
    scope.hideItemsBlock();
    expect(scope.visibleInnerItems).toBeFalsy();
    scope.hideSpellsBlock();
    expect(scope.visibleInnerSpells).toBeFalsy();
    scope.hideRunesBlock();
    return expect(scope.visibleInnerRunes).toBeFalsy();
  });
  it('should be summary offensive', function() {
    spyOn(_, 'reduce');
    scope.offensiveCount(scope.offensive);
    return expect(_.reduce).toHaveBeenCalledWith(scope.offensive, jasmine.any(Function));
  });
  it('should be summary defensive', function() {
    spyOn(_, 'reduce');
    scope.defensiveCount(scope.defensive);
    return expect(_.reduce).toHaveBeenCalledWith(scope.defensive, jasmine.any(Function));
  });
  it('should be summary utility', function() {
    spyOn(_, 'reduce');
    scope.utilityCount(scope.utility);
    return expect(_.reduce).toHaveBeenCalledWith(scope.utility, jasmine.any(Function));
  });
  it('should be summare all masteries', function() {
    return expect(scope.doMasteriesCount()).toBe(scope.masteriesCount);
  });
  it('should be save all masteries', function() {
    spyOn(localService, 'set');
    scope.saveMasteries();
    return expect(localService.set).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Number));
  });
  it('should be reset masteries', function() {
    scope.resetMasteries();
    expect(scope.doMasteriesCount()).toBe(0);
    return expect(scope.isCanSave).toBeTruthy();
  });
  it('should be up offensive', function() {
    scope.resetMasteries();
    scope.offensiveUp(null, 0, 1);
    return expect(scope.doMasteriesCount()).toBeGreaterThan(0);
  });
  it('should be up defensive', function() {
    scope.resetMasteries();
    scope.defensiveUp(null, 0, 1);
    return expect(scope.doMasteriesCount()).toBeGreaterThan(0);
  });
  return it('should be up utility', function() {
    scope.resetMasteries();
    scope.utilityUp(null, 0, 1);
    return expect(scope.doMasteriesCount()).toBeGreaterThan(0);
  });
});
