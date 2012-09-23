/* Глобальные функции инициализации */

// Инициализация статов и итемов
function initMain(char, image, item1, item2, item3, item4, item5, item6) {

    // Номер итема в localstorage
    var numberItem = 1;
    // Статы персонажа
    character = char;
    // Изображение персонажа
    imgThis = image;

    // Вывод статов через underscore templates
    var stats = "<div class='row main'><div class='span3'><h4 class='center'>Статы на 18 уровне: </h4>" +
        "<p class='center'>(без учета бонусов)</p>" +
        "<ul><% _.each(character, function(value, key) { %> " +
        "<li class='key'><%= key %>:</li>" +
        "<li class='value'><%= value %></li>" +
        "<% }); %></ul>" +
        "</div>";

    // Выбираем все итемы текущего персонажа из Localstorage начиная с 1го
    // и заполняем ими arguments[] начиная с 2го элемента массива
    for (var i = 2; i < 8; i++) {
        var locItem = $(image).attr('id') + 'Item' + numberItem;
        if (lGet(locItem) != null) {
            arguments[i] = lGet(locItem);
        }
        numberItem++;
    }

    // Вывод итемов
    var html = "<div class='span2 image'>" +
        image +
        "</div>" +
        "<div class='span6'>" +
        "<div class='items'>" +
        "<p>Сборка: </p>"
        + "<img src='" + item1 + "' /><img src='" + item2 + "' /><img src='" + item3 + "' /><img src='" + item4 +
        "' /><img src='" + item5 + "' /><img src='" + item6 + "' /></div>" +
        "<div class='inner-items ui-droppable'>" +
        "<h3>Предметы:</h3><span>X</span>" +
        "</div>";

    // Объединяем статы и итемы для рендера
    var output = stats + html;

    return _.template(output, Characters);
}

// Инициализация скиллов
function initSkills(spell1, spell2, skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9, skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18) {
    // Номер спелла в localstorage
    var numberSpell = 1;
    // Номер скилла в localstorage
    var numberSkill = 1;

    // Выбираем все спеллы текущего персонажа из Localstorage начиная с 1го
    // и заполняем ими arguments[] начиная с 0го элемента массива
    for (var i = 0; i < 2; i++) {
        var locSpell = $(imgThis).attr('id') + 'Spell' + numberSpell;
        if (lGet(locSpell) != null) {
            arguments[i] = lGet(locSpell);
        }
        numberSpell++;
    }

    // Выбираем все скиллы текущего персонажа из Localstorage начиная с 1го
    // и заполняем ими arguments[] начиная с 2го элемента массива
    for (var m = 2; m < 20; m++) {
        var locSkill = $(imgThis).attr('id') + 'Skill' + numberSkill;
        if (lGet(locSkill) != null) {
            arguments[m] = lGet(locSkill);
        }
        numberSkill++;
    }

    // Вывод спеллов и скиллов
    var skills = "<div class='skills'>" +
        "<p>Скиллы (перетаскивайте, для изменения порядка):<span class='spells'>" +
        "<img src='" + spell1 + "' /><img src='" + spell2 + "' /></span></p>" +
        "<div class='inner-spells'>" +
        "<h2>Спеллы:</h2><span>X</span>" +
        "</div>" +
        "<div class='skills-inner'>"
        + "<img src='" + skill1 + "' /><img src='" + skill2 + "' /><img src='" + skill3 + "' /><img src='" + skill4 + "' /><img src='" + skill5 + "' /><img src='" +
        skill6 + "' /><img src='" + skill7 + "' /><img src='" + skill8 + "' /><img src='" + skill9 + "' /><img src='" + skill10 + "' /><img src='" +
        skill11 + "' /><img src='" + skill12 + "' /><img src='" + skill13 + "' /><img src='" + skill14 + "' /><img src='" + skill15 + "' /><img src='" +
        skill16 + "' /><img src='" + skill17 + "' /><img src='" + skill18 +
        "' /></div></div></div></div><div class='clear'></div>";

    return skills;
}

