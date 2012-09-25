// Изображения персонажей
var Images = {
    "ahri": "<img src='img/characters/ahri.png' id='ahri'/>",
    "akali": "<img src='img/characters/akali.png' id='akali'/>",
    "alistar": "<img src='img/characters/alistar.png' id='alistar'/>",
    "amumu": "<img src='img/characters/amumu.png' id='amumu'/>",
    "anivia": "<img src='img/characters/anivia.png' id='anivia'/>",
    "annie": "<img src='img/characters/annie.png' id='annie'/>",
    "ashe": "<img src='img/characters/ashe.png' id='ashe'/>",
    "blitzcrank": "<img src='img/characters/blitzcra.png' id='blitzcrank'/>",
    "brand": "<img src='img/characters/brand.png' id='brand'/>",
    "caitlyn": "<img src='img/characters/caitlyn.png' id='caitlyn'/>",
    "cassiopeia": "<img src='img/characters/cassiope.png' id='cassiopeia'/>",
    "chogath": "<img src='img/characters/chogath.png' id='chogath'/>",
    "corki": "<img src='img/characters/corki.png' id='corki'/>",
    "darius": "<img src='img/characters/darius.png' id='darius'/>",
    "draven": "<img src='img/characters/draven.png' id='draven'/>",
    "drMundo": "<img src='img/characters/dr-mundo.png' id='drMundo'/>",
    "evelynn": "<img src='img/characters/evelynn.png' id='evelynn'/>",
    "ezreal": "<img src='img/characters/ezreal.png' id='ezreal'/>",
    "fiddlesticks": "<img src='img/characters/fiddlest.png' id='fiddlesticks'/>",
    "fiora": "<img src='img/characters/fiora.png' id='fiora'/>",
    "fizz": "<img src='img/characters/fizz.png' id='fizz'/>",
    "galio": "<img src='img/characters/galio.png' id='galio'/>",
    "gangplank": "<img src='img/characters/gangplan.png' id='gangplank'/>",
    "garen": "<img src='img/characters/garen.png' id='garen'/>",
    "gragas": "<img src='img/characters/gragas.png' id='gragas'/>",
    "graves": "<img src='img/characters/graves.png' id='graves'/>",
    "heimerdinger": "<img src='img/characters/heimerdi.png' id='heimerdinger'/>",
    "hecarim": "<img src='img/characters/hecarim.png' id='hecarim'/>",
    "irelia": "<img src='img/characters/irelia.png' id='irelia'/>",
    "janna": "<img src='img/characters/janna.png' id='janna'/>",
    "jarvan": "<img src='img/characters/jarvan-i.png' id='jarvan'/>",
    "jax": "<img src='img/characters/jax.png' id='jax'/>",
    "karma": "<img src='img/characters/karma.png' id='karma'/>",
    "karthus": "<img src='img/characters/karthus.png' id='karthus'/>",
    "kassadin": "<img src='img/characters/kassadin.png' id='kassadin'/>",
    "katarina": "<img src='img/characters/katarina.png' id='katarina'/>",
    "kayle": "<img src='img/characters/kayle.png' id='kayle'/>",
    "kennen": "<img src='img/characters/kennen.png' id='kennen'/>",
    "kogmaw": "<img src='img/characters/kogmaw.png' id='kogmaw'/>",
    "leblanc": "<img src='img/characters/leblanc.png' id='leblanc'/>",
    "leeSin": "<img src='img/characters/lee-sin.png' id='leeSin'/>",
    "leona": "<img src='img/characters/leona.png' id='leona'/>",
    "lulu": "<img src='img/characters/lulu.png' id='lulu'/>",
    "lux": "<img src='img/characters/lux.png' id='lux'/>",
    "malphite": "<img src='img/characters/malphite.png' id='malphite'/>",
    "malzahar": "<img src='img/characters/malzahar.png' id='malzahar' />",
    "maokai": "<img src='img/characters/maokai.png' id='maokai'/>   ",
    "masterYi": "<img src='img/characters/master-y.png' id='masterYi'/>",
    "missFortune": "<img src='img/characters/miss-for.png' id='missFortune'/>",
    "mordekaiser": "<img src='img/characters/mordekai.png' id='mordekaiser'/>",
    "morgana": "<img src='img/characters/morgana.png' id='morgana'/>",
    "nasus": "<img src='img/characters/nasus.png' id='nasus'/>",
    "nautilus": "<img src='img/characters/nautilus.png' id='nautilus'/>",
    "nidalee": "<img src='img/characters/nidalee.png' id='nidalee'/>",
    "nocturne": "<img src='img/characters/nocturne.png' id='nocturne'/>",
    "nunu": "<img src='img/characters/nunu.png' id='nunu'/>",
    "olaf": "<img src='img/characters/olaf.png' id='olaf'/>",
    "orianna": "<img src='img/characters/orianna.png' id='orianna'/>",
    "pantheon": "<img src='img/characters/pantheon.png' id='pantheon'/>",
    "poppy": "<img src='img/characters/poppy.png' id='poppy'/>",
    "rammus": "<img src='img/characters/rammus.png' id='rammus'/>",
    "renekton": "<img src='img/characters/renekton.png' id='renekton'/>",
    "riven": "<img src='img/characters/riven.png' id='riven'/>",
    "rumble": "<img src='img/characters/rumble.png' id='rumble'/>",
    "ryze": "<img src='img/characters/ryze.png' id='ryze'/>",
    "sejuani": "<img src='img/characters/sejuani.png' id='sejuani'/>",
    "shaco": "<img src='img/characters/shaco.png' id='shaco'/>",
    "shen": "<img src='img/characters/shen.png' id='shen'/>",
    "shyvana": "<img src='img/characters/shyvana.png' id='shyvana'/>",
    "singed": "<img src='img/characters/singed.png' id='singed'/>",
    "sion": "<img src='img/characters/sion.png' id='sion'/>",
    "sivir": "<img src='img/characters/sivir.png' id='sivir'/>",
    "skarner": "<img src='img/characters/skarner.png' id='skarner'/>",
    "sona": "<img src='img/characters/sona.png' id='sona'/>",
    "soraka": "<img src='img/characters/soraka.png' id='soraka'/>",
    "swain": "<img src='img/characters/swain.png' id='swain'/>",
    "talon": "<img src='img/characters/talon.png' id='talon'/>",
    "taric": "<img src='img/characters/taric.png' id='taric'/>",
    "teemo": "<img src='img/characters/teemo.png' id='teemo'/>",
    "tristana": "<img src='img/characters/tristana.png' id='tristana'/>",
    "trundle": "<img src='img/characters/trundle.png' id='trundle'/>",
    "tryndamere": "<img src='img/characters/tryndame.png' id='tryndamere'/>",
    "twisted": "<img src='img/characters/twisted.png' id='twisted'/>",
    "twitch": "<img src='img/characters/twitch.png' id='twitch'/>",
    "udyr": "<img src='img/characters/udyr.png' id='udyr'/>",
    "urgot": "<img src='img/characters/urgot.png' id='urgot'/>",
    "varus": "<img src='img/characters/varus.png' id='varus'/>",
    "vayne": "<img src='img/characters/vayne.png' id='vayne'/>",
    "veigar": "<img src='img/characters/veigar.png' id='veigar'/>",
    "viktor": "<img src='img/characters/viktor.png' id='viktor'/>",
    "vladimir": "<img src='img/characters/vladimir.png' id='vladimir'/>",
    "volibear": "<img src='img/characters/volibear.png' id='volibear'/>",
    "warwick": "<img src='img/characters/warwick.png' id='warwick'/>",
    "wukong": "<img src='img/characters/wukong.png' id='wukong'/>",
    "xerath": "<img src='img/characters/xerath.png' id='xerath'/>",
    "xinZhao": "<img src='img/characters/xin-zhao.png' id='xinZhao'/>",
    "yorick": "<img src='img/characters/yorick.png' id='ziggs'/>",
    "ziggs": "<img src='img/characters/ziggs.png' id='ziggs'/>",
    "zilean": "<img src='img/characters/zilean.png' id='zilean'/>"
};