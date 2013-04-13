describe 'LOL End-to-End tests', ->
    beforeEach ->
        browser().navigateTo '../index.html'

    describe 'Default route redirect', ->
        it 'should automatically redirect to /Ahri when location hash/fragment is empty',  ->
        	expect(browser().location().url()).toBe "/Ahri"

    describe 'Route view render', ->
        beforeEach ->
            browser().navigateTo '#/Akali'
        it 'should render Route view-name when user navigates to /view-name', ->
            element('.image img').query (selectedElements, done) ->
                expect(browser().location().url()).toBe '/' + selectedElements.attr 'id'
                done()

    describe 'Character links tests', ->
        it 'should change browser URL and render new character', ->
            element('li.ui-state-default:nth-child(2) a').click()
            expect(browser().location().url()).toBe '/Akali'
            expect(element('.image img').attr 'id' ).toBe 'Akali'

        it 'should be render 99 character links', ->
            expect(repeater('.ui-tabs-nav li').count()).toEqual 99

    describe 'Show and hide modal reset dialog', ->
        it 'should be show popup with reset suggestion', ->
            element('.icon-trash').click()
            expect(element('#myModal').css 'display' ).toBe 'block'
        it 'should be hide popup with reset suggestion', ->
            element('.btn.cancel').click()
            expect(element('#myModal').css 'display' ).toBe 'none'

    describe 'Items tests', ->
        it 'should be show items container on click item and close container on click close', ->
            element('.items img:nth-child(1)').click()
            expect(element('.inner-items').css 'display' ).toBe 'block'
            element('.inner-items span').click()
            expect(element('.inner-items').css 'display' ).toBe 'none'

        it 'should be render 130 items in items container block', ->
            expect(repeater('.inner-items img').count()).toEqual 130

        it 'should be add item in item-build', ->
            element('.items img:nth-child(1)').click()
            element('.inner-items img:nth-child(3)').click()
            expect(element('.items img:nth-child(1)').attr 'src').toEqual 'img/items/abyssal-scepter.gif'

    describe 'Spells tests', ->
        it 'should be show spells container on click spell and close container on click close', ->
            element('.spells img:nth-child(1)').click()
            expect(element('.inner-spells').css 'display' ).toBe 'block'
            element('.inner-spells span').click()
            expect(element('.inner-spells').css 'display' ).toBe 'none'

        it 'should be render 14 spells in spells container block', ->
            expect(repeater('.inner-spells img').count()).toEqual 14

        it 'should be add spell in spell-build', ->
            element('.spells img:nth-child(1)').click()
            element('.inner-spells img:nth-child(3)').query (selectedElements, done) ->
                selectedElements.click()
                expect(element('.spells img:nth-child(1)').attr 'src' ).toEqual selectedElements.attr 'src'
                done()

        it 'dont show render exist spell in spell container', ->
            element('.spells img:nth-child(1)').click()
            element('.inner-spells img').query (selectedElements, done) ->
                expect(element('.spells img:nth-child(1)').attr 'src' ).not().toEqual selectedElements.attr 'src'
                done()

    describe 'Skills test', ->
        it 'should render 18 skills in build', ->
             expect(repeater('.skills-inner img').count(18)).toBeTruthy()

    describe 'Masteries test', ->
        it 'should be 30 masteries by default', ->
            expect(binding('doMasteriesCount()')).toEqual('30')

        it 'button save masteries should be disabled by default', ->
            expect(element('.btn-success').attr('disabled')).toBe('disabled')

        it 'should be 0 masteries after reset', ->
            element('.reset-button').click()
            expect(binding('doMasteriesCount()')).toEqual('0')

        it 'should be +1 masteries after reset masteries', ->
            element('.reset-button').click()
            element('.offensive .first-off img:first').click()
            expect(binding('doMasteriesCount()')).toEqual('1')

        it 'dont should be +1 masteries if masteries count = 30', ->
            element('.offensive .first-off img:first').click()
            expect(binding('doMasteriesCount()')).toEqual('30')

        it 'button save masteries should be enabled if up masteries = 30', ->
            element('.reset-button').click()
            element('.masteries .first-off img').click()
            element('.masteries .first-off img').click()
            element('.masteries .second-off img').click()
            element('.masteries .second-off img').click()
            expect(element('.btn-success').attr('disabled')).not().toBeDefined()

    describe 'Runes test', ->
        it 'should be show runes container on click rune and close container on click close', ->
            element('.runes img:nth-child(1)').click()
            expect(element('.inner-runes').css 'display' ).toBe 'block'
            element('.inner-runes span').click()
            expect(element('.inner-runes').css 'display' ).toBe 'none'
        it 'should be render 8 mark runes in inner runes block', ->
            element('.runes img.mark').click()
            expect(repeater('.inner-runes img').count()).toEqual(8)
        it 'should be render 7 seal runes in inner runes block', ->
            element('.runes img.seal').click()
            expect(repeater('.inner-runes img').count()).toEqual(7)
        it 'should be render 6 glyph runes in inner runes block', ->
            element('.runes img.glyph').click()
            expect(repeater('.inner-runes img').count()).toEqual(6)
        it 'should be render 10 quint runes in inner runes block', ->
            element('.runes img.quint').click()
            expect(repeater('.inner-runes img').count()).toEqual(10)
        it 'should be add rune in rune-build', ->
            element('.runes img:nth-child(1)').click()
            element('.inner-runes img:nth-child(3)').query (selectedElements, done) ->
                selectedElements.click()
                expect(element('.runes img:nth-child(1)').attr 'src' ).toEqual selectedElements.attr 'src'
                done()
        it 'dont show render exist rune in rune container', ->
            element('.runes img:nth-child(1)').click()
            element('.inner-runes img').query (selectedElements, done) ->
                expect(element('.runes img:nth-child(1)').attr 'src' ).not().toEqual selectedElements.attr 'src'
                done()