// Инициализация мастерис
function initOffensive(summonersWrath, bruteForce, mentalForce, butcher, alacrity, sorcery, demolitionist, deadlines, weaponExpertise, arkaneKnowledge, havoc, lethality, vampirism, blast, sunder, archmage, executioner) {
    // Номер мастерис Offensive в localstorage
    var numberMaster = 1;

    // Выбираем все мастерис Offensive текущего персонажа из Localstorage
    // и заполняем ими arguments[] начиная с 0го элемента массива
    for (var m = 0; m < 17; m++) {
        var locOff = $(imgThis).attr('id') + numberMaster;
        if (lGet(locOff) != null) {
            arguments[m] = lGet(locOff);
        }
        numberMaster++;
    }

    // Считаем прокачанные мастерис Offensive
    var up = 0;
    for (var i = 0; i < arguments.length; i++) {
        var arg = parseInt(arguments[i]);
        up += arg;
    }

    // Выводим Offensive
    var offensive = '<div class="row masteries"><div class="span4">\
                        <table class="offensive"> \
                            <tr> \
                                <th colspan="4">Offense: <strong class="amount">' + up + '</strong></th> \
                            </tr> \
                            <tr class="first-off"> \
                                <td><p><span class="arguments" id="1">' + summonersWrath + '</span> / <span class="limit">1</span></p>' + Masteries.summonersWrath + '</td> \
                                <td><p><span class="arguments" id="2">' + bruteForce + '</span> / <span class="limit">3</span></p>' + Masteries.bruteForce + '</td> \
                                <td><p><span class="arguments" id="3">' + mentalForce + '</span> / <span class="limit">4</span></p>' + Masteries.mentalForce + '</td> \
                                <td><p><span class="arguments" id="4">' + butcher + '</span> / <span class="limit">2</span></p>' + Masteries.butcher + '</td> \
                            </tr> \
                            <tr class="second-off"> \
                                <td></td> \
                                <td><p class="disabled"><span id="5" class="arguments">' + alacrity + '</span> / <span class="limit">4</span></p>' + Masteries.alacrity + '</td> \
                                <td><p class="disabled"><span id="6" class="arguments">' + sorcery + '</span> / <span class="limit">4</span></p>' + Masteries.sorcery + '</td> \
                                <td><p class="disabled"><span id="7" class="arguments">' + demolitionist + '</span> / <span class="limit">1</span></p>' + Masteries.demolitionist + '</td> \
                            </tr> \
                            <tr class="third-off"> \
                                <td><p class="disabled"><span class="arguments" id="8">' + deadlines + '</span> / <span class="limit">4</span></p>' + Masteries.deadlines + '</td> \
                                <td><p class="disabled" id="9"><span class="arguments" id="9">' + weaponExpertise + '</span> / <span class="limit">1</span></p>' + Masteries.weaponExpertise + '</td> \
                                <td><p class="disabled" id="10"><span class="arguments" id="10">' + arkaneKnowledge + '</span> / <span class="limit">1</span></p>' + Masteries.arkaneKnowledge + '</td> \
                                <td><p class="disabled"><span class="arguments" id="11">' + havoc + '</span> / <span class="limit">3</span></p>' + Masteries.havoc + '</td> \
                            </tr> \
                            <tr class="four-off"> \
                                <td><p class="disabled" id="12"><span class="arguments" id="12">' + lethality + '</span> / <span class="limit">1</span></p>' + Masteries.lethality + '</td> \
                                <td><p class="disabled"><span class="arguments" id="13">' + vampirism + '</span> / <span class="limit">3</span></p>' + Masteries.vampirism + '</td> \
                                <td><p class="disabled"><span class="arguments" id="14">' + blast + '</span> / <span class="limit">4</span></p>' + Masteries.blast + '</td> \
                                <td></td> \
                            </tr> \
                            <tr class="five-off"> \
                                <td></td> \
                                <td><p class="disabled"><span class="arguments" id="15">' + sunder + '</span> / <span class="limit">3</span></p>' + Masteries.sunder + '</td> \
                                <td><p class="disabled"><span class="arguments" id="16">' + archmage + '</span> / <span class="limit">4</span></p>' + Masteries.archmage + '</td> \
                                <td></td> \
                            </tr> \
                            <tr class="six-off"> \
                                <td></td> \
                                <td><p class="disabled"><span class="arguments" id="17">' + executioner + '</span> / <span class="limit">1</span></p>' + Masteries.executioner + '</td> \
                                <td></td> \
                                <td></td> \
                            </tr> \
                        </table> \
                    </div>';
    return offensive;

}

