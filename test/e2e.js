// Generated by CoffeeScript 1.3.3

describe('LOL application E2E', function() {
  beforeEach(function() {
    return browser().navigateTo('../index.html');
  });
  return it('should automatically redirect to /Ahri when location hash/fragment is empty', function() {
    return expect(browser().location().url()).toBe("/Ahri");
  });
  /*describe 'Akali view', ->
  
    beforeEach ->
      browser().navigateTo '#/Akali'
  
    it 'should render Akali view when user navigates to /Akali', ->
      expect($('.image img').attr('id')).toMatch 'Akali'
  */

});