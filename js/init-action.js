/*
// Добавление предметов
function initItemsAction() {

    // Вывод всех предметов в плавающий блок
    _.each(Items, function(num){
        $('.inner-items').append("<img src='" + num + "' />");
    });

    // Биндим клик на предметы персонажа
    $('.items').on('click', 'img', function(){
        itemChar = this;
        $(this).css('boxShadow', '0px 0px 10px #fff');
        $('.inner-items').css('display', 'block');
        initTooltipItems();
    });

    // Логика предметов в плавающем блоке
    $('.inner-items img').each(function(){
        $(this).click(function(){
            $('.inner-items > img').css('opacity', '1');
            var clon = $(this).clone();
            $(itemChar).replaceWith(clon);
            itemChar = clon;
            $(this).css('opacity', '0.3');

            // Сохраняем адрес изображения в localStorage
            var image = $(clon)[0];
            $(image).load(function() {
                var item = $('.image img').attr('id');
                item += 'Item';
                item += $(this).index();
                try {
                    lSet(item, $(this).attr('src'));
                }
                catch (e) {
                    alert("Сохранить в локальное хранилище не удалось: " + e);
                }
            });
        });
    });

    // Кнопка "закрыть" в плавающем блоке
    $('.inner-items span').click(function(){
        $('.inner-items').hide();
        initTooltipItems();
    });

    // Делаем плавающее окошко - перетаскиваемым
    $('.inner-items').draggable();
}*/

/*// Добавление спеллов
function initSpellsAction() {

    //Вывод всех спеллов в плавающий блок
    _.each(Spells, function(num){
        $('.inner-spells').append("<img src='" + num + "' />");
    });

    // Устанавливаем класс для каждого спелла
    $('img[src="img/spells/flash.png"]').addClass('flash');
    $('img[src="img/spells/ignite.png"]').addClass('ignite');
    $('img[src="img/spells/clairvoyance.png"]').addClass('clairvoyance');
    $('img[src="img/spells/clarity.png"]').addClass('clarity');
    $('img[src="img/spells/cleanse.png"]').addClass('cleanse');
    $('img[src="img/spells/exhaust.png"]').addClass('exhaust');
    $('img[src="img/spells/fortify.png"]').addClass('fortify');
    $('img[src="img/spells/garrison.png"]').addClass('garrison');
    $('img[src="img/spells/ghost.png"]').addClass('ghost');
    $('img[src="img/spells/heal.png"]').addClass('heal');
    $('img[src="img/spells/promote.png"]').addClass('promote');
    $('img[src="img/spells/rally.png"]').addClass('rally');
    $('img[src="img/spells/revive.png"]').addClass('revive');
    $('img[src="img/spells/smite.png"]').addClass('smite');
    $('img[src="img/spells/surge.png"]').addClass('surge');
    $('img[src="img/spells/teleport.png"]').addClass('teleport');

    // Биндим клик на спеллы персонажа
    $('.spells').on('click', 'img', function(){
        spellChar = this;
        $('.inner-spells').css('display', 'block');
        initTooltipSpells();
    });

    // Спеллы в плавающем блоке
    $('.inner-spells img').each(function(){
        $(this).click(function(){
            var html = $(this).attr('class'),
                classs = '.' + html,
                filtr = $('.spells img').filter(classs);

            // Разрешаем добавлять только те спеллы которых нету на странице.
            if (filtr[0] !== undefined)
            {
                $('.inner-spells > img').css('display', 'inline');
                $(this).css('display', 'none')
            } else {
                $('.inner-spells > img').css('display', 'inline');
                var clon = $(this).clone();
                $(spellChar).replaceWith(clon);
                spellChar = clon;
                $(this).css('display', 'none');
            }

        // Сохраняем изображение в localStorage
        var image = $(clon)[0];
        $(image).load(function () {
            var spell = $('.image img').attr('id');
            spell += 'Spell';
            spell += $(this).index() + 1;
            try {
                lSet(spell, $(this).attr('src'));
            }
            catch (e) {
                alert("Сохранить в локальное хранилище не удалось: " + e);
            }
        });
        });
    });

    // Кнопка "закрыть" в плавающем блоке
    $('.inner-spells span').click(function(){
        $('.inner-spells').hide();
        initTooltipSpells();
    });

    // Делаем плавающее окошко перетаскиваемым
    $('.inner-spells').draggable();
}*/