function initDefense(summonersResolve, resistance, hardiness, touchSkin, durability, vigor, indomitable, veteranScars, evasion, bladedArmor, siegeCommand, initiator, enlightenment, honorGuard, mercenary, juggernaut) {
    // Номер мастерис Defense в localstorage
    var numberMaster = 18;

    // Выбираем все мастерис Defense текущего персонажа из Localstorage
    // и заполняем ими arguments[] начиная с 0го элемента массива
    for (var m = 0; m < 16; m++) {
        var locOff = $(imgThis).attr('id') + numberMaster;
        if (lGet(locOff) !== null) {
            arguments[m] = lGet(locOff);
        }
        numberMaster++;
    }

    // Считаем прокачанные мастерис Defense
    var up = 0;
    for (var i = 0; i < arguments.length; i++) {
        var arg = parseInt(arguments[i]);
        up += arg;
    }

    // Выводим Defense
    var defense = '<div class="span4"> \
                    <table class="defense"> \
                        <tr> \
                            <th colspan="4">Defense:  <strong class="amount">' + up + '</strong></th> \
                        </tr> \
                        <tr class="first-off"> \
                            <td><p><span class="arguments" id="18">' + summonersResolve + '</span> / <span class="limit">1</span></p>' + Masteries.summonersResolve + '</td> \
                            <td><p><span class="arguments" id="19">' + resistance + '</span> / <span class="limit">3</span></p>' + Masteries.resistance + '</td> \
                            <td><p><span class="arguments" id="20">' + hardiness + '</span> / <span class="limit">3</span></p>' + Masteries.hardiness + '</td> \
                            <td><p><span class="arguments" id="21">' + touchSkin + '</span> / <span class="limit">2</span></p>' + Masteries.toughSkin + '</td> \
                        </tr> \
                        <tr class="second-off"> \
                            <td></td> \
                            <td><p class="disabled"><span class="arguments" id="22">' + durability + '</span> / <span class="limit">4</span></p>' + Masteries.durability + '</td> \
                            <td><p class="disabled"><span class="arguments" id="23">' + vigor + '</span> / <span class="limit">3</span></p>' + Masteries.vigor + '</td> \
                            <td></td> \
                        </tr> \
                        <tr class="third-off"> \
                            <td><p class="disabled"><span class="arguments" id="24">' + indomitable + '</span> / <span class="limit">2</span></p>' + Masteries.indomitable + '</td> \
                            <td><p class="disabled" id="25"><span class="arguments" id="25">' + veteranScars + '</span> / <span class="limit">1</span></p>' + Masteries.veteranScars + '</td> \
                            <td><p class="disabled"><span class="arguments" id="26">' + evasion + '</span> / <span class="limit">3</span></p>' + Masteries.evasion + '</td> \
                            <td><p class="disabled" id="27"><span class="arguments" id="27">' + bladedArmor + '</span> / <span class="limit">1</span></p>' + Masteries.bladedArmor + '</td> \
                        </tr> \
                        <tr class="four-off"> \
                            <td><p class="disabled"><span class="arguments" id="28">' + siegeCommand + '</span> / <span class="limit">1</span></p>' + Masteries.siegeCommand + '</td> \
                            <td><p class="disabled"><span class="arguments" id="29">' + initiator + '</span> / <span class="limit">3</span></p>' + Masteries.initiator + '</td> \
                            <td><p class="disabled"><span class="arguments" id="30">' + enlightenment + '</span> / <span class="limit">3</span></p>' + Masteries.enlightenment + '</td> \
                            <td></td> \
                        </tr> \
                        <tr class="five-off"> \
                            <td></td> \
                            <td><p class="disabled"><span class="arguments" id="31">' + honorGuard + '</span> / <span class="limit">3</span></p>' + Masteries.honorGuard + '</td> \
                            <td><p class="disabled"><span class="arguments" id="32">' + mercenary + '</span> / <span class="limit">3</span></p>' + Masteries.mercenary + '</td> \
                            <td></td> \
                        </tr> \
                        <tr class="six-off"> \
                            <td></td> \
                            <td><p class="disabled"><span class="arguments" id="33">' + juggernaut + '</span> / <span class="limit">1</span></p>' + Masteries.juggernaut + '</td> \
                            <td></td> \
                            <td></td> \
                        </tr> \
                    </table> \
                </div>';
    return defense;
}

