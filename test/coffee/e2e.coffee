describe 'LOL application E2E tests', ->

    describe 'Default route', ->
        beforeEach ->
        	browser().navigateTo '../index.html'
        it 'should automatically redirect to /Ahri when location hash/fragment is empty',  ->
        	expect(browser().location().url()).toBe("/Ahri")


    describe 'Route view render', ->
        beforeEach ->
            browser().navigateTo '../index.html'
            browser().navigateTo '#/Akali'
        it 'should render Route view-name when user navigates to /view-name', ->
            element('.image img').query (selectedElements, done) ->
                expect(browser().location().url()).toBe '/' + selectedElements.attr('id')
                done()