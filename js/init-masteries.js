// Реализация логики мастерис
function initMasteries() {

/*    // Реализация логики для 1й таблицы Offensive
    $("table.offensive img").each(function(){
        $(this).click(function(){

            var lvl = $(this).siblings('p').find('.arguments'),
                argument = parseInt($(this).siblings('p').find('.arguments').text()),
                limit = parseInt($(this).siblings('p').find('.limit').text()),
                amount1 = parseInt($('table.offensive .amount').text());

            if (limit > argument) {
                $(lvl).text(argument + 1);
                $('table.offensive .amount').text(amount1 += 1);
            }

            switch (amount1) {
                case 4:
                    $('table.offensive .second-off p').removeClass('disabled');
                    break;
                case 8:
                    $('table.offensive .third-off p').removeClass('disabled');
                    break;
                case 12:
                    $('table.offensive .four-off p').removeClass('disabled');
                    break;
                case 16:
                    $('table.offensive .five-off p').removeClass('disabled');
                    break;
                case 20:
                    $('table.offensive .six-off p').removeClass('disabled');
                    break;
            }

            parseInt($('#5').text()) < 4 ? $('p#9').addClass('disabled') : $('p#9').removeClass('disabled');
            parseInt($('#6').text()) < 4 ? $('p#10').addClass('disabled') : $('p#10').removeClass('disabled');
            parseInt($('#8').text()) < 4 ? $('p#12').addClass('disabled') : $('p#12').removeClass('disabled');

        });
    });*/

/*    // Реализация логики для 2й таблицы Defense
    $("table.defense img").each(function(){
        $(this).click(function() {

            var lvl = $(this).siblings('p').find('.arguments'),
                argument = parseInt($(this).siblings('p').find('.arguments').text()),
                limit = parseInt($(this).siblings('p').find('.limit').text()),
                amount2 = parseInt($('table.defense .amount').text()),
                $skill = $('p#27');

            if (limit > argument) {
                $(lvl).text(argument += 1);
                $('table.defense .amount').text(amount2 += 1);
            }

            switch (amount2) {
                case 4:
                    $('table.defense .second-off p').removeClass('disabled');
                    break;
                case 8:
                    $('table.defense .third-off p').removeClass('disabled');
                    break;
                case 12:
                    $('table.defense .four-off p').removeClass('disabled');
                    break;
                case 16:
                    $('table.defense .five-off p').removeClass('disabled');
                    break;
                case 20:
                    $('table.defense .six-off p').removeClass('disabled');
                    break;
            }

            if ((amount2 < 8))
            {
                $skill.addClass('disabled');
            } else if (parseInt($('#21').text()) < 2) {
                $skill.addClass('disabled');
            } else {
                $skill.removeClass('disabled');
            }
            parseInt($('#22').text()) < 4 ? $('p#25').addClass('disabled') : $('p#25').removeClass('disabled');

        });
    });
*/
/*    // Реализация логики для 3й таблицы Utility
    $("table.utility img").each(function(){
        $(this).click(function(){

            var lvl = $(this).siblings('p').find('.arguments'),
                argument = parseInt($(this).siblings('p').find('.arguments').text()),
                limit = parseInt($(this).siblings('p').find('.limit').text()),
                amount3 = parseInt($('table.utility .amount').text());

            if (limit > argument) {
                $(lvl).text(argument += 1);
                $('table.utility .amount').text(amount3 += 1);
            }

            switch (amount3) {
                case 4:
                    $('table.utility .second-off p').removeClass('disabled');
                    break;
                case 8:
                    $('table.utility .third-off p').removeClass('disabled');
                    break;
                case 12:
                    $('table.utility .four-off p').removeClass('disabled');
                    break;
                case 16:
                    $('table.utility .five-off p').removeClass('disabled');
                    break;
                case 20:
                    $('table.utility .six-off p').removeClass('disabled');
                    break;
            }

            if ((amount3 < 4))
            {
                $('p#39').addClass('disabled');
            } else if (parseInt($('#36').text()) < 3) {
                $('p#39').addClass('disabled');
            } else {
                $('p#39').removeClass('disabled');
            }
            parseInt($('#41').text()) < 4 ? $('p#44').addClass('disabled') : $('p#44').removeClass('disabled');

        });
    });
*/
/*    // Проверяем количество прокачанных мастерис. Если 30, то запрещаем прокачивать.
    $('table img').each(function(){
        $(this).click(function(){
            var amount1 = parseInt($('table.offensive .amount').text()),
                amount2 = parseInt($('table.defense .amount').text()),
                amount3 = parseInt($('table.utility .amount').text()),
                amountSum = amount1 + amount2 + amount3;

            if (amountSum === 30) {
                $("table p").each(function(){
                    var value = /0/;
                    if(!$(this).text().search(value)){
                        $(this).addClass('disabled');
                    }
                });

                $('table img').unbind('click');
            }
        });
    });

    // Делаем активными мастерис которые прокачаны хотя бы на 1
    $('.arguments').each(function(){
       var text = parseInt($(this).text());
       if (text !== 0) {
           $(this).parent('p').removeClass('disabled');
       }
    });*/

}