/*// Добавление скиллов
function initSkillsAction() {

    // Добавляем скиллам возможность сортировки
    $('.skills-inner').sortable({
        placeholder: 'placehold',
        revert: 'true',
        items: 'img',
        tolerance: 'pointer',
        deactivate: function(event, ui) {
            var saves = $(ui.item).siblings().andSelf();
            $(saves).each(function(){
                var item = $('.image img').attr('id');
                item += 'Skill';
                item += $(this).index() + 1;
                try {
                    lSet(item, $(this).attr('src'));
                }
                catch (e) {
                    alert("Сохранить в локальное хранилище не удалось: " + e);
                }
            });
        }
    }).disableSelection();
}
*/

/*
// Сброс мастерис
function resetMaster() {
    $("table p > span:first-child").each(function(){
        var text = $(this).text();
        text = text.substring(1, 5);
        $(this).html(text).prepend(0);
        $('table p').addClass('disabled');
        $('table .first-off p').removeClass('disabled');
        $('strong.amount').html('0');
        $('table img').unbind('click');
        $('.btn-success').removeClass('disabled').text('Сохранить мастерис');
    });
}
*/

/*
// Проверка количества прокачанных мастерис
function initMasterAction() {
    var amount1 = parseInt($('table.offensive .amount').text());
    var amount2 = parseInt($('table.defense .amount').text());
    var amount3 = parseInt($('table.utility .amount').text());
    var amountSum = amount1 + amount2 + amount3;
    if (amountSum >= 30) {
            $('table img').unbind('click');
    }
}

// Сохраняем мастерис
function saveMasteries() {
    $('.arguments').each(function(){
        var item = $('.image img').attr('id');
        item += $(this).attr('id');
        try {
            lSet(item, $(this).text());
        }
        catch (e) {
            alert("Сохранить в локальное хранилище не удалось: " + e);
        }
        $('.btn-success').addClass('disabled').text('Сохранено успешно');
    });
}
*/

// Добавление рун
function initRunesAction() {

    // Добавляем все руны в плавающее окошко
    _.each(Runes, function(num){
        $('.inner-runes').append("<img src='" + num + "' />");
    });

    // Устанавливаем классы для каждого типа рун (всего 4).
    $('img[src*="MO"]').addClass('mark');
    $('img[src*="SO"]').addClass('seal');
    $('img[src*="GO"]').addClass('glyph');
    $('img[src*="QO"]').addClass('quint');

    // Руны на странице
    $('.runes').on('click', 'img', function(){
        runeChar = this;
        var class1 = $(this).attr('class');
        // Выводим руны только одного класса для каждой ячейки.
        $('.inner-runes img').each(function(){
            $(this).css('display', 'inline');
            var class2 = $(this).attr('class');
            if (class1 != class2) {
                $(this).css('display', 'none');
            }
        });
        $('.inner-runes').css('display', 'block');
        initTooltipRunes();
    });

    // Руны в плавающем окошке
    $('.inner-runes img').each(function(){
        $(this).click(function(){
            var clon = $(this).clone();
            $(runeChar).replaceWith(clon);
            runeChar = clon;
            // Сохраняем изображение в localStorage
            var image = $(clon)[0];
            $(image).load(function () {
                var item = $('.image img').attr('id');
                item += 'Rune';
                item += $(this).index();
                try {
                    lSet(item, $(this).attr('src'));
                }
                catch (e) {
                    alert("Сохранить в локальное хранилище не удалось: " + e);
                }
            });
        });
    });

    // Кнопка закрыть для всплывающего окошка
    $('.inner-runes span').click(function(){
        $('.inner-runes').hide();
        initTooltipRunes();
    });

    // Добавляем возможность перетаскивания всплывающего окошка
    $('.inner-runes').draggable();
}