function initUtility(summonersInsight, goodHands, expandedMind, improvedRecall, swiftness, meditation, scout, greed, transmutation, runicAffinity, wealth, awarenet, sage, strengthOfSpirit, intelligence, mastermind) {
    // Номер мастерис Defense в localstorage
    var numberMaster = 34;

    // Выбираем все мастерис Utility текущего персонажа из Localstorage
    // и заполняем ими arguments[] начиная с 0го элемента массива
    for (var m = 0; m < 16; m++) {
        var locOff = $(imgThis).attr('id') + numberMaster;
        if (lGet(locOff) !== null) {
            arguments[m] = lGet(locOff);
        }
        numberMaster++;
    }

    // Считаем прокачанные мастерис Defense
    var up = 0;
    for (var i = 0; i < arguments.length; i++) {
        var arg = parseInt(arguments[i]);
        up += arg;
    }

    // Выводим Utility
    var utility = '<div class="span3"> \
                    <table class="utility"> \
                        <tr> \
                            <th colspan="4">Utility:  <strong class="amount">' + up + '</strong></th> \
                        </tr> \
                        <tr class="first-off"> \
                            <td><p><span class="arguments" id="34">' + summonersInsight + '</span> / <span class="limit">1</span></p>' + Masteries.summonersInsight + '</td> \
                            <td><p><span class="arguments" id="35">' + goodHands + '</span> / <span class="limit">3</span></p>' + Masteries.goodHands + '</td> \
                            <td><p><span class="arguments" id="36">' + expandedMind + '</span> / <span class="limit">3</span></p>' + Masteries.expandedMind + '</td> \
                            <td><p><span class="arguments" id="37">' + improvedRecall + '</span> / <span class="limit">1</span></p>' + Masteries.improvedRecall + '</td> \
                        </tr> \
                        <tr class="second-off"> \
                            <td></td> \
                            <td><p class="disabled"><span class="arguments" id="38">' + swiftness + '</span> / <span class="limit">4</span></p>' + Masteries.swiftness + '</td> \
                            <td><p class="disabled" id="39"><span class="arguments" id="39">' + meditation + '</span> / <span class="limit">3</span></p>' + Masteries.meditation + '</td> \
                            <td><p class="disabled"><span class="arguments" id="40">' + scout + '</span> / <span class="limit">1</span></p>' + Masteries.scout + '</td> \
                        </tr> \
                        <tr class="third-off"> \
                            <td></td> \
                            <td><p class="disabled"><span class="arguments" id="41">' + greed + '</span> / <span class="limit">4</span></p>' + Masteries.greed + '</td> \
                            <td><p class="disabled"><span class="arguments" id="42">' + transmutation + '</span> / <span class="limit">3</span></p>' + Masteries.transmutation + '</td> \
                            <td><p class="disabled"><span class="arguments" id="43">' + runicAffinity + '</span> / <span class="limit">1</span></p>' + Masteries.runicAffinity + '</td> \
                        </tr> \
                        <tr class="four-off"> \
                            <td></td> \
                            <td><p class="disabled" id="44"><span class="arguments" id="44">' + wealth + '</span> / <span class="limit">2</span></p>' + Masteries.wealth + '</td> \
                            <td><p class="disabled"><span class="arguments" id="45">' + awarenet + '</span> / <span class="limit">4</span></p>' + Masteries.awarenet + '</td> \
                            <td><p class="disabled"><span class="arguments" id="46">' + sage + '</span> / <span class="limit">1</span></p>' + Masteries.sage + '</td> \
                        </tr> \
                        <tr class="five-off"> \
                            <td></td> \
                            <td><p class="disabled"><span class="arguments" id="47">' + strengthOfSpirit + '</span> / <span class="limit">3</span></p>' + Masteries.strengthOfSpirit + '</td> \
                            <td><p class="disabled"><span class="arguments" id="48">' + intelligence + '</span> / <span class="limit">3</span></p>' + Masteries.intelligence + '</td> \
                            <td></td> \
                        </tr> \
                        <tr class="six-off"> \
                            <td></td> \
                            <td></td> \
                            <td><p class="disabled"><span class="arguments" id="49">' + mastermind + '</span> / <span class="limit">1</span></p>' + Masteries.mastermind + '</td> \
                            <td></td> \
                        </tr> \
                    </table>\
            </div>\
             \
            <div class="span3 offset3"><button class="btn btn-success" onclick="saveMasteries();">Сохранить мастерис</button></div> \
            <div class="span3"><button class="reset-button btn btn-danger" onclick="resetMaster();initBinds();">Сбросить мастерис</button></div> \
            </div>';
    return utility;
}

