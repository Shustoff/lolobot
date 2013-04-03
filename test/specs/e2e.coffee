describe 'LOL application E2E', ->

  beforeEach ->
    browser().navigateTo '../index.html'

  it 'should automatically redirect to /Ahri when location hash/fragment is empty',  ->
    expect(browser().location().url()).toBe("/Ahri")



  ###describe 'Akali view', ->

    beforeEach ->
      browser().navigateTo '#/Akali'

    it 'should render Akali view when user navigates to /Akali', ->
      expect($('.image img').attr('id')).toMatch 'Akali'###