/* Подсказки для мастерис */
function initTooltipMasteries() {
    $("img[src='img/masteries/summonerswrath.png']").easyTooltip({
            content: '<h4>Summoner\'s Wrath</h4> \
            <p>Улучшает следующие заклинания: \
            <strong>Exhaust</strong> — снижает Magiс Resist и Armor цели на 10 единиц на время действия заклинания</p> \
            <p><strong>Ignite</strong> — увеличивает урон и силу заклинаний на 5 единиц на время перезарядки заклинания</p> \
            <p><strong>Surge</strong> — увеличивает скорость атаки на 40% и силу заклинаний на 10%</p> \
            <p><strong>Ghost</strong> — скорость передвижения увеличивается на 35%</p>'
    });
    $("img[src='img/masteries/brute.png']").easyTooltip({
            content: '<h4>Brute Force</h4> \
            <p>Урон +1 / 2 /3 </p>'
    });
    $("img[src='img/masteries/mental.png']").easyTooltip({
            content: '<h4>Mental Force</h4> \
            <p>Сила заклинаний + 1 / 2 / 3 / 4</p>'
    });
    $("img[src='img/masteries/butcher.png']").easyTooltip({
            content: '<h4>Mental Force</h4> \
            <p>+2 / 4 базового урона по миньонам и нейтральным монстрам</p>'
    });
    $("img[src='img/masteries/alacrity.png']").easyTooltip({
            content: '<h4>Alacrity</h4> \
            <p>+1.5 / 3 / 4.5 / 6% скорости атаки.</p>'
    });
    $("img[src='img/masteries/sorcery.png']").easyTooltip({
            content: '<h4>Sorcery</h4> \
            <p>Пробивание 10% Armor (необходимо 4 очка талантов в Alacrity).</p>'
    });
    $("img[src='img/masteries/demolitionist.png']").easyTooltip({
            content: '<h4>Demolitionist</h4> \
            <p>Базовые атаки по строениям наносят дополнительно 10 урона.</p>'
    });
    $("img[src='img/masteries/deadlines.png']").easyTooltip({
            content: '<h4>Deadliness</h4> \
            <p>+1 / 2 / 3 / 4% шанс на атаку с критическим уроном.</p>'
    });
    $("img[src='img/masteries/weapon.png']").easyTooltip({
            content: '<h4>Weapon Expertise</h4> \
            <p>Пробивание 10% Armor (необходимо 4 очка талантов в Alacrity).</p>'
    });
    $("img[src='img/masteries/arcane.png']").easyTooltip({
            content: '<h4>Arcane Knowledge</h4> \
            <p>10% проникаемость заклинаний (необходимо 4 очка талантов в Sorcery).</p>'
    });
    $("img[src='img/masteries/havoc.png']").easyTooltip({
            content: '<h4>Havoc</h4> \
            <p>Увеличение атаки на 0.5 / 1 / 1.5%.</p>'
    });
    $("img[src='img/masteries/lethality.png']").easyTooltip({
            content: '<h4>Lethality</h4> \
            <p>Атаки с критическим уроном наносят на 10% больше урона.</p>'
    });
    $("img[src='img/masteries/vampirism.png']").easyTooltip({
            content: '<h4>Vampirism</h4> \
            <p>Даёт +1 / 2 / 3% восстановление здоровья от нанесённого урона.</p>'
    });
    $("img[src='img/masteries/blast.png']").easyTooltip({
            content: '<h4>Blast</h4> \
            <p>+0.25 / 0.5 / 0.75 / 1 Силы заклинаний за уровень.</p>'
    });
    $("img[src='img/masteries/sunder.png']").easyTooltip({
            content: '<h4>Sunder</h4> \
            <p>Пробивание 2 / 4 / 6 Armor.</p>'
    });
    $("img[src='img/masteries/archmage.png']").easyTooltip({
            content: '<h4>Archmage</h4> \
            <p>1.25 / 2.5 / 3.75 / 5% увеличения силы заклинаний.</p>'
    });
    $("img[src='img/masteries/executioner.png']").easyTooltip({
            content: '<h4>Executioner</h4> \
            <p>Если у цели здоровья меньше 40%, то урон по ней увеличивается на 6%.</p>'
    });
    $("img[src='img/masteries/summoners.png']").easyTooltip({
            content: '<h4>Summoner\'s Resolve</h4> \
            <p>Улучшает следующие заклинания:</p> \
            <p><strong>Revive</strong> — Увеличивает скорость передвижения при использование заклинания.</p> \
            <p><strong>Cleanse</strong> — Увеличивает длительность сокращения контроля на 1 секунду</p> \
            <p><strong>Heal</strong> — Восстанавливает на 15% больше здоровья</p>\
            <p><strong>Smite</strong> — Даёт 10 золота при использовании заклинания.</p>\
            <p><strong>Garrison</strong> — Турели наносят 50% урон по рядом стоящим вражеским юнитам.</p>'
    });
    $("img[src='img/masteries/resistance.png']").easyTooltip({
            content: '<h4>Resistance</h4> \
            <p>Магическая защита увеличивается на 2 / 4 / 6.</p>'
    });
    $("img[src='img/masteries/hardiness.png']").easyTooltip({
            content: '<h4>Hardiness</h4> \
            <p>Защита увеличивается на 2 / 4 / 6.</p>'
    });
    $("img[src='img/masteries/toughskin.png']").easyTooltip({
            content: '<h4>Tough skin</h4> \
            <p>Снижает урон наносимый миньонами и нейтральными монстрами на 1 / 2.</p>'
    });
    $("img[src='img/masteries/durability.png']").easyTooltip({
            content: '<h4>Durability</h4> \
            <p>+1.5 / 3 / 4.5 / 6 Здоровья за уровень.</p>'
    });
    $("img[src='img/masteries/vigor.png']").easyTooltip({
            content: '<h4>Vigor</h4> \
            <p>+1 / 2 / 3 регенерации здоровья за 5 секунд.</p>'
    });
    $("img[src='img/masteries/indomitable.png']").easyTooltip({
            content: '<h4>Indomitable</h4> \
            <p>Снижает получаемый урон нa 1 / 2.</p>'
    });
    $("img[src='img/masteries/veteran.png']").easyTooltip({
            content: '<h4>Veteran\'s Scars</h4> \
            <p>+30 Здоровья (необходимо 4 очка талантов в Durability).</p>'
    });
    $("img[src='img/masteries/evasion.png']").easyTooltip({
            content: '<h4>Evasion</h4> \
            <p>Снижает урон от заклинаний по площади на 1 / 2 / 3%.</p>'
    });
    $("img[src='img/masteries/bladed.png']").easyTooltip({
            content: '<h4>Bladed Armor</h4> \
            <p>Каждая атака миньона или нейтрального монстра возвращает ему 6 единиц урона. (необходимо 2 очка талантов в Tough skin).</p>'
    });
    $("img[src='img/masteries/siege.png']").easyTooltip({
            content: '<h4>Siege Commander</h4> \
            <p>Снижает защиту ближайших вражеских строений на 10 (не суммируется).</p>'
    });
    $("img[src='img/masteries/initiator.png']").easyTooltip({
            content: '<h4>Initiator</h4> \
            <p>Увеличивает скорость передвижения на 1 / 2 / 3%, если у героя больше 70% здоровья.</p>'
    });
    $("img[src='img/masteries/enlightenment.png']").easyTooltip({
            content: '<h4>Enlightenment</h4> \
            <p>+0.15 / 0.3 / 0.45% Снижения перезарядки заклинаний за уровень.</p>'
    });
    $("img[src='img/masteries/honor.png']").easyTooltip({
            content: '<h4>Honor Guard</h4> \
            <p>Снижает получаемый урон на 0.5 / 1 / 1.5%.</p>'
    });
    $("img[src='img/masteries/mercenary.png']").easyTooltip({
            content: '<h4>Mercenary</h4> \
            <p>За каждое убийство вражеского чемпиона или ассистирование вы получаете 8 / 16 / 24 дополнительного золота.</p>'
    });
    $("img[src='img/masteries/juggernaut.png']").easyTooltip({
            content: '<h4>Juggernaut</h4> \
            <p>Cнижает длительность заклинаний контроля на 10% и увеличивает максимальный запас здоровья на 3%.</p>'
    });
    $("img[src='img/masteries/summoner.png']").easyTooltip({
            content: '<h4>Summoner\'s Insight</h4> \
            <p>Улучшает следующие заклинания:</p> \
            <p><strong>Teleport</strong> — Уменьшает длительность телепортации на 1 секунду.</p> \
            <p><strong>Promote</strong> — Значительно увеличивает защитные характеристики мега-миньона на 15%</p> \
            <p><strong>Flash</strong> — Снижает перезарядку заклинания на 15 секунд.</p> \
            <p><strong>Clairvoyance</strong> — Длительность заклинания увеличивается на 2 секунды.</p>'
    });
    $("img[src='img/masteries/goodhands.png']").easyTooltip({
            content: '<h4>Good Hands</h4> \
            <p>Время воскрешения снижается на 4 / 7 / 10%.</p>'
    });
    $("img[src='img/masteries/expanded.png']").easyTooltip({
            content: '<h4>Expanded Mind</h4> \
            <p>+4 / 8 / 12 маны за уровень или 4 / 7 / 10 энергии за уровень.</p>'
    });
    $("img[src='img/masteries/improved.png']").easyTooltip({
            content: '<h4>Improved Recall</h4> \
            <p>Снижает время телепортации Recall на 1 секунду в классическом режиме и на 0.5 в Доминионе.</p>'
    });
    $("img[src='img/masteries/swiftness.png']").easyTooltip({
            content: '<h4>Swiftness</h4> \
            <p>Увеличивает скорость перемещения на 0.5 / 1 / 1.5 / 2%.</p>'
    });
    $("img[src='img/masteries/meditation.png']").easyTooltip({
            content: '<h4>Meditation</h4> \
            <p>+1 / 2 / 3 регенерации маны за 5 секунд. (необходимо 3 очка талантов в Expanded Mind).</p>'
    });
    $("img[src='img/masteries/scout.png']").easyTooltip({
            content: '<h4>Scout</h4> \
            <p>Увеличивает дальность обзора вардов на 5%.</p>'
    });
    $("img[src='img/masteries/greed.png']").easyTooltip({
            content: '<h4>Greed </h4> \
            <p>Увеличивает прирост золота на 0.5 / 1 / 1.5 / 2 в десять секунд..</p>'
    });
    $("img[src='img/masteries/transmut.png']").easyTooltip({
            content: '<h4>Transmutation</h4> \
            <p>1 / 2 / 3% от нанесёного урона магией преобразуется в здоровье. (необходимо 3 очка в Greed).</p>'
    });
    $("img[src='img/masteries/runic.png']").easyTooltip({
            content: '<h4>Runic Affinity</h4> \
            <p>Увеличивает длительность баффов с нейтральных монстров на 20%.</p>'
    });
    $("img[src='img/masteries/wealth.png']").easyTooltip({
            content: '<h4>Wealth</h4> \
            <p>Увеличивает начальный запас золота на 20\40 единиц.</p>'
    });
    $("img[src='img/masteries/awarenet.png']").easyTooltip({
            content: '<h4>Awareness</h4> \
            <p>Получаемый опыт увеличивается на 1.25 / 2.5 / 3.75 / 5%.</p>'
    });
    $("img[src='img/masteries/sage.png']").easyTooltip({
            content: '<h4>Sage</h4> \
            <p>За каждое убийство вражеского чемпиона или ассистирование вы получаете 40 дополнительного опыта.</p>'
    });
    $("img[src='img/masteries/strength.png']").easyTooltip({
            content: '<h4>Perseverance</h4> \
            <p>Увеличивает регенерацию маны и здоровья на 3 / 6 / 9%.</p>'
    });
    $("img[src='img/masteries/intelligence.png']").easyTooltip({
            content: '<h4>Intelligence</h4> \
            <p>Снижает время перезарядки заклинаний на 2 / 4 / 6%.</p>'
    });
    $("img[src='img/masteries/mastermind.png']").easyTooltip({
            content: '<h4>Mastermind</h4> \
            <p>Снижает перезарядку заклинаний призывателя на 15%.</p>'
    });

}
initTooltipMasteries();