// Инициализация рун
function initRunes(one, two, three, four) {
    // Номер руны в localstorage
    var numberRune = 1;

    // Выбираем все руны текущего персонажа из Localstorage
    // и заполняем ими arguments[] начиная с 0го элемента массива
    for (var i = 0; i < 4; i++) {
        var locRune = $(imgThis).attr('id') + 'Rune' + numberRune;
        if (lGet(locRune) != null) {
            arguments[i] = lGet(locRune);
        }
        numberRune++;
    }

    // Выводим руны
    var runes = '<div class="row runes">' +
                '<div class="span6 offset3">' +
                '<h2>Руны:</h2>'+
                '<img src="' + one  + '" />x9' + '<img src="' + two + '" />x9' +
                '<img src="' + three + '" />x9' + '<img src="' + four + '" />x3' +
                '</div>' +
                '</div>' +
                "<div class='inner-runes ui-droppable'>" +
                "<h3>Руны:</h3><span>X</span>" +
                "</div>";

    return runes;
}

// Инициализация подсказок
function initTooltip() {
    // Подсказки для итемов
    initTooltipItems();
    // Подсказки для рун
    initTooltipRunes();
    // Подсказки для спеллов
    initTooltipSpells();
    // Подсказки для мастерис
    initTooltipMasteries();

    $("table p").each(function(){
        var value = /0/;
        if(!$(this).text().search(value)){
            $(this).addClass('disabled');
        }
    });
}

// Короткая запись функций для работы с localstorage
function lSet(n, m) {
    return localStorage.setItem(n, m);
}

function lGet(n) {
    return localStorage.getItem(n);
}

function lDel(n) {
    return localStorage.removeItem(n);
}

// Очищаем localstorage
function resetBuilds() {
    try {
        localStorage.clear();
        window.location.reload();
    } catch (e) {
        alert("Не удалось очистить локальное хранилище:" + e);
    }
}