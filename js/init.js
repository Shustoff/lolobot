/* Инициализация всех персонажей */

function initAhri() {
    var out = initMain(Characters.ahri, Images.ahri, Items.sorcerersShoes, Items.rylaisCrystalScepter, Items.willOfTheAncients, Items.rabadonsDeathcap, Items.morellosEvilTome, Items.voidStaff);
    out += initSkills(Spells.ignite, Spells.flash, Skills.orbOfDeception, Skills.charm, Skills.foxFire, Skills.orbOfDeception, Skills.orbOfDeception, Skills.spiritRush, Skills.orbOfDeception, Skills.foxFire, Skills.orbOfDeception, Skills.foxFire, Skills.spiritRush, Skills.foxFire, Skills.foxFire, Skills.charm, Skills.charm, Skills.spiritRush, Skills.charm, Skills.charm);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltip();
    initTooltipAhri();
}


function initAkali() {
    var out = initMain(Characters.akali, Images.akali, Items.mercurysTreads, Items.rylaisCrystalScepter, Items.lichBane, Items.rabadonsDeathcap, Items.hextechGunblade, Items.voidStaff);
    out += initSkills(Spells.ignite, Spells.flash, Skills.markOfTheAssassin, Skills.twilightShroud, Skills.markOfTheAssassin, Skills.crescentSlash, Skills.markOfTheAssassin, Skills.shadowDance, Skills.markOfTheAssassin, Skills.crescentSlash, Skills.markOfTheAssassin, Skills.crescentSlash, Skills.shadowDance, Skills.crescentSlash, Skills.crescentSlash, Skills.twilightShroud, Skills.twilightShroud, Skills.shadowDance, Skills.twilightShroud, Skills.twilightShroud);
    out += initOffensive(1, 3, 3, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfStrength, Runes.greaterSealOfVitality, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipAkali();
}

function initAlistar() {
    var out = initMain(Characters.alistar, Images.alistar, Items.bootsOfMobility, Items.aegisOfTheLegion, Items.shurelyasReverie, Items.spiritVisage, Items.randuinsOmen, Items.trinityForce);
    out += initSkills(Spells.clairvoyance, Spells.flash, Skills.pulverize, Skills.headbutt, Skills.triumphantRoar, Skills.triumphantRoar, Skills.triumphantRoar, Skills.unbreakableWill, Skills.triumphantRoar, Skills.headbutt, Skills.triumphantRoar, Skills.headbutt, Skills.unbreakableWill, Skills.headbutt, Skills.headbutt, Skills.pulverize, Skills.pulverize, Skills.unbreakableWill, Skills.pulverize, Skills.pulverize);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 3, 0, 4, 2, 0, 4, 0, 0, 0, 0, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipAlistar();
}

function initAmumu() {
    var out = initMain(Characters.amumu, Images.amumu, Items.bootsOfSwiftness, Items.sunfireCape, Items.abyssalScepter, Items.eleisasMiracle, Items.bansheesVeil, Items.guardianAngel);
    out += initSkills(Spells.teleport, Spells.flash, Skills.bandageToss, Skills.tantrum, Skills.tantrum, Skills.despair, Skills.tantrum, Skills.curseOfTheSadMummy, Skills.tantrum, Skills.despair, Skills.tantrum, Skills.despair, Skills.curseOfTheSadMummy, Skills.despair, Skills.despair, Skills.bandageToss, Skills.bandageToss, Skills.curseOfTheSadMummy, Skills.bandageToss, Skills.bandageToss);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 2, 4, 3, 0, 1, 0, 1, 0, 0, 0, 3, 0, 1);
    out += initUtility(1, 3, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipAmumu();
}

function initAnivia() {
    var out = initMain(Characters.anivia, Images.anivia, Items.sorcerersShoes, Items.rodOfAges, Items.rabadonsDeathcap, Items.zhonyasHourglass, Items.voidStaff, Items.willOfTheAncients);
    out += initSkills(Spells.ignite, Spells.flash, Skills.flashFrost, Skills.frostbite, Skills.frostbite, Skills.crystallize, Skills.frostbite, Skills.glacialStorm, Skills.frostbite, Skills.flashFrost, Skills.frostbite, Skills.flashFrost, Skills.glacialStorm, Skills.flashFrost, Skills.flashFrost, Skills.crystallize, Skills.crystallize, Skills.glacialStorm, Skills.crystallize, Skills.crystallize);
    out += initOffensive(1, 0, 4, 0, 0, 4, 0, 0, 0, 1, 2, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipAnivia();
}

function initAnnie() {
    var out = initMain(Characters.annie, Images.annie, Items.doransRing, Items.rodOfAges, Items.rylaisCrystalScepter, Items.rabadonsDeathcap, Items.voidStaff, Items.zhonyasHourglass);
    out += initSkills(Spells.ignite, Spells.flash, Skills.disintegrate, Skills.incinerate, Skills.disintegrate, Skills.moltenShield, Skills.disintegrate, Skills.tibbers, Skills.disintegrate, Skills.incinerate, Skills.disintegrate, Skills.incinerate, Skills.tibbers, Skills.incinerate, Skills.incinerate, Skills.moltenShield, Skills.moltenShield, Skills.tibbers, Skills.moltenShield, Skills.moltenShield);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 1, 3, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipAnnie();
}

function initAshe() {
    var out = initMain(Characters.ashe, Images.ashe, Items.berserkersGreaves, Items.infinityEdge, Items.phantomDancer, Items.lastWhisper, Items.theBloodthirster, Items.guardianAngel);
    out += initSkills(Spells.heal, Spells.flash, Skills.volley, Skills.hawkshot, Skills.frostShot, Skills.volley, Skills.volley, Skills.enchantedCrystalArrow, Skills.volley, Skills.frostShot, Skills.volley, Skills.frostShot, Skills.enchantedCrystalArrow, Skills.frostShot, Skills.frostShot, Skills.hawkshot, Skills.hawkshot, Skills.enchantedCrystalArrow, Skills.hawkshot, Skills.hawkshot);
    out += initOffensive(0, 3, 0, 1, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(1, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipAshe();
}

function initBlitzcrank() {
    var out = initMain(Characters.blitzcrank, Images.blitzcrank, Items.manamune, Items.mercurysTreads, Items.frozenHeart, Items.bansheesVeil, Items.trinityForce, Items.guardianAngel);
    out += initSkills(Spells.flash, Spells.ghost, Skills.rocketGrab, Skills.powerfist, Skills.overdrive, Skills.powerfist, Skills.overdrive, Skills.staticField, Skills.powerfist, Skills.overdrive, Skills.powerfist, Skills.overdrive, Skills.staticField, Skills.powerfist, Skills.overdrive, Skills.rocketGrab, Skills.rocketGrab, Skills.staticField, Skills.rocketGrab, Skills.rocketGrab);
    out += initOffensive(1, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0);
    out += initUtility(0, 0, 3, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfFortitude, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipBlitzkrank();
}

function initBrand() {
    var out = initMain(Characters.brand, Images.brand, Items.doransRing, Items.rabadonsDeathcap, Items.voidStaff, Items.rylaisCrystalScepter, Items.zhonyasHourglass, Items.willOfTheAncients);
    out += initSkills(Spells.flash, Spells.ignite, Skills.pillarOfFlame, Skills.sear, Skills.conflagration, Skills.pillarOfFlame, Skills.pillarOfFlame, Skills.pyroclasm, Skills.pillarOfFlame, Skills.conflagration, Skills.pillarOfFlame, Skills.conflagration, Skills.pyroclasm, Skills.conflagration, Skills.conflagration, Skills.sear, Skills.sear, Skills.pyroclasm, Skills.sear, Skills.sear);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipBrand();
}

function initCaitlyn() {
    var out = initMain(Characters.caitlyn, Images.caitlyn, Items.berserkersGreaves, Items.infinityEdge, Items.theBloodthirster, Items.phantomDancer, Items.bansheesVeil, Items.lastWhisper);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.yordleSnapTrap, Skills.piltoverPeacemaker, Skills.piltoverPeacemaker, Skills.caliberNet, Skills.piltoverPeacemaker, Skills.aceInTheHole, Skills.piltoverPeacemaker, Skills.caliberNet, Skills.piltoverPeacemaker, Skills.caliberNet, Skills.aceInTheHole, Skills.caliberNet, Skills.caliberNet, Skills.yordleSnapTrap, Skills.yordleSnapTrap, Skills.aceInTheHole, Skills.yordleSnapTrap, Skills.yordleSnapTrap);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipCaytlin();
}

function initCassiopeia() {
    var out = initMain(Characters.cassiopeia, Images.cassiopeia, Items.sorcerersShoes, Items.rabadonsDeathcap, Items.rylaisCrystalScepter, Items.willOfTheAncients, Items.bansheesVeil, Items.voidStaff);
    out += initSkills(Spells.flash, Spells.ignite, Skills.noxiousBlast, Skills.twinFang, Skills.noxiousBlast, Skills.miasma, Skills.noxiousBlast, Skills.petrifyingGaze, Skills.noxiousBlast, Skills.twinFang, Skills.noxiousBlast, Skills.twinFang, Skills.petrifyingGaze, Skills.twinFang, Skills.twinFang, Skills.miasma, Skills.miasma, Skills.petrifyingGaze, Skills.miasma, Skills.miasma);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipCassiopeia();
}

function initChogath() {
    var out = initMain(Characters.chogath, Images.chogath, Items.doransRing, Items.mercurysTreads, Items.rodOfAges, Items.frozenHeart, Items.forceOfNature, Items.rabadonsDeathcap);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.rupture, Skills.vorpalSpikes, Skills.feralScream, Skills.feralScream, Skills.feralScream, Skills.feast, Skills.feralScream, Skills.vorpalSpikes, Skills.feralScream, Skills.vorpalSpikes, Skills.feast, Skills.vorpalSpikes, Skills.vorpalSpikes, Skills.rupture, Skills.rupture, Skills.feast, Skills.rupture, Skills.rupture);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 1, 3, 0, 4, 2, 1, 1, 0, 0, 0, 3, 3, 0, 2, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipChogath();
}

function initCorki() {
    var out = initMain(Characters.corki, Images.corki, Items.berserkersGreaves, Items.trinityForce, Items.theBloodthirster, Items.bansheesVeil, Items.lastWhisper, Items.infinityEdge);
    out += initSkills(Spells.flash, Spells.cleanse, Skills.phosphorusBomb, Skills.valkyrie, Skills.phosphorusBomb, Skills.gatlingGun, Skills.phosphorusBomb, Skills.missileBarrage, Skills.phosphorusBomb, Skills.gatlingGun, Skills.phosphorusBomb, Skills.gatlingGun, Skills.missileBarrage, Skills.gatlingGun, Skills.gatlingGun, Skills.valkyrie, Skills.valkyrie, Skills.missileBarrage, Skills.valkyrie, Skills.valkyrie);
    out += initOffensive(0, 3, 0, 1, 4, 0, 0, 4, 1, 0, 3, 1, 0, 0, 3, 0, 1);
    out += initDefense(1, 1, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfClarity, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipCorki();
}

function initMundo() {
    var out = initMain(Characters.drmundo, Images.drMundo, Items.mercurysTreads, Items.warmogsArmor, Items.forceOfNature, Items.atmasImpaler, Items.warmogsArmor, Items.warmogsArmor);
    out += initSkills(Spells.ghost, Spells.exhaust, Skills.infectedCleaver, Skills.burningAgony, Skills.infectedCleaver, Skills.masochism, Skills.infectedCleaver, Skills.sadism, Skills.infectedCleaver, Skills.masochism, Skills.infectedCleaver, Skills.masochism, Skills.sadism, Skills.masochism, Skills.burningAgony, Skills.masochism, Skills.burningAgony, Skills.sadism, Skills.burningAgony, Skills.burningAgony);
    out += initOffensive(1, 3, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 3, 0, 1, 0, 0, 0, 3, 3, 0, 0, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipMundo();
}

function initEvelynn() {
    var out = initMain(Characters.evelynn, Images.evelynn, Items.bootsOfMobility, Items.trinityForce, Items.guinsoosRageblade, Items.guardianAngel, Items.hextechGunblade, Items.bansheesVeil);
    out += initSkills(Spells.ignite, Spells.flash, Skills.shadowWalk, Skills.ravage, Skills.shadowWalk, Skills.hateSpike, Skills.ravage, Skills.maliceAndSpite, Skills.ravage, Skills.ravage, Skills.shadowWalk, Skills.ravage, Skills.maliceAndSpite, Skills.hateSpike, Skills.hateSpike, Skills.hateSpike, Skills.hateSpike, Skills.maliceAndSpite, Skills.shadowWalk, Skills.shadowWalk);
    out += initOffensive(1, 3, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 2, 0, 1, 4, 0, 0, 4, 0, 1, 2, 2, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfCelerity, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipEvelynn();
}

function initEzreal() {
    var out = initMain(Characters.ezreal, Images.ezreal, Items.theBrutalizer, Items.trinityForce, Items.theBlackCleaver, Items.theBloodthirster, Items.madredsBloodrazor, Items.infinityEdge);
    out += initSkills(Spells.ignite, Spells.ghost, Skills.mysticShot, Skills.arcaneShift, Skills.mysticShot, Skills.essenceFlux, Skills.mysticShot, Skills.trueshotBarrage, Skills.mysticShot, Skills.arcaneShift, Skills.mysticShot, Skills.arcaneShift, Skills.trueshotBarrage, Skills.arcaneShift, Skills.arcaneShift, Skills.essenceFlux, Skills.essenceFlux, Skills.trueshotBarrage, Skills.essenceFlux, Skills.essenceFlux);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 3, 1, 0, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfClarity, Runes.greaterGlyphOfCelerity, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipEzreal();
}

function initFiddlesticks() {
    var out = initMain(Characters.fiddlesticks, Images.fiddlesticks, Items.sorcerersShoes, Items.rodOfAges, Items.rabadonsDeathcap, Items.abyssalScepter, Items.zhonyasHourglass, Items.willOfTheAncients);
    out += initSkills(Spells.flash, Spells.teleport, Skills.drain, Skills.darkWind, Skills.drain, Skills.terrify, Skills.darkWind, Skills.crowstorm, Skills.drain, Skills.drain, Skills.drain, Skills.darkWind, Skills.crowstorm, Skills.darkWind, Skills.darkWind, Skills.terrify, Skills.terrify, Skills.crowstorm, Skills.terrify, Skills.terrify);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 0, 3, 0, 4, 3, 1, 0, 0, 0, 3, 1, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfPotency, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipFiddle();
}

function initFiora() {
    var out = initMain(Characters.fiora, Images.fiora, Items.mercurysTreads, Items.witsEnd, Items.wrigglesLantern, Items.madredsBloodrazor, Items.theBloodthirster, Items.guardianAngel);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.riposte, Skills.burstOfSpeed, Skills.riposte, Skills.lunge, Skills.riposte, Skills.bladeWaltz, Skills.riposte, Skills.burstOfSpeed, Skills.riposte, Skills.burstOfSpeed, Skills.bladeWaltz, Skills.burstOfSpeed, Skills.burstOfSpeed, Skills.lunge, Skills.lunge, Skills.bladeWaltz, Skills.lunge, Skills.lunge);
    out += initOffensive(1, 3, 0, 0, 4, 0, 1, 4, 1, 0, 0, 0, 3, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipFiora();
}

function initFizz() {
    var out = initMain(Characters.fizz, Images.fizz, Items.ionianBootsOfLucidity, Items.lichBane, Items.rabadonsDeathcap, Items.deathfireGrasp, Items.rylaisCrystalScepter, Items.abyssalScepter);
    out += initSkills(Spells.ghost, Spells.ignite, Skills.playful, Skills.urchinStrike, Skills.seastoneTrident, Skills.urchinStrike, Skills.seastoneTrident, Skills.chumTheWaters, Skills.urchinStrike, Skills.urchinStrike, Skills.urchinStrike, Skills.seastoneTrident, Skills.chumTheWaters, Skills.seastoneTrident, Skills.seastoneTrident, Skills.playful, Skills.playful, Skills.chumTheWaters, Skills.playful, Skills.playful);
    out += initOffensive(1, 0, 4, 0, 1, 4, 1, 0, 0, 1, 0, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfFocus, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipFizz();
}

function initGalio() {
    var out = initMain(Characters.galio, Images.galio, Items.bansheesVeil, Items.aegisOfTheLegion, Items.abyssalScepter, Items.forceOfNature, Items.thornmail, Items.guardianAngel);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.resoluteSmite, Skills.bulwark, Skills.resoluteSmite, Skills.righteousGust, Skills.resoluteSmite, Skills.idolOfDurand, Skills.resoluteSmite, Skills.bulwark, Skills.resoluteSmite, Skills.bulwark, Skills.idolOfDurand, Skills.righteousGust, Skills.righteousGust, Skills.bulwark, Skills.bulwark, Skills.idolOfDurand, Skills.righteousGust, Skills.righteousGust);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 0, 2, 1, 0, 0, 1, 0, 3, 3, 3, 1);
    out += initUtility(1, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipGalio();
}

function initGangplank() {
    var out = initMain(Characters.gangplank, Images.gangplank, Items.ionianBootsOfLucidity, Items.trinityForce, Items.infinityEdge, Items.phantomDancer, Items.lastWhisper, Items.atmasImpaler);
    out += initSkills(Spells.ghost, Spells.exhaust, Skills.parrrley, Skills.removeScurvy, Skills.parrrley, Skills.raiseMorale, Skills.parrrley, Skills.cannonBarrage, Skills.parrrley, Skills.removeScurvy, Skills.parrrley, Skills.removeScurvy, Skills.cannonBarrage, Skills.removeScurvy, Skills.removeScurvy, Skills.raiseMorale, Skills.raiseMorale, Skills.cannonBarrage, Skills.raiseMorale, Skills.raiseMorale);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 3, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfAlacrity, Runes.greaterGlyphOfCelerity, Runes.greaterQuintOfFuror);
    block.html(out);
    initTooltipGangplank();
}

function initGaren() {
    var out = initMain(Characters.garen, Images.garen, Items.bootsOfSwiftness, Items.infinityEdge, Items.frozenMallet, Items.phantomDancer, Items.atmasImpaler, Items.zekesHerald);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.judgment, Skills.decisiveStrike, Skills.judgment, Skills.courage, Skills.judgment, Skills.demacianJustice, Skills.judgment, Skills.decisiveStrike, Skills.judgment, Skills.decisiveStrike, Skills.demacianJustice, Skills.decisiveStrike, Skills.decisiveStrike, Skills.courage, Skills.courage, Skills.demacianJustice, Skills.courage, Skills.courage);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipGaren();
}

function initGragas() {
    var out = initMain(Characters.gragas, Images.gragas, Items.mercurysTreads, Items.rodOfAges, Items.rabadonsDeathcap, Items.willOfTheAncients, Items.voidStaff, Items.lichBane);
    out += initSkills(Spells.flash, Spells.ignite, Skills.barrelRoll, Skills.bodySlam, Skills.barrelRoll, Skills.drunkenRage, Skills.barrelRoll, Skills.explosiveCask, Skills.barrelRoll, Skills.bodySlam, Skills.barrelRoll, Skills.bodySlam, Skills.explosiveCask, Skills.bodySlam, Skills.bodySlam, Skills.drunkenRage, Skills.drunkenRage, Skills.explosiveCask, Skills.drunkenRage, Skills.drunkenRage);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfVitality, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipGragas();
}

function initGraves() {
    var out = initMain(Characters.graves, Images.graves, Items.berserkersGreaves, Items.theBloodthirster, Items.phantomDancer, Items.infinityEdge, Items.frozenMallet, Items.theBlackCleaver);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.buckshot, Skills.quickDraw, Skills.buckshot, Skills.smokeScreen, Skills.buckshot, Skills.collateralDamage, Skills.buckshot, Skills.quickDraw, Skills.buckshot, Skills.quickDraw, Skills.collateralDamage, Skills.quickDraw, Skills.quickDraw, Skills.smokeScreen, Skills.smokeScreen, Skills.collateralDamage, Skills.smokeScreen, Skills.smokeScreen);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 3, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipGraves();
}

function initHecarim() {
    var out = initMain(Characters.hecarim, Images.hecarim, Items.mercurysTreads, Items.trinityForce, Items.randuinsOmen, Items.forceOfNature, Items.theBloodthirster, Items.hextechGunblade);
    out += initSkills(Spells.smite, Spells.ghost, Skills.rampage, Skills.spiritOfDread, Skills.rampage, Skills.devastatingCharge, Skills.rampage, Skills.onslaughtOfShadows, Skills.rampage, Skills.spiritOfDread, Skills.rampage, Skills.spiritOfDread, Skills.onslaughtOfShadows, Skills.spiritOfDread, Skills.spiritOfDread, Skills.devastatingCharge, Skills.devastatingCharge, Skills.onslaughtOfShadows, Skills.devastatingCharge, Skills.devastatingCharge);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(1, 2, 3, 2, 4, 0, 0, 1, 0, 1, 0, 3, 0, 3, 0, 1);
    out += initUtility(0, 0, 3, 1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipHecarim();
}

function initHeimerdinger() {
    var out = initMain(Characters.heimerdinger, Images.heimerdinger, Items.sorcerersShoes, Items.rylaisCrystalScepter, Items.zhonyasHourglass, Items.archangelsStaff, Items.abyssalScepter, Items.willOfTheAncients);
    out += initSkills(Spells.flash, Spells.teleport, Skills.evolutionTurret, Skills.hextechMicroRockets, Skills.hextechMicroRockets, Skills.evolutionTurret, Skills.evolutionTurret, Skills.upgrade, Skills.concussionGrenade, Skills.hextechMicroRockets, Skills.hextechMicroRockets, Skills.hextechMicroRockets, Skills.evolutionTurret, Skills.evolutionTurret, Skills.upgrade, Skills.concussionGrenade, Skills.concussionGrenade, Skills.upgrade, Skills.concussionGrenade, Skills.concussionGrenade);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 1, 3, 0, 0, 3, 0, 4, 0, 0, 1, 4, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfFocus, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipHeimerdinger();
}

function initIrelia() {
    var out = initMain(Characters.irelia, Images.irelia, Items.mercurysTreads, Items.trinityForce, Items.forceOfNature, Items.shurelyasReverie, Items.randuinsOmen, Items.guardianAngel);
    out += initSkills(Spells.ghost, Spells.ignite, Skills.bladesurge, Skills.equilibriumStrike, Skills.equilibriumStrike, Skills.hitenStyle, Skills.equilibriumStrike, Skills.transcendentBlades, Skills.equilibriumStrike, Skills.bladesurge, Skills.equilibriumStrike, Skills.bladesurge, Skills.transcendentBlades, Skills.bladesurge, Skills.bladesurge, Skills.hitenStyle, Skills.hitenStyle, Skills.transcendentBlades, Skills.hitenStyle, Skills.hitenStyle);
    out += initOffensive(1, 3, 0, 0, 4, 4, 0, 0, 1, 1, 0, 0, 3, 0, 3, 0, 1);
    out += initDefense(0, 3, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipIrelia();
}

function initJanna() {
    var out = initMain(Characters.janna, Images.janna, Items.ionianBootsOfLucidity, Items.aegisOfTheLegion, Items.shurelyasReverie, Items.locketOfTheIronSolari, Items.bansheesVeil, Items.frozenHeart);
    out += initSkills(Spells.flash, Spells.clairvoyance, Skills.eyeOfTheStorm, Skills.howlingGale, Skills.eyeOfTheStorm, Skills.zephyr, Skills.eyeOfTheStorm, Skills.monsoon, Skills.eyeOfTheStorm, Skills.zephyr, Skills.eyeOfTheStorm, Skills.zephyr, Skills.zephyr, Skills.zephyr, Skills.monsoon, Skills.howlingGale, Skills.howlingGale, Skills.monsoon, Skills.howlingGale, Skills.howlingGale);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 0, 3, 1, 4, 0, 0, 1, 3, 0, 1, 3, 1);
    out += initRunes(Runes.greaterMarkOfWarding, Runes.greaterSealOfResillence, Runes.greaterGlyphOfReplenishment, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipJanna();
}

function initJarvan() {
    var out = initMain(Characters.jarvan, Images.jarvan, Items.mercurysTreads, Items.trinityForce, Items.aegisOfTheLegion, Items.atmasImpaler, Items.randuinsOmen, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.dragonStrike, Skills.demacianStandart, Skills.dragonStrike, Skills.goldenAegis, Skills.dragonStrike, Skills.cataclysmJarvan, Skills.dragonStrike, Skills.demacianStandart, Skills.goldenAegis, Skills.dragonStrike, Skills.cataclysmJarvan, Skills.demacianStandart, Skills.demacianStandart, Skills.demacianStandart, Skills.goldenAegis, Skills.cataclysmJarvan, Skills.goldenAegis, Skills.goldenAegis);
    out += initOffensive(1, 3, 0, 1, 4, 0, 1, 0, 1, 0, 3, 0, 3, 0, 3, 0, 1);
    out += initDefense(0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfClarity, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipJarvan();
}

function initJax() {
    var out = initMain(Characters.jax, Images.jax, Items.ninjaTabi, Items.guinsoosRageblade, Items.hextechGunblade, Items.rylaisCrystalScepter, Items.lichBane, Items.rabadonsDeathcap);
    out += initSkills(Spells.flash, Spells.cleanse, Skills.leapStrike, Skills.empower, Skills.counterStrike, Skills.leapStrike, Skills.leapStrike, Skills.grandmasterMight, Skills.leapStrike, Skills.empower, Skills.leapStrike, Skills.empower, Skills.grandmasterMight, Skills.empower, Skills.counterStrike, Skills.empower, Skills.counterStrike, Skills.grandmasterMight, Skills.counterStrike, Skills.counterStrike);
    out += initOffensive(0, 0, 4, 0, 4, 4, 0, 0, 1, 1, 3, 0, 3, 0, 0, 0, 1);
    out += initDefense(0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDestruction, Runes.greaterSealOfDefense, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfDestruction);
    block.html(out);
    initTooltipJax();
}

function initKarma() {
    var out = initMain(Characters.karma, Images.karma, Items.ionianBootsOfLucidity, Items.rodOfAges, Items.abyssalScepter, Items.frozenHeart, Items.bansheesVeil, Items.rabadonsDeathcap);
    out += initSkills(Spells.flash, Spells.clairvoyance, Skills.heaventlyWave, Skills.soulShield, Skills.heaventlyWave, Skills.spiritBond, Skills.soulShield, Skills.heaventlyWave, Skills.soulShield, Skills.heaventlyWave, Skills.soulShield, Skills.heaventlyWave, Skills.soulShield, Skills.heaventlyWave, Skills.soulShield, Skills.spiritBond, Skills.spiritBond, Skills.spiritBond, Skills.spiritBond, Skills.spiritBond);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 3, 0, 1, 4, 0, 0, 0, 4, 1, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfForce, Runes.greaterGlyphOfForce, Runes.greaterQuintOfInsight);
    block.html(out);
    initTooltipKarma();
}

function initKarthus() {
    var out = initMain(Characters.karthus, Images.karthus, Items.sorcerersShoes, Items.rabadonsDeathcap, Items.archangelsStaff, Items.zhonyasHourglass, Items.abyssalScepter, Items.voidStaff);
    out += initSkills(Spells.flash, Spells.teleport, Skills.layWaste, Skills.wallOfPain, Skills.layWaste, Skills.defile, Skills.layWaste, Skills.requiem, Skills.layWaste, Skills.defile, Skills.layWaste, Skills.defile, Skills.requiem, Skills.defile, Skills.wallOfPain, Skills.defile, Skills.wallOfPain, Skills.requiem, Skills.wallOfPain, Skills.wallOfPain);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 2, 0, 1, 4, 0, 0, 0, 3, 1, 0, 4, 1, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterGlyphOfPotency, Runes.greaterSealOfVitality, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipKarthus();
}

function initKassadin() {
    var out = initMain(Characters.kassadin, Images.kassadin, Items.sorcerersShoes, Items.rodOfAges, Items.rabadonsDeathcap, Items.bansheesVeil, Items.voidStaff, Items.abyssalScepter);
    out += initSkills(Spells.flash, Spells.ignite, Skills.nullSphere, Skills.forcePulse, Skills.nullSphere, Skills.forcePulse, Skills.nullSphere, Skills.riftWalk, Skills.netherBlade, Skills.forcePulse, Skills.nullSphere, Skills.forcePulse, Skills.riftWalk, Skills.nullSphere, Skills.forcePulse, Skills.netherBlade, Skills.netherBlade, Skills.riftWalk, Skills.netherBlade, Skills.netherBlade);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterGlyphOfFocus, Runes.greaterSealOfClarity, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipKassadin();
}

function initKatarina() {
    var out = initMain(Characters.katarina, Images.katarina, Items.ionianBootsOfLucidity, Items.rylaisCrystalScepter, Items.rabadonsDeathcap, Items.hextechGunblade, Items.zhonyasHourglass, Items.voidStaff);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.shunpo, Skills.bouncingBlade, Skills.shunpo, Skills.killerInstincts, Skills.shunpo, Skills.deathLotus, Skills.shunpo, Skills.bouncingBlade, Skills.shunpo, Skills.bouncingBlade, Skills.deathLotus, Skills.bouncingBlade, Skills.bouncingBlade, Skills.killerInstincts, Skills.killerInstincts, Skills.deathLotus, Skills.killerInstincts, Skills.killerInstincts);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 3, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterGlyphOfFocus, Runes.greaterSealOfVitality, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipKatarina();
}

function initKayle() {
    var out = initMain(Characters.kayle, Images.kayle, Items.mercurysTreads, Items.shurelyasReverie, Items.bansheesVeil, Items.randuinsOmen, Items.zekesHerald, Items.aegisOfTheLegion);
    out += initSkills(Spells.heal, Spells.clairvoyance, Skills.righteousFury, Skills.devineBlessing, Skills.rekoning, Skills.devineBlessing, Skills.devineBlessing, Skills.intervention, Skills.devineBlessing, Skills.righteousFury, Skills.devineBlessing, Skills.righteousFury, Skills.intervention, Skills.righteousFury, Skills.righteousFury, Skills.rekoning, Skills.rekoning, Skills.intervention, Skills.rekoning, Skills.rekoning);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(1, 3, 3, 0, 0, 4, 0, 2, 1, 3, 0, 0, 0, 3, 0, 1);
    out += initUtility(1, 0, 3, 1, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterGlyphOfWarding, Runes.greaterSealOfClarity, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipKayle();
}

function initKennen() {
    var out = initMain(Characters.kennen, Images.kennen, Items.sorcerersShoes, Items.willOfTheAncients, Items.rylaisCrystalScepter, Items.rabadonsDeathcap, Items.abyssalScepter, Items.zhonyasHourglass);
    out += initSkills(Spells.flash, Spells.ignite, Skills.thunderingShuriken, Skills.electricalSurge, Skills.lightningRush, Skills.thunderingShuriken, Skills.electricalSurge, Skills.slicingMaelstorm, Skills.thunderingShuriken, Skills.electricalSurge, Skills.thunderingShuriken, Skills.thunderingShuriken, Skills.slicingMaelstorm, Skills.electricalSurge, Skills.electricalSurge, Skills.lightningRush, Skills.lightningRush, Skills.slicingMaelstorm, Skills.lightningRush, Skills.lightningRush);
    out += initOffensive(1, 0, 4, 0, 0, 4, 0, 0, 0, 1, 2, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterGlyphOfForce, Runes.greaterSealOfVitality, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipKennen();
}

function initKogmaw() {
    var out = initMain(Characters.kogmaw, Images.kogmaw, Items.berserkersGreaves, Items.infinityEdge, Items.phantomDancer, Items.lastWhisper, Items.guardianAngel, Items.theBloodthirster);
    out += initSkills(Spells.flash, Spells.heal, Skills.voidOoze, Skills.bioArcaneBarrage, Skills.bioArcaneBarrage, Skills.causticSpittle, Skills.bioArcaneBarrage, Skills.livingArtillery, Skills.bioArcaneBarrage, Skills.causticSpittle, Skills.bioArcaneBarrage, Skills.causticSpittle, Skills.livingArtillery, Skills.causticSpittle, Skills.causticSpittle, Skills.voidOoze, Skills.voidOoze, Skills.livingArtillery, Skills.voidOoze, Skills.voidOoze);
    out += initOffensive(0, 3, 0, 1, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(1, 0, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation,  Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipKogmaw();
}

function initLeblanc() {
    var out = initMain(Characters.leblanc, Images.leblanc, Items.sorcerersShoes, Items.mejaisSoulstealer, Items.rabadonsDeathcap, Items.rodOfAges, Items.archangelsStaff, Items.voidStaff);
    out += initSkills(Spells.flash, Spells.ignite, Skills.sigilOfSilence, Skills.distortion, Skills.sigilOfSilence, Skills.etherealChains, Skills.sigilOfSilence, Skills.mimic, Skills.sigilOfSilence, Skills.distortion, Skills.sigilOfSilence, Skills.distortion, Skills.mimic, Skills.distortion, Skills.etherealChains, Skills.distortion, Skills.etherealChains, Skills.mimic, Skills.etherealChains, Skills.etherealChains);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight,  Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipLeblanc();
}

function initLeesin() {
    var out = initMain(Characters.leesin, Images.leeSin, Items.mercurysTreads, Items.atmasImpaler, Items.trinityForce, Items.warmogsArmor, Items.forceOfNature, Items.theBloodthirster);
    out += initSkills(Spells.smite, Spells.ghost, Skills.tempest, Skills.safeguard, Skills.sonicWave, Skills.sonicWave, Skills.sonicWave, Skills.dragonsRage, Skills.sonicWave, Skills.safeguard, Skills.sonicWave, Skills.safeguard, Skills.dragonsRage, Skills.safeguard, Skills.tempest, Skills.safeguard, Skills.tempest, Skills.dragonsRage, Skills.tempest, Skills.tempest);
    out += initOffensive(1, 3, 0, 2, 4, 0, 0, 0, 1, 0, 3, 0, 3, 0, 3, 0, 1);
    out += initDefense(1, 0, 3, 2, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation,  Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipLeesin();
}

function initLeona() {
    var out = initMain(Characters.leona, Images.leona, Items.mercurysTreads, Items.shurelyasReverie, Items.frozenHeart, Items.forceOfNature, Items.warmogsArmor, Items.aegisOfTheLegion);
    out += initSkills(Spells.teleport, Spells.ghost, Skills.shieldOfDaybreak, Skills.zenithBlade, Skills.eclipse, Skills.eclipse, Skills.eclipse, Skills.solarFlare, Skills.eclipse, Skills.zenithBlade, Skills.eclipse, Skills.zenithBlade, Skills.solarFlare, Skills.zenithBlade, Skills.zenithBlade, Skills.shieldOfDaybreak, Skills.shieldOfDaybreak, Skills.solarFlare, Skills.shieldOfDaybreak, Skills.shieldOfDaybreak);
    out += initOffensive(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 2, 3, 0, 4, 0, 0, 1, 2, 0, 0, 3, 2, 3, 0, 1);
    out += initUtility(1, 3, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfVitality,  Runes.greaterSealOfResillence, Runes.greaterGlyphOfFocus, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipLeona();
}

function initLulu() {
    var out = initMain(Characters.lulu, Images.lulu, Items.mercurysTreads, Items.morellosEvilTome, Items.shurelyasReverie, Items.aegisOfTheLegion, Items.locketOfTheIronSolari, Items.willOfTheAncients);
    out += initSkills(Spells.flash, Spells.clairvoyance, Skills.glitterlance, Skills.helpPix, Skills.whimsy, Skills.helpPix, Skills.helpPix, Skills.wildGrowth, Skills.helpPix, Skills.whimsy, Skills.helpPix, Skills.whimsy, Skills.wildGrowth, Skills.whimsy, Skills.whimsy, Skills.glitterlance, Skills.glitterlance, Skills.wildGrowth, Skills.glitterlance, Skills.glitterlance);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 2, 3, 0, 4, 0, 0, 0, 4, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight,  Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipLulu();
}

function initLux() {
    var out = initMain(Characters.lux, Images.lux, Items.sorcerersShoes, Items.lichBane, Items.zhonyasHourglass, Items.voidStaff, Items.morellosEvilTome, Items.bansheesVeil);
    out += initSkills(Spells.teleport, Spells.clarity, Skills.lucentSingularity, Skills.lightBinding, Skills.lucentSingularity, Skills.prismaticBarrier, Skills.lucentSingularity, Skills.finalesFunkeln, Skills.lucentSingularity, Skills.lightBinding, Skills.lucentSingularity, Skills.lightBinding, Skills.finalesFunkeln, Skills.lightBinding, Skills.lightBinding, Skills.prismaticBarrier, Skills.prismaticBarrier, Skills.finalesFunkeln, Skills.prismaticBarrier, Skills.prismaticBarrier);
    out += initOffensive(0, 3, 1, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipLux();
}

function initMalphite() {
    var out = initMain(Characters.malphite, Images.malphite, Items.mercurysTreads, Items.frozenHeart, Items.bansheesVeil, Items.randuinsOmen, Items.forceOfNature, Items.philosophersStone);
    out += initSkills(Spells.teleport, Spells.flash, Skills.seismicShard, Skills.groundSlam, Skills.seismicShard, Skills.brutalStrikes, Skills.seismicShard, Skills.unstoppableForce, Skills.seismicShard, Skills.groundSlam, Skills.seismicShard, Skills.groundSlam, Skills.unstoppableForce, Skills.groundSlam, Skills.brutalStrikes, Skills.groundSlam, Skills.brutalStrikes, Skills.unstoppableForce, Skills.brutalStrikes, Skills.brutalStrikes);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 0, 4, 0, 0, 4, 0, 0, 2, 3, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipMalphite();
}

function initMalzahar() {
    var out = initMain(Characters.malzahar, Images.malzahar, Items.sorcerersShoes, Items.archangelsStaff, Items.bansheesVeil, Items.rabadonsDeathcap, Items.zhonyasHourglass, Items.voidStaff);
    out += initSkills(Spells.ignite, Spells.flash, Skills.callOfTheVoid, Skills.maleficVisions, Skills.maleficVisions, Skills.nullZone, Skills.maleficVisions, Skills.netherGrasp, Skills.callOfTheVoid, Skills.maleficVisions, Skills.callOfTheVoid, Skills.maleficVisions, Skills.netherGrasp, Skills.nullZone, Skills.callOfTheVoid, Skills.nullZone, Skills.callOfTheVoid, Skills.netherGrasp, Skills.nullZone, Skills.nullZone);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 3, 1, 0, 4, 0, 0, 0, 3, 1, 0, 4, 0, 1, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfCelerity, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipMalzahar();
}

function initMaokai() {
    var out = initMain(Characters.maokai, Images.maokai, Items.mercurysTreads, Items.rodOfAges, Items.sunfireCape, Items.abyssalScepter, Items.frozenHeart, Items.guardianAngel);
    out += initSkills(Spells.teleport, Spells.flash, Skills.saplingToss, Skills.twistedAdvance, Skills.saplingToss, Skills.arcaneSmash, Skills.saplingToss, Skills.vengefulMaelstorm, Skills.saplingToss, Skills.twistedAdvance, Skills.saplingToss, Skills.twistedAdvance, Skills.vengefulMaelstorm, Skills.arcaneSmash, Skills.arcaneSmash, Skills.twistedAdvance, Skills.twistedAdvance, Skills.vengefulMaelstorm, Skills.arcaneSmash, Skills.arcaneSmash);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(1, 3, 3, 0, 4, 3, 2, 1, 0, 0, 0, 0, 0, 3, 0, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipMaokai();
}

function initMasteryi() {
    var out = initMain(Characters.masteryi, Images.masterYi, Items.mercurysTreads, Items.phantomDancer, Items.infinityEdge, Items.frozenMallet, Items.theBloodthirster, Items.quicksilverSash);
    out += initSkills(Spells.exhaust, Spells.flash, Skills.alphaStrike, Skills.wujuStyle, Skills.wujuStyle, Skills.meditate, Skills.wujuStyle, Skills.highlander, Skills.wujuStyle, Skills.alphaStrike, Skills.wujuStyle, Skills.alphaStrike, Skills.highlander, Skills.alphaStrike, Skills.alphaStrike, Skills.meditate, Skills.meditate, Skills.highlander, Skills.meditate, Skills.meditate);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipMasteryi();
}

function initMissfortune() {
    var out = initMain(Characters.missfortune, Images.missFortune, Items.berserkersGreaves, Items.infinityEdge, Items.phantomDancer, Items.theBloodthirster, Items.frozenMallet, Items.lastWhisper);
    out += initSkills(Spells.heal, Spells.flash, Skills.doubleUp, Skills.makeItRain, Skills.impureShots, Skills.doubleUp, Skills.doubleUp, Skills.bulletTime, Skills.doubleUp, Skills.impureShots, Skills.doubleUp, Skills.impureShots, Skills.bulletTime, Skills.impureShots, Skills.makeItRain, Skills.impureShots, Skills.makeItRain, Skills.bulletTime, Skills.makeItRain, Skills.makeItRain);
    out += initOffensive(1, 3, 0, 0, 4, 0, 1, 4, 1, 0, 3, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfReplenishment, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipMissfortune();
}

function initMordekaiser() {
    var out = initMain(Characters.mordekaiser, Images.mordekaiser, Items.sorcerersShoes, Items.willOfTheAncients, Items.rylaisCrystalScepter, Items.lichBane, Items.abyssalScepter, Items.guardianAngel);
    out += initSkills(Spells.ignite, Spells.flash, Skills.siphonOfDestruction, Skills.maceOfSpades, Skills.siphonOfDestruction, Skills.creepingDeath, Skills.siphonOfDestruction, Skills.childrenOfTheGrave, Skills.siphonOfDestruction, Skills.maceOfSpades, Skills.siphonOfDestruction, Skills.maceOfSpades, Skills.childrenOfTheGrave, Skills.maceOfSpades, Skills.maceOfSpades, Skills.creepingDeath, Skills.creepingDeath, Skills.childrenOfTheGrave, Skills.creepingDeath, Skills.creepingDeath);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 1, 3, 0, 4, 3, 2, 1, 0, 0, 0, 3, 3, 0, 0, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfPotency, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipMordekaizer();
}

function initMorgana() {
    var out = initMain(Characters.morgana, Images.morgana, Items.sorcerersShoes, Items.rodOfAges, Items.zhonyasHourglass, Items.rabadonsDeathcap, Items.voidStaff, Items.bansheesVeil);
    out += initSkills(Spells.ignite, Spells.flash, Skills.darkBinding, Skills.tormentedSoil, Skills.tormentedSoil, Skills.blackShield, Skills.tormentedSoil, Skills.soulShackles, Skills.tormentedSoil, Skills.blackShield, Skills.tormentedSoil, Skills.blackShield, Skills.soulShackles, Skills.blackShield, Skills.blackShield, Skills.darkBinding, Skills.darkBinding, Skills.soulShackles, Skills.darkBinding, Skills.darkBinding);
    out += initOffensive(1, 0, 4, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipMorgana();
}
function initNasus() {
    var out = initMain(Characters.nasus, Images.nasus, Items.mercurysTreads, Items.sunfireCape, Items.bansheesVeil, Items.trinityForce, Items.frozenHeart, Items.forceOfNature);
    out += initSkills(Spells.ghost, Spells.exhaust, Skills.siphoningStrike, Skills.wither, Skills.siphoningStrike, Skills.spiritFire, Skills.siphoningStrike, Skills.furyOfTheSands, Skills.siphoningStrike, Skills.wither, Skills.siphoningStrike, Skills.wither, Skills.furyOfTheSands, Skills.wither, Skills.spiritFire, Skills.wither, Skills.spiritFire, Skills.furyOfTheSands, Skills.spiritFire, Skills.spiritFire);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 1, 2, 4, 0, 0, 1, 0, 1, 0, 3, 3, 3, 0, 1);
    out += initUtility(0, 3, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfClarity, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipNasus();
}
function initNautilus() {
    var out = initMain(Characters.nautilius, Images.nautilus, Items.mercurysTreads, Items.rodOfAges, Items.abyssalScepter, Items.warmogsArmor, Items.frozenHeart, Items.guardianAngel);
    out += initSkills(Spells.flash, Spells.ignite, Skills.titanWrath, Skills.riptide, Skills.dredgeLine, Skills.titanWrath, Skills.riptide, Skills.depthCharge, Skills.riptide, Skills.riptide, Skills.titanWrath, Skills.riptide, Skills.depthCharge, Skills.titanWrath, Skills.titanWrath, Skills.dredgeLine, Skills.dredgeLine, Skills.depthCharge, Skills.dredgeLine, Skills.dredgeLine);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(1, 1, 3, 2, 4, 0, 2, 1, 0, 0, 0, 3, 3, 0, 0, 1);
    out += initUtility(0, 3, 1, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipNautilus();
}

function initNidalee() {
    var out = initMain(Characters.nidalee, Images.nidalee, Items.ionianBootsOfLucidity, Items.rabadonsDeathcap, Items.lichBane, Items.morellosEvilTome, Items.zhonyasHourglass, Items.abyssalScepter);
    out += initSkills(Spells.flash, Spells.ignite, Skills.bushwhack, Skills.primalSurge, Skills.javelinToss, Skills.primalSurge, Skills.javelinToss, Skills.aspectOfTheCougar, Skills.primalSurge, Skills.bushwhack, Skills.primalSurge, Skills.javelinToss, Skills.aspectOfTheCougar, Skills.primalSurge, Skills.javelinToss, Skills.javelinToss, Skills.bushwhack, Skills.aspectOfTheCougar, Skills.bushwhack, Skills.bushwhack);
    out += initOffensive(1, 3, 0, 0, 4, 4, 0, 0, 1, 1, 3, 0, 0, 0, 3, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 2, 0, 1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfStrength, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipNidalee();
}

function initNocturne() {
    var out = initMain(Characters.nocturne, Images.nocturne, Items.mercurysTreads, Items.wrigglesLantern, Items.aegisOfTheLegion, Items.frozenMallet, Items.atmasImpaler, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.smite, Skills.duskbringer, Skills.shroudOfDarkness, Skills.duskbringer, Skills.unspeakableHorror, Skills.duskbringer, Skills.paranoia, Skills.duskbringer, Skills.unspeakableHorror, Skills.duskbringer, Skills.unspeakableHorror, Skills.paranoia, Skills.unspeakableHorror, Skills.unspeakableHorror, Skills.shroudOfDarkness, Skills.shroudOfDarkness, Skills.paranoia, Skills.shroudOfDarkness, Skills.shroudOfDarkness);
    out += initOffensive(0, 3, 0, 1, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(1, 2, 3, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfAlacrity);
    block.html(out);
    initTooltipNocturne();
}

function initNunu() {
    var out = initMain(Characters.nunu, Images.nunu, Items.sorcerersShoes, Items.rabadonsDeathcap, Items.rylaisCrystalScepter, Items.bansheesVeil, Items.voidStaff, Items.frozenHeart);
    out += initSkills(Spells.flash, Spells.teleport, Skills.iceBlast, Skills.consume, Skills.iceBlast, Skills.bloodBoil, Skills.consume, Skills.absoluteZero, Skills.iceBlast, Skills.consume, Skills.iceBlast, Skills.consume, Skills.absoluteZero, Skills.consume, Skills.iceBlast, Skills.bloodBoil, Skills.bloodBoil, Skills.absoluteZero, Skills.bloodBoil, Skills.bloodBoil);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 2, 3, 0, 4, 3, 0, 0, 0, 1, 0, 3, 0, 1, 2, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipNunu();
}

function initOlaf() {
    var out = initMain(Characters.olaf, Images.olaf, Items.ninjaTabi, Items.warmogsArmor, Items.atmasImpaler, Items.forceOfNature, Items.trinityForce, Items.guardianAngel);
    out += initSkills(Spells.flash, Spells.teleport, Skills.undertow, Skills.recklessSwing, Skills.recklessSwing, Skills.viciousStrikes, Skills.recklessSwing, Skills.ragnarok, Skills.recklessSwing, Skills.viciousStrikes, Skills.recklessSwing, Skills.viciousStrikes, Skills.ragnarok, Skills.viciousStrikes, Skills.viciousStrikes, Skills.undertow, Skills.undertow, Skills.ragnarok, Skills.undertow, Skills.undertow);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 3, 0, 1, 0, 0, 0, 3, 0, 3, 0, 1);
    out += initUtility(1, 0, 3, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfWarding, Runes.greaterSealOfVitality, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfWarding);
    block.html(out);
    initTooltipOlaf();
}

function initOrianna() {
    var out = initMain(Characters.olaf, Images.orianna, Items.sorcerersShoes, Items.rodOfAges, Items.rabadonsDeathcap, Items.voidStaff, Items.zhonyasHourglass, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.ignite, Skills.commandAttack, Skills.commandDissonance, Skills.commandAttack, Skills.commandProtect, Skills.commandAttack, Skills.commandShockwave, Skills.commandAttack, Skills.commandDissonance, Skills.commandAttack, Skills.commandDissonance, Skills.commandShockwave, Skills.commandDissonance, Skills.commandDissonance, Skills.commandProtect, Skills.commandProtect, Skills.commandShockwave, Skills.commandProtect, Skills.commandProtect);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipOrianna();
}

function initPantheon() {
    var out = initMain(Characters.pantheon, Images.pantheon, Items.mercurysTreads, Items.warmogsArmor, Items.atmasImpaler, Items.theBloodthirster, Items.youmuusGhostblade, Items.infinityEdge);
    out += initSkills(Spells.flash, Spells.ignite, Skills.spearShot, Skills.aegisOfZeonia, Skills.heartseekerStrike, Skills.spearShot, Skills.spearShot, Skills.grandSkyfail, Skills.spearShot, Skills.heartseekerStrike, Skills.spearShot, Skills.heartseekerStrike, Skills.grandSkyfail, Skills.heartseekerStrike, Skills.aegisOfZeonia, Skills.heartseekerStrike, Skills.aegisOfZeonia, Skills.grandSkyfail, Skills.aegisOfZeonia, Skills.aegisOfZeonia);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 2, 2, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipPantheon();
}

function initPoppy() {
    var out = initMain(Characters.poppy, Images.poppy, Items.mercurysTreads, Items.trinityForce, Items.phantomDancer, Items.bansheesVeil, Items.infinityEdge, Items.lastWhisper);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.heroicCharge, Skills.devastatingBlow, Skills.paragonOfDemacia, Skills.heroicCharge, Skills.heroicCharge, Skills.diplomaticImmunity, Skills.devastatingBlow, Skills.heroicCharge, Skills.heroicCharge, Skills.paragonOfDemacia, Skills.diplomaticImmunity, Skills.devastatingBlow, Skills.paragonOfDemacia, Skills.paragonOfDemacia, Skills.devastatingBlow, Skills.diplomaticImmunity, Skills.paragonOfDemacia, Skills.devastatingBlow);
    out += initOffensive(1, 3, 0, 0, 4, 3, 0, 4, 1, 0, 0, 1, 3, 0, 0, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfVitality, Runes.greaterGlyphOfCelerity, Runes.greaterQuintOfFuror);
    block.html(out);
    initTooltipPoppy();
}

function initRammus() {
    var out = initMain(Characters.rammus, Images.rammus, Items.mercurysTreads, Items.randuinsOmen, Items.warmogsArmor, Items.thornmail, Items.frozenHeart, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.teleport, Skills.powerball, Skills.deffensiveBallCurl, Skills.puncturingTaunt, Skills.puncturingTaunt, Skills.puncturingTaunt, Skills.tremors, Skills.puncturingTaunt, Skills.deffensiveBallCurl, Skills.puncturingTaunt, Skills.deffensiveBallCurl, Skills.tremors, Skills.deffensiveBallCurl, Skills.deffensiveBallCurl, Skills.powerball, Skills.powerball, Skills.tremors, Skills.powerball, Skills.powerball);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 1, 3, 0, 4, 0, 2, 1, 3, 0, 0, 3, 0, 3, 0, 1);
    out += initUtility(1, 3, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipRammus();
}

function initRenekton() {
    var out = initMain(Characters.renekton, Images.renekton, Items.mercurysTreads, Items.frozenMallet, Items.atmasImpaler, Items.guardianAngel, Items.lastWhisper, Items.theBloodthirster);
    out += initSkills(Spells.flash, Spells.ignite, Skills.cullTheMeek, Skills.sliceAndDice, Skills.ruthlessPredator, Skills.cullTheMeek, Skills.cullTheMeek, Skills.dominius, Skills.cullTheMeek, Skills.ruthlessPredator, Skills.cullTheMeek, Skills.ruthlessPredator, Skills.dominius, Skills.ruthlessPredator, Skills.ruthlessPredator, Skills.sliceAndDice, Skills.sliceAndDice, Skills.dominius, Skills.sliceAndDice, Skills.sliceAndDice);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 3, 0, 3, 0, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfStrength, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipRenekton();
}

function initRiven() {
    var out = initMain(Characters.riven, Images.riven, Items.mercurysTreads, Items.theBloodthirster, Items.lastWhisper, Items.guardianAngel, Items.warmogsArmor, Items.atmasImpaler);
    out += initSkills(Spells.flash, Spells.ignite, Skills.brokenWings, Skills.kiBurst, Skills.valor, Skills.kiBurst, Skills.kiBurst, Skills.bladeOfTheExile, Skills.kiBurst, Skills.valor, Skills.kiBurst, Skills.valor, Skills.bladeOfTheExile, Skills.valor, Skills.valor, Skills.brokenWings, Skills.brokenWings, Skills.bladeOfTheExile, Skills.brokenWings, Skills.brokenWings);
    out += initOffensive(1, 3, 0, 0, 4, 3, 0, 4, 1, 0, 0, 1, 0, 0, 3, 0, 1);
    out += initDefense(0, 2, 2, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipRiven();
}

function initRumble() {
    var out = initMain(Characters.rumble, Images.rumble, Items.mercurysTreads, Items.rylaisCrystalScepter, Items.abyssalScepter, Items.sunfireCape, Items.rabadonsDeathcap, Items.hextechGunblade);
    out += initSkills(Spells.flash, Spells.ignite, Skills.flamespitter, Skills.electroHarpoon, Skills.scrapShield, Skills.flamespitter, Skills.flamespitter, Skills.theEqualizer, Skills.scrapShield, Skills.flamespitter, Skills.flamespitter, Skills.electroHarpoon, Skills.theEqualizer, Skills.scrapShield, Skills.electroHarpoon, Skills.scrapShield, Skills.electroHarpoon, Skills.theEqualizer, Skills.scrapShield, Skills.electroHarpoon);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 0, 3, 2, 0, 3, 0, 0, 3, 0, 3, 0, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipRumble();
}

function initRyze() {
    var out = initMain(Characters.ryze, Images.ryze, Items.sorcerersShoes, Items.bansheesVeil, Items.frozenHeart, Items.rodOfAges, Items.archangelsStaff, Items.voidStaff);
    out += initSkills(Spells.flash, Spells.ghost, Skills.runPrison, Skills.overload, Skills.spellFlux, Skills.overload, Skills.overload, Skills.desperatePower, Skills.overload, Skills.runPrison, Skills.overload, Skills.runPrison, Skills.desperatePower, Skills.runPrison, Skills.runPrison, Skills.spellFlux, Skills.spellFlux, Skills.desperatePower, Skills.spellFlux, Skills.spellFlux);
    out += initOffensive(1, 2, 0, 1, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 1, 3, 1, 4, 0, 0, 0, 3, 0, 0, 4, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipRyze();
}

function initSejuani() {
    var out = initMain(Characters.sejuanu, Images.sejuani, Items.mercurysTreads, Items.rodOfAges, Items.sunfireCape, Items.forceOfNature, Items.warmogsArmor, Items.frozenMallet);
    out += initSkills(Spells.flash, Spells.cleanse, Skills.northernWinds, Skills.permafrost, Skills.permafrost, Skills.arcticAssault, Skills.permafrost, Skills.glacialPrison, Skills.northernWinds, Skills.permafrost, Skills.permafrost, Skills.northernWinds, Skills.glacialPrison, Skills.northernWinds, Skills.northernWinds, Skills.arcticAssault, Skills.arcticAssault, Skills.glacialPrison, Skills.arcticAssault, Skills.arcticAssault);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 3, 0, 1, 0, 0, 0, 0, 3, 3, 0, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipSejuani();
}

function initShaco() {
    var out = initMain(Characters.shaco, Images.shaco, Items.bootsOfMobility, Items.wrigglesLantern, Items.trinityForce, Items.infinityEdge, Items.guardianAngel, Items.theBloodthirster);
    out += initSkills(Spells.smite, Spells.ignite, Skills.jackInTheBox, Skills.twoShivPoison, Skills.deceive, Skills.twoShivPoison, Skills.twoShivPoison, Skills.hallucinate, Skills.twoShivPoison, Skills.jackInTheBox, Skills.twoShivPoison, Skills.jackInTheBox, Skills.hallucinate, Skills.jackInTheBox, Skills.jackInTheBox, Skills.deceive, Skills.deceive, Skills.hallucinate, Skills.deceive, Skills.deceive);
    out += initOffensive(1, 3, 0, 0, 4, 4, 0, 4, 1, 1, 0, 1, 0, 0, 3, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 1, 3, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfAlacrity, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipShaco();
}

function initShen() {
    var out = initMain(Characters.shen, Images.shen, Items.mercurysTreads, Items.sunfireCape, Items.forceOfNature, Items.witsEnd, Items.randuinsOmen, Items.frozenMallet);
    out += initSkills(Spells.flash, Spells.heal, Skills.vorpalBlade, Skills.shadowDash, Skills.vorpalBlade, Skills.feint, Skills.vorpalBlade, Skills.standUnited, Skills.vorpalBlade, Skills.feint, Skills.vorpalBlade, Skills.feint, Skills.standUnited, Skills.feint, Skills.feint, Skills.shadowDash, Skills.shadowDash, Skills.standUnited, Skills.shadowDash, Skills.shadowDash);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(1, 3, 3, 0, 4, 0, 2, 1, 0, 0, 0, 0, 3, 3, 0, 1);
    out += initUtility(1, 3, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipShen();
}

function initShyvana() {
    var out = initMain(Characters.shyvana, Images.shyvana, Items.mercurysTreads, Items.witsEnd, Items.trinityForce, Items.theBloodthirster, Items.sunfireCape, Items.madredsBloodrazor);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.burnout, Skills.twinBite, Skills.burnout, Skills.flameBreath, Skills.burnout, Skills.dragonsDescent, Skills.burnout, Skills.twinBite, Skills.burnout, Skills.twinBite, Skills.dragonsDescent, Skills.twinBite, Skills.twinBite, Skills.flameBreath, Skills.flameBreath, Skills.dragonsDescent, Skills.flameBreath, Skills.flameBreath);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 0, 4, 0, 0, 4, 0, 1, 0, 4, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfAlacrity, Runes.greaterSealOfVitality, Runes.greaterGlyphOfCelerity, Runes.greaterQuintOfAlacrity);
    block.html(out);
    initTooltipShyvana();
}

function initSinged() {
    var out = initMain(Characters.singed, Images.singed, Items.mercurysTreads, Items.rodOfAges, Items.forceOfNature, Items.rylaisCrystalScepter, Items.guardianAngel, Items.rabadonsDeathcap);
    out += initSkills(Spells.ghost, Spells.teleport, Skills.fling, Skills.poisonTrail, Skills.megaAdhesive, Skills.poisonTrail, Skills.poisonTrail, Skills.insanityPotion, Skills.poisonTrail, Skills.megaAdhesive, Skills.poisonTrail, Skills.megaAdhesive, Skills.insanityPotion, Skills.megaAdhesive, Skills.megaAdhesive, Skills.fling, Skills.fling, Skills.insanityPotion, Skills.fling, Skills.fling);
    out += initOffensive(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 2, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 4, 3, 0, 0, 0, 1, 0, 4, 0, 3, 1, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipSinged();
}

function initSion() {
    var out = initMain(Characters.sion, Images.sion, Items.mercurysTreads, Items.trinityForce, Items.atmasImpaler, Items.infinityEdge, Items.guardianAngel, Items.theBlackCleaver);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.crypticGaze, Skills.deathCaress, Skills.deathCaress, Skills.enrage, Skills.enrage, Skills.cannibalism, Skills.enrage, Skills.enrage, Skills.enrage, Skills.deathCaress, Skills.cannibalism, Skills.deathCaress, Skills.deathCaress, Skills.crypticGaze, Skills.crypticGaze, Skills.cannibalism, Skills.crypticGaze, Skills.crypticGaze);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 1, 0, 1, 3, 0, 2, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 3, 1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipSion();
}

function initSivir() {
    var out = initMain(Characters.sivir, Images.sivir, Items.berserkersGreaves, Items.theBloodthirster, Items.infinityEdge, Items.phantomDancer, Items.lastWhisper, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.teleport, Skills.boomerangBlade, Skills.spellShield, Skills.boomerangBlade, Skills.ricochet, Skills.boomerangBlade, Skills.onTheHunt, Skills.boomerangBlade, Skills.ricochet, Skills.boomerangBlade, Skills.ricochet, Skills.onTheHunt, Skills.ricochet, Skills.spellShield, Skills.ricochet, Skills.spellShield, Skills.onTheHunt, Skills.spellShield, Skills.spellShield);
    out += initOffensive(0, 3, 0, 1, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 2, 2, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfStrength, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipSivir();
}

function initSkarner() {
    var out = initMain(Characters.skarner, Images.skarner, Items.mercurysTreads, Items.trinityForce, Items.bansheesVeil, Items.randuinsOmen, Items.atmasImpaler, Items.hextechGunblade);
    out += initSkills(Spells.flash, Spells.smite, Skills.crystalSlash, Skills.crystallineExoskeleton, Skills.crystalSlash, Skills.fracture, Skills.crystalSlash, Skills.impale, Skills.crystalSlash, Skills.crystallineExoskeleton, Skills.crystalSlash, Skills.crystallineExoskeleton, Skills.impale, Skills.crystallineExoskeleton, Skills.crystallineExoskeleton, Skills.fracture, Skills.fracture, Skills.impale, Skills.fracture, Skills.fracture);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(1, 3, 3, 0, 4, 0, 2, 1, 0, 0, 1, 3, 0, 2, 0, 1);
    out += initUtility(1, 2, 0, 1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfAlacrity, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipSkarner();
}

function initSona() {
    var out = initMain(Characters.sona, Images.sona, Items.ionianBootsOfLucidity, Items.aegisOfTheLegion, Items.shurelyasReverie, Items.willOfTheAncients, Items.randuinsOmen, Items.frozenHeart);
    out += initSkills(Spells.flash, Spells.clairvoyance, Skills.ariaOfPerseverance, Skills.hymnOfValor, Skills.ariaOfPerseverance, Skills.songOfSelerity, Skills.ariaOfPerseverance, Skills.crescendo, Skills.ariaOfPerseverance, Skills.hymnOfValor, Skills.ariaOfPerseverance, Skills.hymnOfValor, Skills.crescendo, Skills.hymnOfValor, Skills.hymnOfValor, Skills.songOfSelerity, Skills.songOfSelerity, Skills.crescendo, Skills.songOfSelerity, Skills.songOfSelerity);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 2, 3, 0, 4, 0, 0, 0, 4, 0, 0, 3, 0);
    out += initRunes(Runes.greaterMarkOfResilience, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipSona();
}

function initSoraka() {
    var out = initMain(Characters.soraka, Images.soraka, Items.bootsOfMobility, Items.aegisOfTheLegion, Items.shurelyasReverie, Items.soulShroud, Items.locketOfTheIronSolari, Items.rylaisCrystalScepter);
    out += initSkills(Spells.flash, Spells.clairvoyance, Skills.astralBlessing, Skills.infuse, Skills.astralBlessing, Skills.infuse, Skills.starcall, Skills.wish, Skills.astralBlessing, Skills.astralBlessing, Skills.astralBlessing, Skills.infuse, Skills.wish, Skills.infuse, Skills.infuse, Skills.starcall, Skills.starcall, Skills.wish, Skills.starcall, Skills.starcall);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 2, 2, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 3, 1, 0, 3, 0, 4, 0, 0, 2, 0, 0, 0, 3, 0);
    out += initRunes(Runes.greaterMarkOfResilience, Runes.greaterSealOfVitality, Runes.greaterGlyphOfFocus, Runes.greaterQuintOfFocus);
    block.html(out);
    initTooltipSoraka();
}

function initSwain() {
    var out = initMain(Characters.swain, Images.swain, Items.sorcerersShoes, Items.rodOfAges, Items.zhonyasHourglass, Items.mejaisSoulstealer, Items.rabadonsDeathcap, Items.archangelsStaff);
    out += initSkills(Spells.flash, Spells.ignite, Skills.torment, Skills.decrepify, Skills.torment, Skills.nevermove, Skills.decrepify, Skills.ravenousFlock, Skills.torment, Skills.torment, Skills.nevermove, Skills.torment, Skills.ravenousFlock, Skills.decrepify, Skills.decrepify, Skills.decrepify, Skills.nevermove, Skills.ravenousFlock, Skills.nevermove, Skills.nevermove);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 1, 3, 0, 0, 3, 1, 0, 4, 1, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfPotency, Runes.greaterGlyphOfPotency, Runes.greaterQuintOfInsight);
    block.html(out);
    initTooltipSwain();
}

function initTalon() {
    var out = initMain(Characters.talon, Images.talon, Items.bootsOfSwiftness, Items.infinityEdge, Items.cloakAndDagger, Items.trinityForce, Items.theBloodthirster, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.rake, Skills.noxianDiplomacy, Skills.cutthroat, Skills.rake, Skills.rake, Skills.shadowAssault, Skills.rake, Skills.noxianDiplomacy, Skills.rake, Skills.noxianDiplomacy, Skills.shadowAssault, Skills.noxianDiplomacy, Skills.noxianDiplomacy, Skills.cutthroat, Skills.cutthroat, Skills.shadowAssault, Skills.cutthroat, Skills.cutthroat);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 3, 1, 0, 0, 3, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 2, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfFocus, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipSwain();
}

function initTaric() {
    var out = initMain(Characters.taric, Images.taric, Items.mercurysTreads, Items.aegisOfTheLegion, Items.shurelyasReverie, Items.randuinsOmen, Items.bansheesVeil, Items.frozenHeart);
    out += initSkills(Spells.flash, Spells.clairvoyance, Skills.dazzle, Skills.shatter, Skills.imbue, Skills.shatter, Skills.shatter, Skills.radiance, Skills.imbue, Skills.shatter, Skills.shatter, Skills.imbue, Skills.radiance, Skills.imbue, Skills.imbue, Skills.dazzle, Skills.dazzle, Skills.radiance, Skills.dazzle, Skills.dazzle);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 0, 3, 0, 1, 4, 0, 0, 2, 3, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipTaric();
}

function initTeemo() {
    var out = initMain(Characters.teemo, Images.teemo, Items.mercurysTreads, Items.malady, Items.witsEnd, Items.madredsBloodrazor, Items.frozenMallet, Items.guardianAngel);
    out += initSkills(Spells.ignite, Spells.ghost, Skills.blindingDart, Skills.toxicShot, Skills.moveQuick, Skills.toxicShot, Skills.blindingDart, Skills.noxiousTrap, Skills.toxicShot, Skills.toxicShot, Skills.toxicShot, Skills.blindingDart, Skills.noxiousTrap, Skills.moveQuick, Skills.moveQuick, Skills.blindingDart, Skills.moveQuick, Skills.noxiousTrap, Skills.moveQuick, Skills.blindingDart);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfAlacrity, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfInsight);
    block.html(out);
    initTooltipTeemo();
}

function initTristana() {
    var out = initMain(Characters.tristana, Images.tristana, Items.berserkersGreaves, Items.infinityEdge, Items.phantomDancer, Items.lastWhisper, Items.quicksilverSash, Items.theBloodthirster);
    out += initSkills(Spells.ignite, Spells.flash, Skills.explosiveShot, Skills.rocketJump, Skills.rocketJump, Skills.explosiveShot, Skills.rocketJump, Skills.busterShot, Skills.rocketJump, Skills.rapidFire, Skills.rocketJump, Skills.rapidFire, Skills.busterShot, Skills.rapidFire, Skills.rapidFire, Skills.rapidFire, Skills.explosiveShot, Skills.busterShot, Skills.explosiveShot, Skills.explosiveShot);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipTristana();
}

function initTrundle() {
    var out = initMain(Characters.trundle, Images.trundle, Items.mercurysTreads, Items.wrigglesLantern, Items.frozenMallet, Items.aegisOfTheLegion, Items.theBloodthirster, Items.theBlackCleaver);
    out += initSkills(Spells.smite, Spells.ghost, Skills.rapidBite, Skills.contaminate, Skills.pillarOfFilth, Skills.rapidBite, Skills.rapidBite, Skills.agony, Skills.rapidBite, Skills.contaminate, Skills.rapidBite, Skills.contaminate, Skills.agony, Skills.pillarOfFilth, Skills.contaminate, Skills.pillarOfFilth, Skills.contaminate, Skills.agony, Skills.pillarOfFilth, Skills.pillarOfFilth);
    out += initOffensive(1, 3, 0, 0, 4, 2, 0, 0, 1, 0, 3, 0, 3, 0, 3, 0, 1);
    out += initDefense(1, 2, 3, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfFocus, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipTrundle();
}

function initTryndamere() {
    var out = initMain(Characters.tryndamere, Images.tryndamere, Items.berserkersGreaves, Items.wrigglesLantern, Items.phantomDancer, Items.infinityEdge, Items.quicksilverSash, Items.theBloodthirster);
    out += initSkills(Spells.ignite, Spells.exhaust, Skills.spinningSlash, Skills.bloodlust, Skills.mockingShout, Skills.bloodlust, Skills.bloodlust, Skills.undyingRage, Skills.bloodlust, Skills.mockingShout, Skills.bloodlust, Skills.mockingShout, Skills.undyingRage, Skills.mockingShout, Skills.mockingShout, Skills.spinningSlash, Skills.spinningSlash, Skills.undyingRage, Skills.spinningSlash, Skills.spinningSlash);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfMalice, Runes.greaterSealOfResillence, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfMalice);
    block.html(out);
    initTooltipTryndamere();
}

function initTwistedfate() {
    var out = initMain(Characters.twistedfate, Images.twisted, Items.berserkersGreaves, Items.trinityForce, Items.theBlackCleaver, Items.infinityEdge, Items.bansheesVeil, Items.theBloodthirster);
    out += initSkills(Spells.flash, Spells.teleport, Skills.pickACard, Skills.stackedDeck, Skills.stackedDeck, Skills.pickACard, Skills.stackedDeck, Skills.destiny, Skills.stackedDeck, Skills.pickACard, Skills.stackedDeck, Skills.pickACard, Skills.destiny, Skills.pickACard, Skills.wildCards, Skills.wildCards, Skills.wildCards, Skills.destiny, Skills.wildCards, Skills.wildCards);
    out += initOffensive(0, 3, 0, 1, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 1, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfVitality, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipTwisted();
}

function initTwitch() {
    var out = initMain(Characters.twitch, Images.twitch, Items.bootsOfMobility, Items.infinityEdge, Items.cloakAndDagger, Items.phantomDancer, Items.theBlackCleaver, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.ignite, Skills.ambush, Skills.expunge, Skills.expunge, Skills.ambush, Skills.expunge, Skills.sprayAndPray, Skills.debilitatingPoison, Skills.expunge, Skills.ambush, Skills.expunge, Skills.sprayAndPray, Skills.ambush, Skills.ambush, Skills.debilitatingPoison, Skills.debilitatingPoison, Skills.sprayAndPray, Skills.debilitatingPoison, Skills.debilitatingPoison);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 3, 1, 0, 0, 3, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfAlacrity, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipTwitch();
}

function initUdyr() {
    var out = initMain(Characters.udyr, Images.udyr, Items.mercurysTreads, Items.wrigglesLantern, Items.warmogsArmor, Items.trinityForce, Items.bansheesVeil, Items.atmasImpaler);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.tigerStance, Skills.turtleStance, Skills.tigerStance, Skills.turtleStance, Skills.bearStance, Skills.tigerStance, Skills.tigerStance, Skills.turtleStance, Skills.tigerStance, Skills.turtleStance, Skills.bearStance, Skills.turtleStance, Skills.bearStance, Skills.bearStance, Skills.bearStance, Skills.phoenixStance, Skills.phoenixStance, Skills.phoenixStance);
    out += initOffensive(1, 3, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 3, 0, 1, 0, 0, 0, 3, 0, 3, 0, 1);
    out += initUtility(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipUdyr();
}

function initUrgot() {
    var out = initMain(Characters.urgot, Images.urgot, Items.ionianBootsOfLucidity, Items.manamune, Items.theBloodthirster, Items.lastWhisper, Items.frozenHeart, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.exhaust, Skills.noxianCorrosiveCharge, Skills.acidHunter, Skills.acidHunter, Skills.terrorCapacitor, Skills.acidHunter, Skills.positionReverse, Skills.acidHunter, Skills.terrorCapacitor, Skills.acidHunter, Skills.noxianCorrosiveCharge, Skills.positionReverse, Skills.terrorCapacitor, Skills.noxianCorrosiveCharge, Skills.terrorCapacitor, Skills.noxianCorrosiveCharge, Skills.positionReverse, Skills.terrorCapacitor, Skills.noxianCorrosiveCharge);
    out += initOffensive(1, 3, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 3, 0, 1, 0, 0, 0, 3, 0, 3, 0, 1);
    out += initUtility(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfWarding, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipUrgot();
}

function initVayne() {
    var out = initMain(Characters.vayne, Images.vayne, Items.berserkersGreaves, Items.theBlackCleaver, Items.theBloodthirster, Items.phantomDancer, Items.infinityEdge, Items.guardianAngel);
    out += initSkills(Spells.flash, Spells.heal, Skills.tumble, Skills.condemn, Skills.silverBolts, Skills.tumble, Skills.tumble, Skills.finalHour, Skills.tumble, Skills.silverBolts, Skills.tumble, Skills.silverBolts, Skills.finalHour, Skills.silverBolts, Skills.silverBolts, Skills.condemn, Skills.condemn, Skills.finalHour, Skills.condemn, Skills.condemn);
    out += initOffensive(0, 3, 0, 1, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(1, 2, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipVayne();
}

function initVeigar() {
    var out = initMain(Characters.veigar, Images.veigar, Items.sorcerersShoes, Items.rabadonsDeathcap, Items.deathfireGrasp, Items.voidStaff, Items.zhonyasHourglass, Items.bansheesVeil);
    out += initSkills(Spells.flash, Spells.ignite, Skills.balefulStrike, Skills.eventHorizon, Skills.balefulStrike, Skills.darkMatter, Skills.balefulStrike, Skills.primordialBurst, Skills.balefulStrike, Skills.eventHorizon, Skills.balefulStrike, Skills.eventHorizon, Skills.primordialBurst, Skills.darkMatter, Skills.darkMatter, Skills.darkMatter, Skills.darkMatter, Skills.primordialBurst, Skills.eventHorizon, Skills.eventHorizon);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipVeigar();
}

function initViktor() {
    var out = initMain(Characters.viktor, Images.viktor, Items.sorcerersShoes, Items.rylaisCrystalScepter, Items.augmentGravity, Items.rodOfAges, Items.voidStaff, Items.zhonyasHourglass);
    out += initSkills(Spells.flash, Spells.ignite, Skills.deathRay, Skills.gravityField, Skills.deathRay, Skills.powerTransfer, Skills.deathRay, Skills.chaosStorm, Skills.deathRay, Skills.powerTransfer, Skills.deathRay, Skills.powerTransfer, Skills.chaosStorm, Skills.powerTransfer, Skills.gravityField, Skills.powerTransfer, Skills.gravityField, Skills.chaosStorm, Skills.gravityField, Skills.gravityField);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfClarity, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipViktor();
}

function initVladimir() {
    var out = initMain(Characters.vladimir, Images.vladimir, Items.ionianBootsOfLucidity, Items.rylaisCrystalScepter, Items.zhonyasHourglass, Items.abyssalScepter, Items.voidStaff, Items.warmogsArmor);
    out += initSkills(Spells.flash, Spells.ignite, Skills.transfusion, Skills.tidesOfBlood, Skills.transfusion, Skills.sanguinePool, Skills.transfusion, Skills.hemoplague, Skills.transfusion, Skills.sanguinePool, Skills.transfusion, Skills.tidesOfBlood, Skills.hemoplague, Skills.tidesOfBlood, Skills.tidesOfBlood, Skills.tidesOfBlood, Skills.sanguinePool, Skills.hemoplague, Skills.sanguinePool, Skills.sanguinePool);
    out += initOffensive(0, 0, 4, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 1, 4, 0, 0, 0, 3, 1, 0, 4, 0, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfVitality, Runes.greaterGlyphOfForce, Runes.greaterQuintOfSwiftness);
    block.html(out);
    initTooltipVladimir();
}

function initVolibear() {
    var out = initMain(Characters.volibear, Images.volibear, Items.mercurysTreads, Items.wrigglesLantern, Items.witsEnd, Items.warmogsArmor, Items.atmasImpaler, Items.frozenMallet);
    out += initSkills(Spells.ghost, Spells.exhaust, Skills.frenzy, Skills.majesticRoar, Skills.frenzy, Skills.rollingThunder, Skills.frenzy, Skills.thunderClaws, Skills.frenzy, Skills.rollingThunder, Skills.frenzy, Skills.rollingThunder, Skills.thunderClaws, Skills.rollingThunder, Skills.rollingThunder, Skills.majesticRoar, Skills.majesticRoar, Skills.thunderClaws, Skills.majesticRoar, Skills.majesticRoar);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 4, 3, 0, 1, 0, 0, 0, 3, 0, 3, 0, 1);
    out += initUtility(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfAlacrity, Runes.greaterSealOfDefense, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfFortitude);
    block.html(out);
    initTooltipVolibear();
}

function initWarwick() {
    var out = initMain(Characters.warwick, Images.warwick, Items.malady, Items.bansheesVeil, Items.hextechGunblade, Items.theBlackCleaver, Items.guardianAngel, Items.sunfireCape);
    out += initSkills(Spells.smite, Spells.flash, Skills.huntersCall, Skills.hungeringStrike, Skills.hungeringStrike, Skills.huntersCall, Skills.hungeringStrike, Skills.infiniteDuress, Skills.hungeringStrike, Skills.bloodScent, Skills.hungeringStrike, Skills.bloodScent, Skills.infiniteDuress, Skills.bloodScent, Skills.bloodScent, Skills.bloodScent, Skills.huntersCall, Skills.infiniteDuress, Skills.huntersCall, Skills.huntersCall);
    out += initOffensive(0, 2, 0, 2, 1, 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(1, 1, 0, 2, 4, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfAlacrity, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipWarwick();
}

function initWukong() {
    var out = initMain(Characters.wukong, Images.wukong, Items.mercurysTreads, Items.trinityForce, Items.theBloodthirster, Items.youmuusGhostblade, Items.infinityEdge, Items.guardianAngel);
    out += initSkills(Spells.exhaust, Spells.flash, Skills.nimbusStrike, Skills.crushingBlow, Skills.decoy, Skills.crushingBlow, Skills.crushingBlow, Skills.cyclone, Skills.nimbusStrike, Skills.crushingBlow, Skills.nimbusStrike, Skills.crushingBlow, Skills.cyclone, Skills.nimbusStrike, Skills.nimbusStrike, Skills.decoy, Skills.decoy, Skills.cyclone, Skills.decoy, Skills.decoy);
    out += initOffensive(1, 3, 0, 0, 4, 4, 1, 0, 1, 0, 0, 0, 3, 0, 3, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfResillence, Runes.greaterGlyphOfFocus, Runes.greaterQuintOfDesolation);
    block.html(out);
    initTooltipWukong();
}

function initXerath() {
    var out = initMain(Characters.xerath, Images.xerath, Items.sorcerersShoes, Items.rylaisCrystalScepter, Items.rabadonsDeathcap, Items.zhonyasHourglass, Items.abyssalScepter, Items.voidStaff);
    out += initSkills(Spells.ignite, Spells.flash, Skills.arcanopulse, Skills.mageChains, Skills.arcanopulse, Skills.locusOfPower, Skills.arcanopulse, Skills.arcaneBarrage, Skills.arcanopulse, Skills.locusOfPower, Skills.arcanopulse, Skills.locusOfPower, Skills.arcaneBarrage, Skills.locusOfPower, Skills.locusOfPower, Skills.mageChains, Skills.mageChains, Skills.arcaneBarrage, Skills.mageChains, Skills.mageChains);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfVitality, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipXerath();
}

function initXin() {
    var out = initMain(Characters.xin, Images.xinZhao, Items.mercurysTreads, Items.youmuusGhostblade, Items.wrigglesLantern, Items.frozenMallet, Items.theBlackCleaver, Items.bansheesVeil);
    out += initSkills(Spells.ignite, Spells.ghost, Skills.audaciousCharge, Skills.battleCry, Skills.threeTalonStrike, Skills.audaciousCharge, Skills.audaciousCharge, Skills.crescentSweep, Skills.audaciousCharge, Skills.battleCry, Skills.audaciousCharge, Skills.battleCry, Skills.crescentSweep, Skills.battleCry, Skills.battleCry, Skills.threeTalonStrike, Skills.threeTalonStrike, Skills.crescentSweep, Skills.threeTalonStrike, Skills.threeTalonStrike);
    out += initOffensive(1, 3, 0, 0, 4, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 0, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfDesolation, Runes.greaterSealOfAlacrity, Runes.greaterGlyphOfAlacrity, Runes.greaterQuintOfAlacrity);
    block.html(out);
    initTooltipXin();
}

function initYorick() {
    var out = initMain(Characters.yorick, Images.yorick, Items.mercurysTreads, Items.manamune, Items.frozenMallet, Items.theBloodthirster, Items.atmasImpaler, Items.bansheesVeil);
    out += initSkills(Spells.ignite, Spells.flash, Skills.omenOfPestilence, Skills.omenOfFamine, Skills.omenOfWar, Skills.omenOfFamine, Skills.omenOfFamine, Skills.omenOfDeath, Skills.omenOfFamine, Skills.omenOfPestilence, Skills.omenOfFamine, Skills.omenOfWar, Skills.omenOfDeath, Skills.omenOfPestilence, Skills.omenOfWar, Skills.omenOfPestilence, Skills.omenOfWar, Skills.omenOfDeath, Skills.omenOfPestilence, Skills.omenOfWar);
    out += initOffensive(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 1, 4, 3, 0, 0, 0, 1, 0, 4, 0, 3, 3, 1);
    out += initRunes(Runes.greaterMarkOfStrength, Runes.greaterSealOfResillence, Runes.greaterGlyphOfShielding, Runes.greaterQuintOfStrength);
    block.html(out);
    initTooltipYorick();
}

function initZiggs() {
    var out = initMain(Characters.ziggs, Images.ziggs, Items.sorcerersShoes, Items.rabadonsDeathcap, Items.willOfTheAncients, Items.zhonyasHourglass, Items.voidStaff, Items.lichBane);
    out += initSkills(Spells.ignite, Spells.flash, Skills.bouncingBomb, Skills.hexplosiveMinefield, Skills.bouncingBomb, Skills.satchelCharge, Skills.bouncingBomb, Skills.megaInfernoBomb, Skills.bouncingBomb, Skills.hexplosiveMinefield, Skills.bouncingBomb, Skills.hexplosiveMinefield, Skills.megaInfernoBomb, Skills.hexplosiveMinefield, Skills.hexplosiveMinefield, Skills.satchelCharge, Skills.satchelCharge, Skills.megaInfernoBomb, Skills.satchelCharge, Skills.satchelCharge);
    out += initOffensive(1, 0, 3, 0, 0, 4, 0, 0, 0, 1, 3, 0, 0, 4, 0, 4, 1);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 0, 3, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfReplenishment, Runes.greaterGlyphOfForce, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipZiggs();
}

function initZilean() {
    var out = initMain(Characters.zilean, Images.zilean, Items.ionianBootsOfLucidity, Items.rodOfAges, Items.morellosEvilTome, Items.rabadonsDeathcap, Items.voidStaff, Items.zhonyasHourglass);
    out += initSkills(Spells.clairvoyance, Spells.flash, Skills.timeBomb, Skills.rewind, Skills.timeWrap, Skills.timeBomb, Skills.timeBomb, Skills.chronoShift, Skills.timeBomb, Skills.timeWrap, Skills.timeBomb, Skills.timeWrap, Skills.chronoShift, Skills.rewind, Skills.timeWrap, Skills.rewind, Skills.timeWrap, Skills.chronoShift, Skills.rewind, Skills.rewind);
    out += initOffensive(0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initDefense(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    out += initUtility(1, 3, 0, 0, 4, 0, 1, 4, 0, 0, 2, 4, 1, 0, 3, 1);
    out += initRunes(Runes.greaterMarkOfInsight, Runes.greaterSealOfPotency, Runes.greaterGlyphOfPotency, Runes.greaterQuintOfPotency);
    block.html(out);
    initTooltipZilean();
}