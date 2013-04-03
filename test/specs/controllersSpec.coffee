describe 'Controllers', ->

  describe 'MainCtrl', ->
    {scope, ctrl} = [null, null]

    beforeEach angular.module 'lol'
    
    beforeEach inject ($rootScope, $controller) ->
      scope = $rootScope.$new()
      $controller 'MainCtrl', $scope: scope

    it 'should be default route name is Ahri', ->
      expect(scope.name).toEqual('Ahri')