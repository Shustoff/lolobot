/* Подсказки для итемов */
var Tooltips = {};

Tooltips.items = function () {
    $("img[src='img/items/sorcerers-shoes.gif']").easyTooltip({
        content: '<h4>Sorcerer\'s Shoes</h4><p>Увеличивает скорость передвижения на 70. Пассивно: +20 Магического проникновения</p> <strong>Цена:</strong> 1100'
    });
    $("img[src='img/items/rylais-crystal-scepter.gif']").easyTooltip({
        content: '<h4>Rylai\'s Scepter</h4> \
        <p>+500 ХП, +80 АП. Пассивка: Ваши способности замедляют скорость передвижения врага на 35% в течении 2ух секунд. (на 15% для массовых способностей)</p> <strong>Цена:</strong> 3105'
    });
    $("img[src='img/items/will-of-the-ancients.gif']").easyTooltip({
        content: '<h4>Will of the Ancients</h4> \
        <p>+50 Силы магии. Пассивка: Добавляет вам и окружающим вас союзникам 30 Cилы магии и 20% Вампиризма магии.</p> <strong>Цена:</strong> 2100'
    });
    $("img[src='img/items/rabadons-deathcap.gif']").easyTooltip({
        content: '<h4>Rabadon\'s Deathcap</h4> \
        <p>+140 Силы магии. Пассивка: Увеличивает силу магии на 30%.</p> <strong>Цена:</strong> 3600'
    });
    $("img[src='img/items/morellos-evil-tome.gif']").easyTooltip({
        content: '<h4>Morello\'s Evil Tome</h4> \
        <p>+75 Силы магии +12 Регена маны / 5. Пассивка: Снижает Время восстановления способностей на 20%.</p> <strong>Цена:</strong> 2350'
    });
    $("img[src='img/items/void-staff.gif']").easyTooltip({
        content: '<h4>Void Staff</h4> \
        <p>+70 Силы магии. Пассивка: +40% Проникновения магии.</p> <strong>Цена:</strong> 2295'
    });
    $("img[src='img/items/mercurys-treads.gif']").easyTooltip({
        content: '<h4>Mercury\'s Treads</h4> \
        <p>+25 Сопротивления магии. Пассивка: Улучшенная скорость бега 2 (не складывается с другими сапогами). Пассивка: +35 Стойкости (Стойкость снижает время оглушения, замедления, провокации, запугивания, усыпления, немоты и неподвижности. Эффекты предметов со Стойкостью не суммируется.)</p> <strong>Цена:</strong> 1200'
    });
    $("img[src='img/items/lich-bane.gif']").easyTooltip({
        content: '<h4>Lich Bane</h4> \
        <p>+350 Маны +80 Силы магии +30 Сопротивления магии +7% Скорости бега. Пассивка: После использования способности, ваша следующая автоатака нанесет дополнительный Физический урон в размере вашей Силы магии (восстановление 2 секунды). Не складывается с аналогичными эффектами предметов: Sheen, Trinity Force.</p> <strong>Цена:</strong> 3470'
    });
    $("img[src='img/items/hextech-gunblade.gif']").easyTooltip({
        content: '<h4>Hextech Gunblade</h4> \
        <p>+40 Урона +70 Силы магии +15% Вампиризма. Пассивка: +20% Магического вампиризма. Активация: Наносит 300 Магического урона и замедляет вражеского чемпиона на 50% в течение 3 секунд (восстановление 60 секунд).</p> <strong>Цена:</strong> 3625'
    });
    $("img[src='img/items/boots-of-mobility.gif']").easyTooltip({
        content: '<h4>Boots of Mobility</h4> \
        <p>Пассивка: Улучшенная скорость бега 2, эффект от сапог повышается до Улучшенной скорости бега 5 через 5 секунд после выхода из боя (не складывается с другими сапогами).</p> <strong>Цена:</strong> 1 000'
    });
    $("img[src='img/items/aegis-of-the-legion.gif']").easyTooltip({
        content: '<h4>Aegis of the Legion</h4> \
        <p>+270 Здоровья +18 Брони +24 Сопротивления магии. Аура: Ближайшие союзники получают 12 Брони, 15 Сопротивления магии и 8 Урона.</p> <strong>Цена:</strong> 1 925'
    });
    $("img[src='img/items/shurelyas-reverie.gif']").easyTooltip({
        content: '<h4>Shurelya\'s Reverie</h4> \
        <p>+330 Здоровья +30 Регена здоровья / 5 +15 Регена маны / 5. Пассивка: Снижает Время восстановления способностей на 15%. Активация: Ближайшие союзники получают 40% Скорости передвижения в течение 3 секунд (восстановление 60 секунд).</p> <strong>Цена:</strong> 2 200'
    });
    $("img[src='img/items/spirit-visage.gif']").easyTooltip({
        content: '<h4>Spirit Visage</h4> \
        <p>+30 Сопротивления магии +250 Здоровья. Пассивка: Снижает Время восстановления способностей на 10%. Пассивка: Увеличивает эффекты лечения и регенерации вашего чемпиона на 15%.</p> <strong>Цена:</strong> 1 550'
    });
    $("img[src='img/items/randuins-omen.gif']").easyTooltip({
        content: '<h4>Randuin\'s Omen</h4> \
        <p>+350 Здоровья +75 Брони +25 Регена здоровья / 5. Пассивка: Снижает Время восстановления способностей на 5%. Пассивка: При получении урона автоатакой имеется 20% шанс замедлить атакующего на 35% в течение 3 секунд. Активация: Замедляет Скорость передвижения и снижает Скорость атаки окружающих врагов на 35% в течение 2 секунд + 0.5 секунд за каждые 100 Брони и Защиты от магии вашего чемпиона суммарно (восстановление 60 секунд).</p> <strong>Цена:</strong> 3 075'
    });
    $("img[src='img/items/trinity-force.gif']").easyTooltip({
        content: '<h4>Trinity Force</h4> \
        <p>+30 Урона +30 Силы магии +30% Скорости атаки +15% Шанса крита +12% Скорости бега +250 Здоровья +250 Маны. Пассивка: После использования способности, ваша следующая автоатака нанесет дополнительный Физический урон в размере 150% вашего базового Физического урона (восстановление 2 секунды). Не складывается с аналогичными эффектами предметов: Sheen, Lich Bane. УНИКАЛЬНАЯ Пассивка: Ваша автоатака с вероятностью 25% снизит скорость передвижения цели на 35% в течение 2.5 секунд.</p> <strong>Цена:</strong> 4 070'
    });
    $("img[src='img/items/boots-of-swiftness.gif']").easyTooltip({
        content: '<h4>Boots of Swiftness</h4> \
        <p>Пассивка: Улучшенная скорость бега 3 (не складывается с другими сапогами).</p> <strong>Цена:</strong> 1 000'
    });
    $("img[src='img/items/sunfire-cape.gif']").easyTooltip({
        content: '<h4>Sunfire Cape</h4> \
        <p>+450 Здоровья +45 Брони. Пассивка: Наносит 35 ед. магического урона в секунду ближайшим врагам.</p> <strong>Цена:</strong> 2 610'
    });
    $("img[src='img/items/abyssal-scepter.gif']").easyTooltip({
        content: '<h4>Abyssal Scepter</h4> \
        <p>+70 Силы магии +57 Сопротивления магии. Аура: Уменьшает Сопротивление магии ближайших вражеских чемпионов на 20.</p> <strong>Цена:</strong> 2 650'
    });
    $("img[src='img/items/eleisas-miracle.gif']").easyTooltip({
        content: '<h4>Eleisa\'s Miracle</h4> \
        <p>+25 Регена здоровья / 5 +20 Регена маны / 5. Пассивка: +35 Стойкости (Стойкость снижает время оглушения, замедления, провокации, запугивания, усыпления, немоты и неподвижности. Эффекты предметов со Стойкостью не суммируется.)</p> <strong>Цена:</strong> 1 300'
    });
    $("img[src='img/items/banshees-veil.gif']").easyTooltip({
        content: '<h4>Banshee\'s Veil</h4> \
        <p>+375 Здоровья +375 Маны +50 Сопротивления магии. Пассивка: Магический щит раз в 45 секунд блокирует применение врагом способности.</p> <strong>Цена:</strong> 2 715'
    });
    $("img[src='img/items/guardian-angel.gif']").easyTooltip({
        content: '<h4>Guardian Angel</h4> \
        <p>+68 Брони +38 Сопротивления магии. Пассивка: Оживляет вашего чемпиона после смерти, восстанавливая 750 Здоровья и 375 Маны (восставновление 5 минут).</p> <strong>Цена:</strong> 2 600'
    });
    $("img[src='img/items/rod-of-ages.gif']").easyTooltip({
        content: '<h4>Rod of Ages</h4> \
        <p>+450 Здоровья +525 Маны +60 Силы магии. Пассивка: Ваш чемпион получает 18 ед. Здоровья, 20 Маны и 2 Силы магии каждую минуту (суммируется до 10 раз). Пассивка: При повышении уровня чемпиона восстанавливает 250 Здоровья и 200 Маны в течение 8 секунд.</p> <strong>Цена:</strong> 3 035'
    });
    $("img[src='img/items/zhonyas-hourglass.gif']").easyTooltip({
        content: '<h4>Zhonya\'s Hourglass</h4> \
        <p>+100 Силы магии +50 Брони. Активация: Помещает вашего чемпиона в стазис на 2 секунды, делая его неуязвивым и запрещая взятие его в цель, однако блокируя при этом выполнение любых действий (восстановление 90 секунд).</p> <strong>Цена:</strong> 3 100'
    });
    $("img[src='img/items/dorans-ring.gif']").easyTooltip({
        content: '<h4>Doran\'s Ring</h4> \
        <p>+100 Здоровья +15 Силы магии +5 Регена маны / 5</p> <strong>Цена:</strong> 475'
    });
    $("img[src='img/items/berserkers-greaves.gif']").easyTooltip({
        content: '<h4>Berserker\'s Greaves</h4> \
        <p>+25% Скорости атаки. Пассивка: Улучшенная скорость бега 2 (не складывается с другими сапогами).</p> <strong>Цена:</strong> 920'
    });
    $("img[src='img/items/infinity-edge.gif']").easyTooltip({
        content: '<h4>Infinity Edge</h4> \
        <p>+80 Урона +25% Шанса крита. Пассивка: Критические удары наносят 250% урона вместо 200%.</p> <strong>Цена:</strong> 3 830'
    });
    $("img[src='img/items/phantom-dancer.gif']").easyTooltip({
        content: '<h4>Phantom Dancer</h4> \
        <p>+55% Скорости атаки +30% Шанса крита +15% Скорости бега</p> <strong>Цена:</strong> 2 845'
    });
    $("img[src='img/items/last-whisper.gif']").easyTooltip({
        content: '<h4>Last Whisper</h4> \
        <p>+40 Урона. Пассивка: +40% Пробивания брони.</p> <strong>Цена:</strong> 2 290'
    });
    $("img[src='img/items/the-bloodthirster.gif']").easyTooltip({
        content: '<h4>The Bloodthirster</h4> \
        <p>+60 Урона +12% Вампиризма Пассивка: Добавляет дополнительно 1 ед. Физического урона и 0.2% Вампиризма за каждое убийство (эффект суммируется 40 раз). Максимум +1 Урона и 0.2% Вампиризма. При смерти теряется половина накопленного бонуса.</p> <strong>Цена:</strong> 3 000'
    });
    $("img[src='img/items/manamune.gif']").easyTooltip({
        content: '<h4>Manamune</h4> \
        <p>+350 Маны +7 Регена маны / 5 +20 Урона. Пассивка: 2% вашей максимальной Маны переводится в наносимый Физический урон.. Пассивка: Ваша автоатака увеличивает ваш максимальный запас Маны на 1 (восстановление 3 секунды). Использование способности увеличивает ваш максимальный запас Маны на 4 (восстановление 3 секунды). Максимум +1000 маны. Не складывается с аналогичными эффектами предметов: Tear of the Goddess, Archangel\'s Staff.</p> <strong>Цена:</strong> 2 110'
    });
    $("img[src='img/items/frozen-heart.gif']").easyTooltip({
        content: '<h4>Frozen Heart</h4> \
        <p>+99 Брони +500 Маны. Пассивка: Снижает Время восстановления способностей на 20%. Аура: Снижает Скорость атаки ближайших врагов на 20%.</p> <strong>Цена:</strong> 2 775'
    });
    $("img[src='img/items/force-of-nature.gif']").easyTooltip({
        content: '<h4>Force of Nature</h4> \
        <p>+76 Сопротивления магии +40 Регена здоровья / 5 +8% Скорости бега. Пассивка: Восстанавливает 0.35% вашего Здоровья каждую секунду.</p> <strong>Цена:</strong> 2 610'
    });
    $("img[src='img/items/warmogs-armor.gif']").easyTooltip({
        content: '<h4>Warmog\'s Armor</h4> \
        <p>+920 Здоровья +30 Регена здоровья / 5 Пассивка: Убийство прислужника добавляет постоянных 3.5 ед. Здоровья и 0.10 Восстановления здоровья каждые 5 секунд. Убийство вражеского чемпиона добавляет 35 Здоровья и 1 Восстановления здоровья. Максимум +350 Здоровья и +10 Восстановления здоровья каждые 5 секунд.</p> <strong>Цена:</strong> 3 000'
    });
    $("img[src='img/items/atmas-impaler.gif']").easyTooltip({
        content: '<h4>Atma\'s Impaler</h4> \
        <p>+45 Брони +18% Шанса крита. Пассивка: Физические атаки наносят дополнительные 2% урона от вашего максимального запаса Здоровья.</p> <strong>Цена:</strong> 2 355'
    });
    $("img[src='img/items/guinsoos-rageblade.gif']").easyTooltip({
        content: '<h4>Guinsoo\'s Rageblade</h4> \
        <p>+35 Урона +45 Силы магии УНИКАЛЬНАЯ Пассивка: При атаке или использовании способности, повышается ваша Cкорость атаки на 4% и Cила магии на 6 в течение 5 секунд (эффект суммируется до 8 раз).</p> <strong>Цена:</strong> 2 235'
    });
    $("img[src='img/items/the-brutalizer.gif']").easyTooltip({
        content: '<h4>The Brutalizer</h4> \
        <p>+25 Урона. Пассивка: Снижает Время восстановления способностей на 10%. Пассивка: +15 Пробивания брони.</p> <strong>Цена:</strong> 1 337'
    });
    $("img[src='img/items/the-black-cleaver.gif']").easyTooltip({
        content: '<h4>The Black Cleaver</h4> \
        <p>+55 Урона +30% Скорости атаки. Пассивка: Ваши автоатаки снижают Броню цели на 15 ед. в течение 5 секунд (эффект суммируется до 3 раз).</p> <strong>Цена:</strong> 2 865'
    });
    $("img[src='img/items/madreds-bloodrazor.gif']").easyTooltip({
        content: '<h4>Madred\'s Bloodrazor</h4> \
        <p>+40 Урона +40% Скорости атаки +25 Брони. Пассивка: Ваши автоатаки нанесут Магический урон в размере 4% от максимального Здоровья цели.</p> <strong>Цена:</strong> 3 800'
    });
    $("img[src='img/items/wits-end.gif']").easyTooltip({
        content: '<h4>Wit\'s End</h4> \
        <p>+40% Скорости атаки +30 Сопротивления магии. Пассивка: Ваши автоатаки наносят 42 дополнительного Магического урона. Пассивка: Ваши автоатаки увеличивают вашу Защиту от магии на 5 в течение 5 секунд (эффект суммируется до 4 раз).</p> <strong>Цена:</strong> 2 000'
    });
    $("img[src='img/items/wriggles-lantern.gif']").easyTooltip({
        content: '<h4>Wriggle\'s Lantern</h4> \
        <p>+23 Урона +30 Брони +12% Вампиризма. Пассивка: Ваши автоатаки прислужника или нейтрального монстра нанесут 425 дополнительного магического урона с вероятностью 20%. Активация: Размещает невидимый посох, открывающий обзор окружающей его области в течение 3 минут (восстановление 3 минуты).</p> <strong>Цена:</strong> 1 600'
    });
    $("img[src='img/items/deathfire-grasp.gif']").easyTooltip({
        content: '<h4>Deathfire Grasp</h4> \
        <p>+60 Силы магии +10 Регена маны / 5. Пассивка: Снижает Время восстановления способностей на 15%. Активация: Наносит Магический урон вражескому чемпиону в размере 30% от его текущего уровня Здоровья (+3.5% за каждые 100 Cилы магии), минимально 200 ед. урона (восстановление 60 секунд).</p> <strong>Цена:</strong> 2 610'
    });
    $("img[src='img/items/thornmail.gif']").easyTooltip({
        content: '<h4>Thornmail</h4> \
        <p>+100 Брони. Пассивка: При получении урона автоатками, возвращает в виде магического урона 30% полученного урона.</p> <strong>Цена:</strong> 2 000'
    });
    $("img[src='img/items/ionian-boots-of-lucidity.gif']").easyTooltip({
        content: '<h4>Ionian Boots of Lucidity</h4> \
        <p>Пассивка: Снижает Время восстановления способностей на 15%. Пассивка: Улучшенная скорость бега 2 (не складывается с другими сапогами).</p> <strong>Цена:</strong> 1 050'
    });
    $("img[src='img/items/frozen-mallet.gif']").easyTooltip({
        content: '<h4>Frozen Mallet</h4> \
        <p>+700 Здоровья +20 Урона. Пассивка: Ваши автоатаки снижают Скорость бега цели на 40% в течение 2.5 секунд (30% при атаке на расстоянии).</p> <strong>Цена:</strong> 3 250'
    });
    $("img[src='img/items/zekes-herald.gif']").easyTooltip({
        content: '<h4>Zeke\'s Herald</h4> \
        <p>+250 Здоровья. Пассивка: Снижает Время восстановления способностей на 15%. Аура: Добавляет вам и окружающим вас союзникам 12% Вампиризма и 20% Скорости атаки.</p> <strong>Цена:</strong> 2 145'
    });
    $("img[src='img/items/archangels-staff.gif']").easyTooltip({
        content: '<h4>Archangel\'s Staff</h4> \
        <p>+400 Маны +25 Регена маны / 5 +45 Силы магии Пассивка: 3% максимального запаса вашей Маны конвертируется в Силу магии. УНИКАЛЬНАЯ Пассивка: Каждый раз, как вы используете Способность, ваш максимальный запас Маны увеличивается на 4 (восстановление 3 секунды). Максимум +1000 маны. Не складывается с аналогичными эффектами предметов: Tear of the Goddess, Manamune.</p> <strong>Цена:</strong> 2 855'
    });
    $("img[src='img/items/locket-of-the-iron-solari.gif']").easyTooltip({
        content: '<h4>Locket of the Iron Solari</h4> \
        <p>+300 Здоровья +35 Брони УНИКАЛЬНАЯ Аура: Вы и ближайшие союзные чемпионы восстанавливают дополнительно 15 Здоровья в 5 секунд. УНИКАЛЬНАЯ Активация: На 5 секунд вы и окружающие вас союзники получаете щит, поглощающий до 50 (+10 за уровень) урона (восстановление 60 секунд).</p> <strong>Цена:</strong> 2 225'
    });
    $("img[src='img/items/ninja-tabi.gif']").easyTooltip({
        content: '<h4>Ninja Tabi</h4> \
        <p>+25 Брони. Пассивка: Снижает на 10% урон, получаемый от автоатак (кроме башен). Пассивка: Улучшенная скорость бега 2 (не складывается с другими сапогами).</p> <strong>Цена:</strong> 850'
    });
    $("img[src='img/items/mejais-soulstealer.gif']").easyTooltip({
        content: '<h4>Mejai\'s Soulstealer</h4> \
        <p>+20 Силы магии. Пассивка: Вы получаете 8 Силы магии за каждый стак, зарабатывая 2 стака за убийство или 1 стак за помощь в убийстве вражеского чемпиона (эффект суммируется до 20 раз). Вы теряетеся треть стаков при смерти. На 20 стаках Время восстановления способностей снижается на 15%.</p> <strong>Цена:</strong> 1 235'
    });
    $("img[src='img/items/philosophers-stone.gif']").easyTooltip({
        content: '<h4>Philosopher\'s Stone</h4> \
        <p>+18 Регена здоровья / 5 +8 Регена маны / 5. Пассивка: Генерирует 5 золота каждые 10 секунд.</p> <strong>Цена:</strong> 800'
    });
    $("img[src='img/items/quicksilver-sash.gif']").easyTooltip({
        content: '<h4>Quicksilver Sash</h4> \
        <p>+56 Сопротивления магии. Активация: Снимает все негативные эффекты с вашего чемпиона (восстановление 90 секунд).</p> <strong>Цена:</strong> 1 440'
    });
    $("img[src='img/items/youmuus-ghostblade.gif']").easyTooltip({
        content: '<h4>Youmuu\'s Ghostblade</h4> \
        <p>+30 Урона +15% Шанса крита. Пассивка: Снижает Время восстановления способностей на 15%. Пассивка: +20 Пробивания брони. Активация: Вы получаете 20% Скорости передвижения и 50% Скорости Атаки в течение 4 секунд. Автоатаки ближнего боя увеличивают длительность эффекта на 2 секунды, вплоть до максимума 8 секунд (восстановление 60 секунд).</p> \
        <strong>Цена:</strong> 2 687'
    });
    $("img[src='img/items/soul-shroud.gif']").easyTooltip({
        content: '<h4>Soul Shroud</h4> \
        <p>+520 Здоровья. Аура: Восстанавливает вам и окружающим вас союзникам 12 Маны каждые 5 секунд и снижает Время восстановления способностей на 10%.</p> \
        <strong>Цена:</strong> 2 285'
    });
    $("img[src='img/items/cloak-and-dagger.gif']").easyTooltip({
        content: '<h4>Cloak and Dagger</h4> \
        <p>+20% Скорости атаки +20% Шанса крита УНИКАЛЬНАЯ Пассивка: +35 Стойкости (Стойкость снижает время оглушения, замедления, провокации, запугивания, усыпления, немоты и неподвижности. Эффекты предметов со Стойкостью не суммируется.)</p> \
        <strong>Цена:</strong> 1 450'
    });
    $("img[src='img/items/malady.gif']").easyTooltip({
        content: '<h4>Malady</h4> \
        <p>+25 Силы магии +50% Скорости атаки УНИКАЛЬНАЯ Пассивка: Ваши автоатаки нанесут 20 дополнительного Магического урона и уменьшат на 6 Сопротивление магии в течение 8 секунд (эффект суммируется до 4 раз).</p> \
        <strong>Цена:</strong> 1 825'
    });
    $("img[src='img/items/augment-gravity.gif']").easyTooltip({
        content: '<h4>Augment: Gravity</h4> \
        <p>+3 Силы магии за уровень +200 Маны +10 Восстановления способностей +5 Регена маны / 5 Усиление способности: Дальность применения Gravity Field увеличивается на 30%.</p> \
        <strong>Цена:</strong> 1 000'
    });
    $("img[src='img/items/amplifying-tome.gif']").easyTooltip({
        content: '<h4>Amplifying Tome</h4> \
        <p>+20 Силы магии</p> \
        <strong>Цена:</strong> 435'
    });
    $("img[src='img/items/augment-death.gif']").easyTooltip({
        content: '<h4>Augment: Death</h4> \
        <p>+3 Силы магии за уровень +45 Силы магии Усиление способности: Death Ray воспламеняет врагов, нанося 30% дополнительного магического урона в течение 4 секунд.</p> \
        <strong>Цена:</strong> 1 000'
    });
    $("img[src='img/items/augment-power.gif']").easyTooltip({
        content: '<h4>Augment: Power</h4> \
        <p>+3 Силы магии за уровень +220 Здоровья +6 Регена здоровья / 5 Усиление способности: Power Transfer увеличивает скорость передвижения Viktorа на 30% в течение 3 секунд.</p> \
        <strong>Цена:</strong> 1 000'
    });
    $("img[src='img/items/avarice-blade.gif']").easyTooltip({
        content: '<h4>Avarice Blade</h4> \
        <p>+12% Шанса крита УНИКАЛЬНАЯ Пассивка: Генерирует 5 золота каждые 10 секунд.</p> \
        <strong>Цена:</strong> 750'
    });
    $("img[src='img/items/b-f-sword.gif']").easyTooltip({
        content: '<h4>B. F. Sword</h4> \
        <p>+45 Урона</p> \
        <strong>Цена:</strong> 1 650'
    });
    $("img[src='img/items/bilgewater-cutlass.gif']").easyTooltip({
        content: '<h4>Bilgewater Cutlass</h4> \
        <p>+35 Урона +15% Вампиризма УНИКАЛЬНАЯ Активация: Наносит 150 Магического урона и замедляет вражеского чемпиона на 50% в течение 3 секунд (восстановление 60 секунд).</p> \
        <strong>Цена:</strong> 1 825'
    });
    $("img[src='img/items/blasting-wand.gif']").easyTooltip({
        content: '<h4>Blasting Wand</h4> \
        <p>+40 Силы магии</p> \
        <strong>Цена:</strong> 860'
    });
    $("img[src='img/items/boots-of-speed.gif']").easyTooltip({
        content: '<h4>Boots of Speed</h4> \
        <p>Пассивка: Улучшенная скорость бега 1 (не складывается с другими сапогами).</p> \
        <strong>Цена:</strong> 350'
    });
    $("img[src='img/items/brawlers-gloves.gif']").easyTooltip({
        content: '<h4>Brawler\'s Gloves</h4> \
        <p>+8% Шанса крита</p> \
        <strong>Цена:</strong> 400'
    });
    $("img[src='img/items/catalyst-the-protector.gif']").easyTooltip({
        content: '<h4>Catalyst the Protector</h4> \
        <p>+290 Здоровья +325 Маны. Пассивка: При повышении уровня чемпиона восстанавливает 250 Здоровья и 200 Маны в течение 8 секунд.</p> \
        <strong>Цена:</strong> 1 325'
    });
    $("img[src='img/items/chain-vest.gif']").easyTooltip({
        content: '<h4>Chain Vest</h4> \
        <p>+45 Брони</p> \
        <strong>Цена:</strong> 700'
    });
    $("img[src='img/items/chalice-of-harmony.gif']").easyTooltip({
        content: '<h4>Chalice of Harmony</h4> \
        <p>+30 Сопротивления магии +7.5 Регена маны / 5. Пассивка: Увеличивает на 1% регенерацию Маны от каждого 1% потраченной Маны.</p> \
        <strong>Цена:</strong> 890'
    });
    $("img[src='img/items/cloak-of-agility.gif']").easyTooltip({
        content: '<h4>Cloak of Agility</h4> \
        <p>+18% Шанса крита</p> \
        <strong>Цена:</strong> 830'
    });
    $("img[src='img/items/cloth-armor.gif']").easyTooltip({
        content: '<h4>Cloth Armor</h4> \
        <p>+18 Брони</p> \
        <strong>Цена:</strong> 300'
    });
    $("img[src='img/items/dagger.gif']").easyTooltip({
        content: '<h4>Dagger</h4> \
        <p>+15% Скорости атаки</p> \
        <strong>Цена:</strong> 420'
    });
    $("img[src='img/items/dorans-blade.gif']").easyTooltip({
        content: '<h4>Doran\'s Blade</h4> \
        <p>+80 Здоровья +10 Урона +3% Вампиризма</p> \
        <strong>Цена:</strong> 475'
    });
    $("img[src='img/items/doransShield.gif']").easyTooltip({
        content: '<h4>Doran\'s Shield</h4> \
        <p>+120 Здоровья +10 Брони +8 Регена здоровья / 5</p> \
        <strong>Цена:</strong> 475'
    });
    $("img[src='img/items/eleisas-miracle.gif']").easyTooltip({
        content: '<h4>Eleisa\'s Miracle</h4> \
        <p>+25 Регена здоровья / 5 +20 Регена маны / 5 УНИКАЛЬНАЯ Пассивка: +35 Стойкости (Стойкость снижает время оглушения, замедления, провокации, запугивания, усыпления, немоты и неподвижности. Эффекты предметов со Стойкостью не суммируется.)</p> \
        <strong>Цена:</strong> 1 300'
    });
    $("img[src='img/items/elixir-of-agility.gif']").easyTooltip({
        content: '<h4>Elixir of Agility</h4> \
        <p>Использование: Добавляет 12-22% Скорости атаки, в зависимости от уровня чемпиона, и 8% Шанса крита в течение 4 минут.</p> \
        <strong>Цена:</strong> 250'
    });
    $("img[src='img/items/elixir-of-brilliance.gif']").easyTooltip({
        content: '<h4>Elixir of Brilliance</h4> \
        <p>Использование: Добавляет 20-40 Cилы магии, в зависимости от уровня чемпиона, и снижает время восстановления способностей на 10% в течение 4 минут.</p> \
        <strong>Цена:</strong> 250'
    });
    $("img[src='img/items/elixir-of-fortitude.gif']").easyTooltip({
        content: '<h4>Elixir of Fortitude</h4> \
        <p>Использование: Добавляет 140-235 Здоровья, в зависимости от уровня чемпиона, и 10 Урона в течение 4 минут.</p> \
        <strong>Цена:</strong> 250'
    });
    $("img[src='img/items/emblem-of-valor.gif']").easyTooltip({
        content: '<h4>Emblem of Valor</h4> \
        <p>+25 Брони. Аура: Вы и ближайшие союзные чемпионы восстанавливают дополнительно 10 Здоровья в 5 секунд.</p> \
        <strong>Цена:</strong> 900'
    });
    $("img[src='img/items/entropy.gif']").easyTooltip({
        content: '<h4>Entropy</h4> \
        <p>+275 Здоровья +70 Урона УНИКАЛЬНАЯ Пассивка: Ваши автоатаки имеют шанс 25% снизить Скорость передвижения цели на 30% в течение 2.5 секунд. УНИКАЛЬНАЯ Активация: Ваши автоатаки снижают Скорость передвижения цели на 30% в течение 5 секунд и наносят 80 чистого урона в течение 2.5 секунд (восстановление 60 секунд.</p> \
        <strong>Цена:</strong> 3 565'
    });
    $("img[src='img/items/executioners-calling.gif']").easyTooltip({
        content: '<h4>Executioner\'s Calling</h4> \
        <p>+18% Вампиризма +15% Шанса крита. Пассивка: Ваши автоатаки вешают на цель метку, которая наносит 4 дополнительного магического урона каждую секунду в течение 8 секунд. Активация: Наносит вражескому чемпиону Тяжкие Раны, снижая на 50% эффекты лечения и регенерации в течение 8 секунд (восстановление 20 секунд).</p> \
        <strong>Цена:</strong> 1 350'
    });
    $("img[src='img/items/faerie-charm.gif']").easyTooltip({
        content: '<h4>Faerie Charm</h4> \
        <p>+3 Регена маны / 5</p> \
        <strong>Цена:</strong> 180'
    });
    $("img[src='img/items/fiendishCodex.gif']").easyTooltip({
        content: '<h4>Fiendish Codex</h4> \
        <p>+30 Силы магии +7 Регена маны / 5. Пассивка: Снижает Время восстановления способностей на 10%.</p> \
        <strong>Цена:</strong> 1 245'
    });
    $("img[src='img/items/giants-belt.gif']").easyTooltip({
        content: '<h4>Giant\'s Belt</h4> \
        <p>+430 Здоровья</p> \
        <strong>Цена:</strong> 1 110'
    });
    $("img[src='img/items/glacial-shroud.gif']").easyTooltip({
        content: '<h4>Glacial Shroud</h4> \
        <p>+425 Маны +45 Брони. Пассивка: Снижает Время восстановления способностей на 15%.</p> \
        <strong>Цена:</strong> 1 525'
    });
    $("img[src='img/items/haunting-guise.gif']").easyTooltip({
        content: '<h4>Haunting Guise</h4> \
        <p>+25 Силы магии +200 Здоровья УНИКАЛЬНАЯ Пассивка: +20 Проникновения магии.</p> \
        <strong>Цена:</strong> 1 485'
    });
    $("img[src='img/items/health-potion.gif']").easyTooltip({
        content: '<h4>Health Potion</h4> \
        <p>Использование: Восстанавливает 150 Здоровья в течение 15 секунд.</p> \
        <strong>Цена:</strong> 35'
    });
    $("img[src='img/items/heart-of-gold.gif']").easyTooltip({
        content: '<h4>Heart of Gold</h4> \
        <p>+250 Здоровья. Пассивка: Генерирует 5 золота каждые 10 секунд.</p> \
        <strong>Цена:</strong> 825'
    });
    $("img[src='img/items/hexdrinker.gif']").easyTooltip({
        content: '<h4>Hexdrinker</h4> \
        <p>+25 Урона +30 Сопротивления магии. Пассивка: Перед тем, как вы получите Магический урон, при котором ваше Здоровье станет меньше 30% от максимального, вы получите щит, который поглотит 250 Магического урона за 5 секунд (восстановление 60 секунд).</p> \
        <strong>Цена:</strong> 1 400'
    });
    $("img[src='img/items/hextech-revolver.gif']").easyTooltip({
        content: '<h4>Hextech Revolver</h4> \
        <p>+40 Силы магии. Пассивка: +12% Магического вампиризма.</p> \
        <strong>Цена:</strong> 1 200'
    });
    $("img[src='img/items/hextech-sweeper.gif']").easyTooltip({
        content: '<h4>Hextech Sweeper</h4> \
        <p>+40 Силы магии +300 Здоровья. Пассивка: Снижает Время восстановления способностей на 10%. Пассивка: Ваши магические атаки делают цель (включая невидимок) видимой в течение 4 секунд. Активация: Выявляющая невидимок дымка открывает обзор области в течение 6 секунд (восстановление 60 секунд).</p> \
        <strong>Цена:</strong> 1 870'
    });
    $("img[src='img/items/ionic-spark.gif']").easyTooltip({
        content: '<h4>Ionic Spark</h4> \
        <p>+50% Скорости атаки +250 Здоровья. Пассивка: Каждая четвертая автоатака сопровождается цепной молнией, нанося дополнительно 110 магического урона (максимум 4 цели).</p> \
        <strong>Цена:</strong> 2 300'
    });
    $("img[src='img/items/kages-lucky-pick.gif']").easyTooltip({
        content: '<h4>Kage\'s Lucky Pick</h4> \
        <p>+25 Силы магии. Пассивка: Генерирует 5 золота каждые 10 секунд.</p> \
        <strong>Цена:</strong> 765'
    });
    $("img[src='img/items/kindlegem.gif']").easyTooltip({
        content: '<h4>Kindlegem</h4> \
        <p>+200 Здоровья. Пассивка: Снижает Время восстановления способностей на 10%.</p> \
        <strong>Цена:</strong> 850'
    });
    $("img[src='img/items/kitaes-bloodrazor.gif']").easyTooltip({
        content: '<h4>Kitae\'s Bloodrazor</h4> \
        <p>+30 Урона +40% Скорости атаки. Пассивка: Ваши автоатаки наносят дополнительный магический урон в размере 2.5% от максимального уровня здоровья цели.</p> \
        <strong>Цена:</strong> 2 725'
    });
    $("img[src='img/items/leviathan.gif']").easyTooltip({
        content: '<h4>Leviathan</h4> \
        <p>+180 Здоровья. Пассивка: Ваш чемпион получает 32 Здоровья за каждый стак, за убийство чемпиона вы получаете 2 стака или 1 стак за помощь (эффект суммируется до 20 раз). Вы теряете треть стаков при смерти. На 20 стаках ваш чемпион получает на 15% урона меньше.</p> \
        <strong>Цена:</strong> 1 275'
    });
    $("img[src='img/items/long-sword.gif']").easyTooltip({
        content: '<h4>Long Sword</h4> \
        <p>+10 Урона</p> \
        <strong>Цена:</strong> 415'
    });
    $("img[src='img/items/madreds-bloodrazor.gif']").easyTooltip({
        content: '<h4>Madred\'s Bloodrazor</h4> \
        <p>+40 Урона +40% Скорости атаки +25 Брони. Пассивка: Ваши автоатаки нанесут Магический урон в размере 4% от максимального Здоровья цели.</p> \
        <strong>Цена:</strong> 3 800'
    });
    $("img[src='img/items/madreds-razors.gif']").easyTooltip({
        content: '<h4>Madred\'s Razors</h4> \
        <p>+15 Урона +23 Брони. Пассивка: Ваши автоатаки прислужника или нейтрального монстра нанесут 300 дополнительного магического урона с вероятностью 20%.</p> \
        <strong>Цена:</strong> 1 000'
    });
    $("img[src='img/items/mana-manipulator.gif']").easyTooltip({
        content: '<h4>Mana Manipulator</h4> \
        <p>Аура: Вы и ближайшие союзные чемпионы восстанавливают дополнительно 7.2 Маны в 5 секунд.</p> \
        <strong>Цена:</strong> 475'
    });
    $("img[src='img/items/mana-potion.gif']").easyTooltip({
        content: '<h4>Mana Potion</h4> \
        <p>Использование: Восстанавливает 100 Маны в течение 15 секунд.</p> \
        <strong>Цена:</strong> 40'
    });
    $("img[src='img/items/maw-of-malmortius.gif']").easyTooltip({
        content: '<h4>Maw of Malmortius</h4> \
        <p>+55 Урона +36 Сопротивления магии. Пассивка: Перед тем, как вы получите Магический урон, при котором ваше Здоровье станет меньше 30% от максимального, вы получите щит, который поглотит 400 Магического урона за 5 секунд (восстановление 60 секунд). Пассивка: +1 Физического урона за каждые 2.5% потерянного уровня Здоровья.</p> \
        <strong>Цена:</strong> 3 300'
    });
    $("img[src='img/items/meki-pendant.gif']").easyTooltip({
        content: '<h4>Meki Pendant</h4> \
        <p>+7 Регена маны / 5</p> \
        <strong>Цена:</strong> 390'
    });
    $("img[src='img/items/moonflair-spellblade.gif']").easyTooltip({
        content: '<h4>Moonflair Spellblade</h4> \
        <p>+50 Силы магии. Пассивка: +35 Стойкости (Стойкость снижает время оглушения, замедления, провокации, запугивания, усыпления, немоты и неподвижности. Эффекты предметов со Стойкостью не суммируется.)</p> \
        <strong>Цена:</strong> 1 200'
    });
    $("img[src='img/items/nashors-tooth.gif']").easyTooltip({
        content: '<h4>Nashor\'s Tooth</h4> \
        <p>+50% Скорости атаки +65 Силы магии +10 Регена маны / 5. Пассивка: Снижает Время восстановления способностей на 25%.</p> \
        <strong>Цена:</strong> 2 735'
    });
    $("img[src='img/items/needlessly-large-rod.gif']").easyTooltip({
        content: '<h4>Needlessly Large Rod</h4> \
        <p>+80 Силы магии</p> \
        <strong>Цена:</strong> 1 600'
    });
    $("img[src='img/items/negatron-cloak.gif']").easyTooltip({
        content: '<h4>Negatron Cloak</h4> \
        <p>+48 Сопротивления магии</p> \
        <strong>Цена:</strong> 740'
    });
    $("img[src='img/items/odyns-veil.gif']").easyTooltip({
        content: '<h4>Odyn\'s Veil</h4> \
        <p>+350 Здоровья +350 Маны +50 Сопротивления магии. Пассивка: Снижает и накапливает 10% нанесенного вам магического урона. Активация: Наносит всем врагам вокруг 200 + (накопленный заряд магии) магического урона, но не более 400 единиц (восстановление 90 секунд).</p> \
        <strong>Цена:</strong> 2 715'
    });
    $("img[src='img/items/oracles-elixir.gif']").easyTooltip({
        content: '<h4>Oracle\'s Elixir</h4> \
        <p>Использование: Вы обнаруживаете невидимок пока не умрете.</p> \
        <strong>Цена:</strong> 400'
    });
    $("img[src='img/items/phage.gif']").easyTooltip({
        content: '<h4>Phage</h4> \
        <p>+225 Здоровья +18 Урона. Пассивка: Ваша автоатака с вероятностью 25% снизит скорость передвижения цели на 30% в течение 2.5 секунд.</p> \
        <strong>Цена:</strong> 1 315'
    });
    $("img[src='img/items/pickaxe.gif']").easyTooltip({
        content: '<h4>Pickaxe</h4> \
        <p>+25 Урона</p> \
        <strong>Цена:</strong> 975'
    });
    $("img[src='img/items/prospectors-blade.gif']").easyTooltip({
        content: '<h4>Prospector\'s Blade</h4> \
        <p>+20 Урона +5% Вампиризма. Пассивка: +200 Здоровья (не складывается с другими Prospector-предметами).</p> \
        <strong>Цена:</strong> 950'
    });
    $("img[src='img/items/prospectors-ring.gif']").easyTooltip({
        content: '<h4>Prospector\'s Ring </h4> \
        <p>+30 Силы магии +7 Регена маны / 5. Пассивка: +200 Здоровья (не складывается с другими Prospector-предметами).</p> \
        <strong>Цена:</strong> 950'
    });
    $("img[src='img/items/recurve-bow.gif']").easyTooltip({
        content: '<h4>Recurve Bow</h4> \
        <p>+40% Скорости атаки</p> \
        <strong>Цена:</strong> 1 050'
    });
    $("img[src='img/items/regrowth-pendant.gif']").easyTooltip({
        content: '<h4>Regrowth Pendant</h4> \
        <p>+15 Регена здоровья / 5</p> \
        <strong>Цена:</strong> 435'
    });
    $("img[src='img/items/rejuvenation-bead.gif']").easyTooltip({
        content: '<h4>Rejuvenation Bead</h4> \
        <p>+8 Регена здоровья / 5</p> \
        <strong>Цена:</strong> 250'
    });
    $("img[src='img/items/ruby-crystal.gif']").easyTooltip({
        content: '<h4>Ruby Crystal</h4> \
        <p>+180 Здоровья</p> \
        <strong>Цена:</strong> 475'
    });
    $("img[src='img/items/sanguine-blade.gif']").easyTooltip({
        content: '<h4>Sanguine Blade</h4> \
        <p>+60 Урона +15% Вампиризма. Пассивка: Ваши автоатаки увеличивают Физический урон на 5 и Вампиризм на 1% в течение 4 секунд (эффект суммируется до 7 раз).</p> \
        <strong>Цена:</strong> 2 900'
    });
    $("img[src='img/items/sapphire-crystal.gif']").easyTooltip({
        content: '<h4>Sapphire Crystal</h4> \
        <p>+200 Маны</p> \
        <strong>Цена:</strong> 400'
    });
    $("img[src='img/items/sheen.gif']").easyTooltip({
        content: '<h4>Sheen</h4> \
        <p>+250 Маны +25 Силы магии. Пассивка: После использования способности, ваша следующая автоатака нанесет дополнительный Физический урон в размере вашего базового Физического урона (восстановление 2 секунды). Не складывается с аналогичными эффектами предметов: Trinity Force, Lich Bane.</p> \
        <strong>Цена:</strong> 1 260'
    });
    $("img[src='img/items/sight-ward.gif']").easyTooltip({
        content: '<h4>Sight Ward</h4> \
        <p>Использование: Размещает невидимый посох, открывающий обзор окружающей его области в течение 3 минут.</p> \
        <strong>Цена:</strong> 75'
    });
    $("img[src='img/items/stinger.gif']").easyTooltip({
        content: '<h4>Stinger</h4> \
        <p>+40% Скорости атаки. Пассивка: Снижает Время восстановления способностей на 10%.</p> \
        <strong>Цена:</strong> 1 090'
    });
    $("img[src='img/items/tear-of-the-goddess.gif']").easyTooltip({
        content: '<h4>Tear of the Goddess</h4> \
        <p>+350 Маны +7 Регена маны / 5. Пассивка: Каждый раз, как вы используете Способность, ваш максимальный запас Маны увеличивается на 4 (восстановление 3 секунды). Максимально +1000 Маны. Не складывается с аналогичными эффектами предметов: Archangel\'s Staff, Manamune.</p> \
        <strong>Цена:</strong> 995'
    });
    $("img[src='img/items/the-hex-core.gif']").easyTooltip({
        content: '<h4>The Lightbringer </h4> \
        <p>+50% Скорости атаки +20 Урона. Пассивка: Ваши автоатаки делают цель видимой в течение 5 секунд.</p> \
        <strong>Цена:</strong> 1 750'
    });
    $("img[src='img/items/tiamat.gif']").easyTooltip({
        content: '<h4>Tiamat</h4> \
        <p>+50 Урона +15 Регена здоровья / 5 +5 Регена маны / 5 Пассивка: Ваши автоатаки наносят 50% физического урона в небольшой области вокруг цели (35% для атак дального действия).</p> \
        <strong>Цена:</strong> 2 070'
    });
    $("img[src='img/items/vision-ward.gif']").easyTooltip({
        content: '<h4>Vision Ward</h4> \
        <p>Использование: Размещает невидимый посох, открывающий обзор окружающей его области и невидимок в ней в течение 3 минут.</p> \
        <strong>Цена:</strong> 125'
    });
    $("img[src='img/items/wardens-mail.gif']").easyTooltip({
        content: '<h4>Warden\'s Mail</h4> \
        <p>+50 Брони +20 Регена здоровья / 5. Пассивка: При получении урона автоатакой имеется 20% шанс замедлить атакующего на 35% в течение 3 секунд.</p> \
        <strong>Цена:</strong> 1 350'
    });
    $("img[src='img/items/zeal.gif']").easyTooltip({
        content: '<h4>Zeal</h4> \
        <p>+20% Скорости атаки +10% Шанса крита +8% Скорости бега</p> \
        <strong>Цена:</strong> 1 195'
    });
    $("img[src='img/items/oracles-extract.gif']").easyTooltip({
        content: '<h4>Oracle\'s Extract</h4> \
        <p>Использование: Вы обнаруживаете невидимок в течение 5 минут или пока не умрете.</p> \
        <strong>Цена:</strong> 250'
    });
}