describe 'service', ->
  beforeEach(angular.module('lol.services'))

  describe 'version', ->
    it 'should return current version', ->
      expect(version).toBeUndefined()
