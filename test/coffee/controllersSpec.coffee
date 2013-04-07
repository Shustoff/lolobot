describe 'MainCtrl', ->
  [ctrl, scope] = [null,null]

  beforeEach module 'lol'

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ctrl = $controller 'MainCtrl', $scope: scope

  it 'modal should be hidden', ->
    expect(scope.visibleModal).toBeFalsy()
