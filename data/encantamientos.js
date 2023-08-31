export const enchants = [
/* -- A PARTIR DE AQUÍ SON ENCANTAMIENTOS 'SIMPLE' -- */
{
    enchantId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    nombre: "Strike",
    maxLevel: "III",
    info: "Probabilidad de golpear un rayo al oponente.",
    probabilidad: "24/32/40",
    cooldown: "3/3/4",
    seAplica: [
        "espada",
        "arco",
        "ballesta",
        "tridente"
    ],
    calidad: "Simple"
},
{
    enchantId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    nombre: "Acuático",
    maxLevel: "I",
    info: "Te permite respirar bajo el agua.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "casco"
    ],
    calidad: "Simple"
},
{
    enchantId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    nombre: "Fundidor",
    maxLevel: "III",
    info: "Probabildiad de fundir bloques al minarlos.",
    probabilidad: "33/66/100",
    cooldown: "0",
    seAplica: [
        "pico"
    ],
    calidad: "Simple"
},
{
    enchantId: "54e0eccd-8f36-462b-b68a-8182611d9add",
    nombre: "Experiencia",
    maxLevel: "V",
    info: "Probabildiad de ganar más EXP de minerales.",
    probabilidad: "15/30/45/60/75",
    cooldown: "1/2/3/4/5",
    seAplica: [
        "pico"
    ],
    calidad: "Simple"
},
{
    enchantId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    nombre: "Hasten",
    maxLevel: "III",
    info: "Probabildiad de ganar prisa minera después de romper bloques.",
    probabilidad: "15/25/45",
    cooldown: "1/2/3/4/5",
    seAplica: [
        "pico",
        "pala",
        "hacha"
    ],
    calidad: "Simple"
},
{
    enchantId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    nombre: "Rebreather",
    maxLevel: "II",
    info: "Probabildiad de ganar oxígeno al picar bajo el agua.",
    probabilidad: "33/60",
    cooldown: "3",
    seAplica: [
        "pico"
    ],
    calidad: "Simple"
},
{
    enchantId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    nombre: "Visión Nocturna",
    maxLevel: "I",
    info: "Te da visión nocturna",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "casco"
    ],
    calidad: "Simple"
},
{
    enchantId: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    nombre: "Decapitation",
    maxLevel: "III",
    info: "Probabildiad de degollar la cabeza del oponente al matarlo.",
    probabilidad: "5/10/15",
    cooldown: "10",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Simple"
},
{
    enchantId: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    nombre: "Forcefield",
    maxLevel: "V",
    info: "Probabildiad de empujar al oponente",
    probabilidad: "30/36/42/48/54",
    cooldown: "12/12/12/13/13",
    seAplica: [
        "espada"
    ],
    calidad: "Simple"
},
{
    enchantId: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    nombre: "Epicness",
    maxLevel: "III",
    info: "Adquiere párticulas y efectos.",
    probabilidad: "20/40/60",
    cooldown: "3",
    seAplica: [
        "espada"
    ],
    calidad: "Simple"
},
{
    enchantId: "aad29d11-ea98-41ee-9285-b916638cac4a",
    nombre: "Death Punch",
    maxLevel: "V",
    info: "Incrementa el daño producido a Zombies.",
    probabilidad: "16/20/40/60/80",
    cooldown: "2/2/2/1",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Simple"
},
{
    enchantId: "04701903-bc79-49c6-bc11-1af7e3651358",
    nombre: "Bone Crusher",
    maxLevel: "III",
    info: "Incrementa el daño producido a Esqueletos.",
    probabilidad: "25/50/74",
    cooldown: "2/2/1",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Simple"
},

/* -- A PARTIR DE AQUÍ SON ENCANTAMIENTOS 'UNIQUE' -- */
{
    enchantId: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    nombre: "Replanter",
    maxLevel: "I",
    info: "Replanta la cosecha cuando la rompes.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "azada"
    ],
    calidad: "Unique"
},
{
    enchantId: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    nombre: "Hambre",
    maxLevel: "IV",
    info: "Probabildiad de darle el efecto de hambre a tu enemigo.",
    probabilidad: "12/15/18/22",
    cooldown: "8",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Unique"
},
{
    enchantId: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    nombre: "Berserk",
    maxLevel: "V",
    info: "Probabildiad de ganar fuerza y dar fatiga al minar al adversario.",
    probabilidad: "4/8/12/20",
    cooldown: "8/7/6/5/4",
    seAplica: [
        "pico"
    ],
    calidad: "Unique"
},
{
    enchantId: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    nombre: "Reflejo",
    maxLevel: "V",
    info: "Absorbe el daño enemigo y lo refleja de regreso.",
    probabilidad: "4/8/12/20",
    cooldown: "5",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Unique"
},
{
    enchantId: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    nombre: "Ward",
    maxLevel: "IV",
    info: "Probabildiad de absorber el daño enemigo.",
    probabilidad: "3/7/11/15",
    cooldown: "5",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Unique"
},
{
    enchantId: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    nombre: "Explosivo",
    maxLevel: "V",
    info: "Probabildiad de que las flechas exploten.",
    probabilidad: "20/30/40/50/60",
    cooldown: "7/8/8/8/9",
    seAplica: [
        "arco"
    ],
    calidad: "Unique"
},
{
    enchantId: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    nombre: "Featherweight",
    maxLevel: "III",
    info: "Probabildiad de obtener un estallido de prisa.",
    probabilidad: "35/55/75",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Unique"
},
{
    enchantId: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    nombre: "Fundido",
    maxLevel: "IV",
    info: "Probabildiad de poner en llamas a tu enemigo.",
    probabilidad: "21/32/49/73",
    cooldown: "2",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Unique"
},
{
    enchantId: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    nombre: "Ravenous",
    maxLevel: "IV",
    info: "Probabildiad de perder el hambre en una pelea.",
    probabilidad: "14/18/22/26",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Unique"
},
{
    enchantId: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    nombre: "Telepathy",
    maxLevel: "IV",
    info: "Coloca automáticamente bloques rotos a tu inventario.",
    probabilidad: "40/60/80",
    cooldown: "0",
    seAplica: [
        "pico",
        "pala",
        "hacha"
    ],
    calidad: "Unique"
},
{
    enchantId: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    nombre: "Explosive Demise",
    maxLevel: "VIII",
    info: "Spawnea Creepers como tus guardaespaldas cuando estás a punto de morir.",
    probabilidad: "13/17/24/30/38/46/55/69",
    cooldown: "3",
    seAplica: [
        "pantalones"
    ],
    calidad: "Unique"
},
{
    enchantId: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    nombre: "Cazador",
    maxLevel: "IV",
    info: "Incrementa el daño hecho a mobs pasivos.",
    probabilidad: "25/50/75",
    cooldown: "2",
    seAplica: [
        "arco",
        "ballesta",
        "tridente",
        "espada",
        "hacha"
    ],
    calidad: "Unique"
},
{
    enchantId: "d2785924-743d-49b3-8f03-ec258e640503",
    nombre: "Soulles",
    maxLevel: "V",
    info: "Incrementa el daño hecho a mobs hostiles.",
    probabilidad: "25/50/75",
    cooldown: "2",
    seAplica: [
        "arco",
        "ballesta",
        "tridente",
    ],
    calidad: "Unique"
},
{
    enchantId: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    nombre: "Virus",
    maxLevel: "III",
    info: "Probabildiad de dar efecto de veneno al objetivo.",
    probabilidad: "6/22/35",
    cooldown: "2",
    seAplica: [
        "arco",
        "ballesta",
        "tridente",
    ],
    calidad: "Unique"
},
{
    enchantId: "1c079479-8586-494f-ab53-219325432536",
    nombre: "Perish",
    maxLevel: "V",
    info: "Probabildiad de dar efecto de Wither al oponente.",
    probabilidad: "9/11/12/14/17/21",
    cooldown: "3",
    seAplica: [
        "arco",
        "ballesta",
        "tridente",
    ],
    calidad: "Unique"
},
{
    enchantId: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    nombre: "Devour",
    maxLevel: "III",
    info: "Probabildiad de obtener comida cuando matas mobs.",
    probabilidad: "10/15/20",
    cooldown: "0",
    seAplica: [
        "espada",
        "hacha",
    ],
    calidad: "Unique"
},
/* -- A PARTIR DE AQUÍ SON ENCANTAMIENTOS 'ELITE' -- */
{
    enchantId: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    nombre: "Impacto",
    maxLevel: "IV",
    info: "Probabildiad de duplicar el daño inflingido.",
    probabilidad: "5/8/11/14",
    cooldown: "3/3/5/6",
    seAplica: [
        "tridente",
    ],
    calidad: "Elite"
},
{
    enchantId: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    nombre: "Vein Miner",
    maxLevel: "III",
    info: "Mina todo el conjunto de menas.",
    probabilidad: "15/35/35",
    cooldown: "4/3/3",
    seAplica: [
        "pico",
    ],
    calidad: "Elite"
},
{
    enchantId: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    nombre: "Cazador del End",
    maxLevel: "V",
    info: "Incrementa el daño producido al Dragón y Endermans.",
    probabilidad: "16/21/29/34/41",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Elite"
},
{
    enchantId: "d339adf3-e004-4c20-a120-40e8874c66cb",
    nombre: "Inmolación",
    maxLevel: "III",
    info: "Incrementa el daño producido a las arañas.",
    probabilidad: "25/50/75",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Elite"
},
{
    enchantId: "d37a651a-d501-483b-aae6-a9659b0757a0",
    nombre: "Hook",
    maxLevel: "III",
    info: "Adquiere más XP pescando.",
    probabilidad: "15/25/35",
    cooldown: "12",
    seAplica: [
        "caña",
    ],
    calidad: "Elite"
},
{
    enchantId: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    nombre: "Snap",
    maxLevel: "III",
    info: "Atrae a la entidad dada.",
    probabilidad: "15/25/35",
    cooldown: "4/6/8",
    seAplica: [
        "caña",
    ],
    calidad: "Elite"
},
{
    enchantId: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    nombre: "Reaper",
    maxLevel: "IV",
    info: "Probabilidad de dar al oponente el efecto de Wither y ceguera al dañarle.",
    probabilidad: "8/10/12/14",
    cooldown: "16/14/12/10",
    seAplica: [
        "hacha",
    ],
    calidad: "Elite"
},
{
    enchantId: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    nombre: "Cazador del Nether",
    maxLevel: "V",
    info: "Incrementa el daño producido a mobs del Nether.",
    probabilidad: "16/21/29/34/41",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha",
    ],
    calidad: "Elite"
},
{
    enchantId: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    nombre: "Blind",
    maxLevel: "III",
    info: "Probabilidad de causar ceguera al atacar.",
    probabilidad: "17/25/33",
    cooldown: "3",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    nombre: "Allure",
    maxLevel: "III",
    info: "Al atacar atrae el mob hacia ti.",
    probabilidad: "30/60/60",
    cooldown: "0",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    nombre: "Frozen",
    maxLevel: "III",
    info: "Probabilidad de cauar el efecto de lentitud a tu oponente.",
    probabilidad: "19/19/26",
    cooldown: "6",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Elite"
},
{
    enchantId: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    nombre: "Paralyze",
    maxLevel: "IV",
    info: "Tira un rayo al enemigo y dale efecto de lentitud.",
    probabilidad: "7/10/13/16",
    cooldown: "3",
    seAplica: [
        "espada",
        "hacha",
    ],
    calidad: "Elite"
},
{
    enchantId: "bc2847e9-5323-403f-b7cf-57fde044a955",
    nombre: "Poción",
    maxLevel: "III",
    info: "Probabilidad de tener un efecto de poción.",
    probabilidad: "6/22/35",
    cooldown: "2",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82a3",
    nombre: "Poisoned",
    maxLevel: "IV",
    info: "Probabilidad de dar veneno a tu oponente.",
    probabilidad: "8/12/17/23",
    cooldown: "6",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82a4",
    nombre: "Reforjado",
    maxLevel: "X",
    info: "Protege la durabilidad de armas y herramientas. Los ítems tardarán más en romperse.",
    probabilidad: "10/20/30/(...)/80/90/100",
    cooldown: "0",
    seAplica: [
        "pala",
        "pico",
        "espada",
        "hacha"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82a5",
    nombre: "Snare",
    maxLevel: "IV",
    info: "Probabilidad de dar lentitud y fatiga al enemigo.",
    probabilidad: "12/19/24/29",
    cooldown: "3",
    seAplica: [
        "arco",
        "ballesta",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82a6",
    nombre: "Saltador",
    maxLevel: "III",
    info: "Potencidaor de salto.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "botas",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82a7",
    nombre: "Undead Ruse",
    maxLevel: "X",
    info: "Al pegar, probabilidad de spawnear hordas de Zombies para distraer y desorientar a tus oponentes.",
    probabilidad: "3/4/5/6/7/9/10/14/18/22",
    cooldown: "6",
    seAplica: [
        "botas",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82a8",
    nombre: "Voodoo",
    maxLevel: "VI",
    info: "Probabilidad de dar el efecto de debilidad a tu víctima.",
    probabilidad: "5/7/9/13/16/21",
    cooldown: "2",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82a9",
    nombre: "Wither",
    maxLevel: "V",
    info: "Probabilidad de dar el efecto de debilidad a tu víctima.",
    probabilidad: "9/11/14/17/21",
    cooldown: "3",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82aa",
    nombre: "Bomba de Humo",
    maxLevel: "VIII",
    info: "Cuando estás a punto de morir spawnearás una bomba de humo para distraer a los enemigos.",
    probabilidad: "9/15/23/28/30/34/36/38",
    cooldown: "2",
    seAplica: [
        "casco",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82ab",
    nombre: "Infernal",
    maxLevel: "III",
    info: "Probabilidad de dar el efecto de fuego explosivo.",
    probabilidad: "15/30/50",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82ac",
    nombre: "Extinguish",
    maxLevel: "III",
    info: "Probabilidad de extinguirte cuando estés quemándote.",
    probabilidad: "20/60/80",
    cooldown: "0",
    seAplica: [
        "pantalones",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82ad",
    nombre: "Onda de Choque",
    maxLevel: "V",
    info: "Probabilidad de empujar al rival cuando tengas la salud baja.",
    probabilidad: "10/20/30/40/50",
    cooldown: "4",
    seAplica: [
        "pechera",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82ae",
    nombre: "Vampire",
    maxLevel: "III",
    info: "Probabilidad de recuperar vida hasta 3HP después de tu rayo.",
    probabilidad: "7/10/15",
    cooldown: "4",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82af",
    nombre: "Greatsword",
    maxLevel: "V",
    info: "Multiplica el daño inflingido contra jugadores que estén con un arco al pegarle.",
    probabilidad: "15/25/35/45/55",
    cooldown: "2",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b0",
    nombre: "Bowmaster",
    maxLevel: "V",
    info: "Multiplica el daño inflingido contra jugadores que estén con una espada al pegarle.",
    probabilidad: "15/25/35/45/55",
    cooldown: "2",
    seAplica: [
        "arco",
        "ballesta",
        "tridente"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b1",
    nombre: "Rocket Escape",
    maxLevel: "III",
    info: "Vuela por los aires cuando estés bajo de salud.",
    probabilidad: "20/34/40",
    cooldown: "8",
    seAplica: [
        "botas",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b2",
    nombre: "Trickster",
    maxLevel: "VIII",
    info: "Cuando un jugador te pega tienes probabilidad de aparecer detras de él.",
    probabilidad: "8/14/17/2129/37/46/51",
    cooldown: "5",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b3",
    nombre: "Curse",
    maxLevel: "II",
    info: "Probabilidad de dar al enemigo fatiga minera.",
    probabilidad: "13/17",
    cooldown: "15",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b4",
    nombre: "Momentum",
    maxLevel: "II",
    info: "Probabilidad de ganar un boost de velocidad al usar cohetes.",
    probabilidad: "15/35/65",
    cooldown: "3",
    seAplica: [
        "elytras",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b5",
    nombre: "Marksman",
    maxLevel: "IV",
    info: "Incrementa el daño producido con ballestas.",
    probabilidad: "13/19/25/32",
    cooldown: "3",
    seAplica: [
        "ballesta",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b6",
    nombre: "Poseidon",
    maxLevel: "IV",
    info: "Incrementa el daño producido con tridentes.",
    probabilidad: "13/19/25/32",
    cooldown: "3",
    seAplica: [
        "tridente",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b7",
    nombre: "Replensih",
    maxLevel: "III",
    info: "Probabilidad de restaurar el hambre al minar.",
    probabilidad: "30/40/60",
    cooldown: "0",
    seAplica: [
        "pico",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b8",
    nombre: "Missile",
    maxLevel: "V",
    info: "Las flechas se convierten en bolas de fuego.",
    probabilidad: "10/20/50/70",
    cooldown: "3",
    seAplica: [
        "ballesta",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82b9",
    nombre: "Crítico",
    maxLevel: "III",
    info: "Aumenta el daño inflingido con un golpe crítico.",
    probabilidad: "7/8/12",
    cooldown: "3",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82ba",
    nombre: "Spark",
    maxLevel: "III",
    info: "Pone en llamas al enemigo.",
    probabilidad: "25/35/15",
    cooldown: "3/6/8",
    seAplica: [
        "tridente",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82bb",
    nombre: "Blunt Force",
    maxLevel: "IV",
    info: "Probabilidad de golpear con mayor fuerza.",
    probabilidad: "5/8/10/12",
    cooldown: "5",
    seAplica: [
        "hacha",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82bc",
    nombre: "Suspend",
    maxLevel: "III",
    info: "Probabilidad de no causar empuje a los mobs.",
    probabilidad: "40/80/80",
    cooldown: "0",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82bd",
    nombre: "Nightwalker",
    maxLevel: "III",
    info: "Congela a los mobs por la noche.",
    probabilidad: "40/70/100",
    cooldown: "0",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},
{
    enchantId: "64e88ff14708667b390d82be",
    nombre: "Magnet",
    maxLevel: "III",
    info: "Tus ataques acercan al enemigo hacia ti.",
    probabilidad: "30/60",
    cooldown: "0",
    seAplica: [
        "espada",
    ],
    calidad: "Elite"
},

/* -- A PARTIR DE AQUÍ SON ENCANTAMIENTOS 'ULTIMATE' -- */
{
    enchantId: "64e88ff14708667b390d82bf",
    nombre: "Plantador",
    maxLevel: "III",
    info: "Planta semillas en un radio de 3x3. [Shift-ClickIzq].",
    probabilidad: "100",
    cooldown: "3/2/2",
    seAplica: [
        "azada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c0",
    nombre: "Plantador de Patatas",
    maxLevel: "III",
    info: "Planta patatas en un radio de 3x3. [Shift-ClickIzq].",
    probabilidad: "30/60",
    cooldown: "0",
    seAplica: [
        "azada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c1",
    nombre: "Plantador de Zanahorias",
    maxLevel: "III",
    info: "Planta zanahorias en un radio de 3x3. [Shift-ClickIzq].",
    probabilidad: "30/60",
    cooldown: "0",
    seAplica: [
        "azada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c2",
    nombre: "Piernas de Gelatina",
    maxLevel: "III",
    info: "Probabilidad de anular el daño de caída.",
    probabilidad: "40/80/80",
    cooldown: "0",
    seAplica: [
        "botas",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c3",
    nombre: "Suerte Marina",
    maxLevel: "III",
    info: "Probabilidad de aumentar la suerte mientras estás pescando.",
    probabilidad: "75/85/95",
    cooldown: "12",
    seAplica: [
        "caña",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c4",
    nombre: "Permafrost",
    maxLevel: "V",
    info: "Probabilidad de dar lentitud y sangrar al oponente.",
    probabilidad: "15/18/19/21/25",
    cooldown: "12/12/12/13/13",
    seAplica: [
        "espada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c5",
    nombre: "Talador",
    maxLevel: "III",
    info: "Probabilidad de romper un árbol de un solo bloque.",
    probabilidad: "15/35/55",
    cooldown: "5/5/6",
    seAplica: [
        "hacha",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c6",
    nombre: "Distancia",
    maxLevel: "IV",
    info: "Oportunidad de distanciarse de los enemigos y ganar regeneración.",
    probabilidad: "16/20/24/28",
    cooldown: "6",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c7",
    nombre: "Cleave",
    maxLevel: "VII",
    info: "Daña a los enemigos que estén a un radio que incrementa con el nivel de encanto.",
    probabilidad: "4/5/6/7/9/12/15",
    cooldown: "8/8/9/9/10/12/14",
    seAplica: [
        "hacha",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c8",
    nombre: "Ambit",
    maxLevel: "VII",
    info: "Daña a los mobs que estén a un radio que incrementa con el nivel de encanto.",
    probabilidad: "4/5/6/7/9/12/15",
    cooldown: "8/8/9/9/10/12/14",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82c9",
    nombre: "Angelic",
    maxLevel: "V",
    info: "Te cura cuando recibes daño.",
    probabilidad: "9/14/17/26/34",
    cooldown: "7/9/11/13/15",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82ca",
    nombre: "Arrow Deflect",
    maxLevel: "IV",
    info: "Probabilidad de prevenir el daño enemigo procedente de flechas.",
    probabilidad: "15/25/35/45",
    cooldown: "6",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82cb",
    nombre: "Arrow Break",
    maxLevel: "VI",
    info: "Probabilidad de que las flechas reboten contra ti al sostener un ítem con este encantamiento.",
    probabilidad: "15/25/35/45/55/65",
    cooldown: "8/8/8/9/9/10",
    seAplica: [
        "hacha",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82cc",
    nombre: "Diminish",
    maxLevel: "I",
    info: "Probabilidad de dar a tu enemigo fatiga minera.",
    probabilidad: "13",
    cooldown: "0",
    seAplica: [
        "hacha",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82cd",
    nombre: "Interrupt",
    maxLevel: "II",
    info: "Probabilidad de dar a tu enemigo fatiga minera.",
    probabilidad: "13/17",
    cooldown: "15",
    seAplica: [
        "espada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82ce",
    nombre: "Exaltado",
    maxLevel: "II",
    info: "Probabilidad de remover efectos de poción negativos.",
    probabilidad: "12/16/22/36",
    cooldown: "8",
    seAplica: [
        "espada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82cf",
    nombre: "Ragdoll",
    maxLevel: "IV",
    info: "Probabilidad de ser empujado al ser golpeado.",
    probabilidad: "10/20/30/50",
    cooldown: "4",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d0",
    nombre: "Block",
    maxLevel: "II",
    info: "Probabilidad de denegar un ataque y dar 4 da daño de vuelta.",
    probabilidad: "16/22/30",
    cooldown: "4",
    seAplica: [
        "espada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d1",
    nombre: "Trench",
    maxLevel: "IX",
    info: "Probabilidad de romper bloques en 3x3.",
    probabilidad: "13/26/36/49/59/72/85/90/100",
    cooldown: "0",
    seAplica: [
        "pico",
        "pala"
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d2",
    nombre: "Dodge",
    maxLevel: "V",
    info: "Probabilidad de esquivar daño físico del enemigo, la probabilidad aumenta al agacharse.",
    probabilidad: "7/12/16/22/27",
    cooldown: "8",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"    
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d3",
    nombre: "Guardians",
    maxLevel: "X",
    info: "Spawnea Golems de hierro para apoyarte en tu pelea PVP.",
    probabilidad: "6/9/13/14/16/17/18/20/22/24",
    cooldown: "8/8/8/8/9/10/12/12/15/15",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"    
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d4",
    nombre: "Aspecto de Hielo",
    maxLevel: "III",
    info: "Probabilidad de causar el efecto de lentitud a tu enemigo.",
    probabilidad: "15/23/31",
    cooldown: "2",
    seAplica: [
        "espada",   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d5",
    nombre: "Reinforced",
    maxLevel: "IV",
    info: "Reduce el daño recibido.",
    probabilidad: "15/45/60/75",
    cooldown: "1",
    seAplica: [
        "elytras",   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d6",
    nombre: "Implantación",
    maxLevel: "III",
    info: "Probabilidad de restaurar el hambre cada ciertos segundos.",
    probabilidad: "30/50/70",
    cooldown: "0",
    seAplica: [
        "casco",   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d7",
    nombre: "Escudo de Obsidiana",
    maxLevel: "I",
    info: "Adquiere resistencia al fuego permanente.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d8",
    nombre: "Piercing",
    maxLevel: "V",
    info: "Inflinge más daño.",
    probabilidad: "13/19/25/32/37",
    cooldown: "3",
    seAplica: [
        "arco",
        "ballesta",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82d9",
    nombre: "Arquero",
    maxLevel: "IV",
    info: "Incrementa el daño hecho por arcos.",
    probabilidad: "13/19/25/32",
    cooldown: "3",
    seAplica: [
        "arco",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82da",
    nombre: "Safeguard",
    maxLevel: "II",
    info: "Probabilidad de ganar daño y resistencia al defenderse.",
    probabilidad: "5/9",
    cooldown: "5",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82db",
    nombre: "Desaparecer",
    maxLevel: "IV",
    info: "Probabilidad de hacerte invisible cuando tienes poca salud.",
    probabilidad: "20/23/26/30",
    cooldown: "20",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82dc",
    nombre: "Confuse",
    maxLevel: "IV",
    info: "Probabilidad de dar al oponente el efecto de náusea.",
    probabilidad: "12/14/16/18",
    cooldown: "6/7/8/8",
    seAplica: [
        "espada",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82dd",
    nombre: "Disintegrate",
    maxLevel: "IV",
    info: "Probabilidad de inflingir daño extra a la durabilidad de la armadura enemiga por cada ataque.",
    probabilidad: "12/25/39/46",
    cooldown: "2",
    seAplica: [
        "espada",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82de",
    nombre: "Shatter",
    maxLevel: "IV",
    info: "Probabilidad de inflingir daño extra a la durabilidad de la armadura enemiga por cada ataque.",
    probabilidad: "12/25/39/46",
    cooldown: "2",
    seAplica: [
        "hacha",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82df",
    nombre: "Heavy",
    maxLevel: "V",
    info: "Probabilidad de disminuir el daño recibido por arcos en un 2% por nivel.",
    probabilidad: "4/9/12/16/21",
    cooldown: "4",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e0",
    nombre: "Hellfire",
    maxLevel: "V",
    info: "Las flechas se convierten en bolas de fuego.",
    probabilidad: "10/25/35/50/70",
    cooldown: "3",
    seAplica: [
        "arco",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e1",
    nombre: "Longbow",
    maxLevel: "IV",
    info: "Incrementa el daño hecho a enemigos que están sosteniendo un arco.",
    probabilidad: "12/17/25/33",
    cooldown: "4",
    seAplica: [
        "arco",
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e2",
    nombre: "Tanque",
    maxLevel: "IV",
    info: "Probabilidad de disminuir el daño recibido por hachas en un 2% por nivel.",
    probabilidad: "5/8/12/16",
    cooldown: "3",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e3",
    nombre: "Swordsman",
    maxLevel: "V",
    info: "Probabilidad de disminuir el daño recibido al sostener una espada hasta un 22% el máximo nivel.",
    probabilidad: "4/9/13/16/21",
    cooldown: "4",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e4",
    nombre: "Netherling",
    maxLevel: "III",
    info: "Doble de daño a mobs del nether.",
    probabilidad: "25/50/75",
    cooldown: "0",
    seAplica: [
        "espada",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e5",
    nombre: "Maestro del End",
    maxLevel: "III",
    info: "Doble de daño a mobs del End.",
    probabilidad: "25/50/75",
    cooldown: "0",
    seAplica: [
        "espada",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e6",
    nombre: "Creeper Armor",
    maxLevel: "III",
    info: "Probabilidad de ser inmune al daño explosivo. A niveles altos, tienes probabilidad de curarte.",
    probabilidad: "25/50/75",
    cooldown: "0",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d8550",
    nombre: "Spirits",
    maxLevel: "X",
    info: "Spawnea Blazes que te ayudan en la batalla PVP.",
    probabilidad: "2/2/3/5/8/12/15/19/22/27",
    cooldown: "8",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e7",
    nombre: "Sangrado",
    maxLevel: "VI",
    info: "Hace sangrar a tu enemigo.",
    probabilidad: "8/15/23/30/44/60",
    cooldown: "0",
    seAplica: [
        "hacha",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e8",
    nombre: "Immolation",
    maxLevel: "III",
    info: "Prende a todos los mobs en un radio en llamas.",
    probabilidad: "10/12/16",
    cooldown: "4/5/5",
    seAplica: [
        "espada",   
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82e9",
    nombre: "Striker",
    maxLevel: "III",
    info: "Hace que lluevan flechas sobre el oponente.",
    probabilidad: "15/18/22",
    cooldown: "8",
    seAplica: [
        "arco",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82ea",
    nombre: "Francotirador",
    maxLevel: "V",
    info: "Los headshots hacen el doble de daño.",
    probabilidad: "15/20/25/30/35",
    cooldown: "5",
    seAplica: [
        "arco",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82eb",
    nombre: "Aegis",
    maxLevel: "III",
    info: "Probabilidad de ganar velocidad al recibir daño de caída.",
    probabilidad: "40/60/70",
    cooldown: "3",
    seAplica: [
        "botas",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82ec",
    nombre: "Plummet",
    maxLevel: "III",
    info: "Inflinge daño a los mobs cercanos al recibir daño de caída.",
    probabilidad: "40/80",
    cooldown: "0",
    seAplica: [
        "botas",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82ee",
    nombre: "Nocturnal",
    maxLevel: "III",
    info: "Incrementa el daño a los mobs durante la noche.",
    probabilidad: "40/60/80",
    cooldown: "0",
    seAplica: [
        "espada",  
    ],
    calidad: "Ultimate"
},
{
    enchantId: "64e88ff14708667b390d82ef",
    nombre: "Fuddle",
    maxLevel: "III",
    info: "Cambia la hotbar (barra de ítems) del oponente.",
    probabilidad: "4/7/9",
    cooldown: "15",
    seAplica: [
        "espada",  
    ],
    calidad: "Ultimate"
},

/* -- A PARTIR DE AQUÍ SON ENCANTAMIENTOS 'LEGENDARY' -- */
{
    enchantId: "64e88ff14708667b390d82f0",
    nombre: "Twinge",
    maxLevel: "IV",
    info: "Haz sangrar a tu enemigo si el golpeo es a melee (cuerpo a cuerpo).",
    probabilidad: "5/8/11/14",
    cooldown: "3/3/5/6",
    seAplica: [
        "tridente",  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f1",
    nombre: "Wings",
    maxLevel: "I",
    info: "Vuela al equiparse.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "botas",  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f2",
    nombre: "Bestia",
    maxLevel: "IV",
    info: "Incrementa el daño hecho a mobs hostiles.",
    probabilidad: "25/50/75",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha"  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f3",
    nombre: "Cebo",
    maxLevel: "III",
    info: "Probabilidad de recibir el doble de drops al pescar.",
    probabilidad: "15/18/26",
    cooldown: "10/15/20",
    seAplica: [
        "caña",  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f4",
    nombre: "Endurecido",
    maxLevel: "III",
    info: "Probabilidad de recuperar la durabilidad cuando eres dañado por jugadores.",
    probabilidad: "25/35/45",
    cooldown: "7",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f5",
    nombre: "Patch",
    maxLevel: "III",
    info: "Probabilidad de recuperar la durabilidad cuando eres dañado por mobs.",
    probabilidad: "25/35/45",
    cooldown: "7",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f6",
    nombre: "Explosivo",
    maxLevel: "III",
    info: "Probabilidad de explotar a tus enemigos con flechas.",
    probabilidad: "10/15/25",
    cooldown: "8",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f7",
    nombre: "Turmoil",
    maxLevel: "III",
    info: "Probabilidad de prevenir a los guardias enemigos de spawnear.",
    probabilidad: "10/14/18",
    cooldown: "8",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"  
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f8",
    nombre: "Rebote",
    maxLevel: "III",
    info: "Probabilidad de recuperar la salud después de matar.",
    probabilidad: "25/35/45",
    cooldown: "5",
    seAplica: [
        "espada",
        "hacha", 
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82f9",
    nombre: "Thudnerlord",
    maxLevel: "III",
    info: "Lanza rayos a mobs hostiles cada 3 golpeos seguidos.",
    probabilidad: "25/45/75",
    cooldown: "2",
    seAplica: [
        "espada",
        "hacha", 
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82fa",
    nombre: "Todoterreno",
    maxLevel: "I",
    info: "Camina en la lava como <i>ODÍN</i>.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "botas",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82fb",
    nombre: "Water Walker",
    maxLevel: "I",
    info: "Camina en el agua como <i>DIOS</i>.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "botas",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82fc",
    nombre: "Aqua",
    maxLevel: "IV",
    info: "Probabilidad de hacer el doble de daño bajo el agua.",
    probabilidad: "8/13/19/23",
    cooldown: "3/3/5/5",
    seAplica: [
        "botas",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82fd",
    nombre: "Judgement",
    maxLevel: "V",
    info: "Tiene la probabilidad de envenenar al enemigo y ganar regeneración.",
    probabilidad: "6/8/10/12/16",
    cooldown: "20/20/20/20/25",
    seAplica: [
        "elytras",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82fe",
    nombre: "Divert",
    maxLevel: "V",
    info: "Tiene la probabilidad de envenenar al enemigo y ganar regeneración.",
    probabilidad: "6/8/10/12/16",
    cooldown: "20/20/20/20/25",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82fe",
    nombre: "Unholy",
    maxLevel: "V",
    info: "Te hace inmune de los efectos de debilidad y wither.",
    probabilidad: "2/4/6/8/10",
    cooldown: "40",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d82ff",
    nombre: "Chaos",
    maxLevel: "V",
    info: "Inflinge los efectos de debilidad y wither.",
    probabilidad: "6/8/10/12/16",
    cooldown: "20/20/20/20/25",
    seAplica: [
        "tridente",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8300",
    nombre: "Convulse",
    maxLevel: "VI",
    info: "Probabilidad de lanzar a los enemigos por los aires.",
    probabilidad: "8/10/12/14/16/18",
    cooldown: "10",
    seAplica: [
        "botas"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8301",
    nombre: "Chunky",
    maxLevel: "VI",
    info: "Probabilidad de recibir menos daño.",
    probabilidad: "5/10/12/15/18/20",
    cooldown: "10",
    seAplica: [
        "pechera"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8302",
    nombre: "Bárbaro",
    maxLevel: "IV",
    info: "Oportunidad de inflingir más daño con hachas.",
    probabilidad: "8/15/19/25",
    cooldown: "2",
    seAplica: [
        "hacha"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8303",
    nombre: "Lucid",
    maxLevel: "III",
    info: "Probabilidad de curar la ceguera, y ganar el efecto de visión nocturna.",
    probabilidad: "22/32/42",
    cooldown: "5",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8304",
    nombre: "Double Strike",
    maxLevel: "III",
    info: "Probabilidad de golpear dos rayos seguidos al oponente.",
    probabilidad: "8/13/19",
    cooldown: "15",
    seAplica: [
        "espada",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8305",
    nombre: "Apurado",
    maxLevel: "III",
    info: "Añade velocidad al equiparse.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "botas",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8306",
    nombre: "Inflame",
    maxLevel: "III",
    info: "Quema a todos los enemigos en un radio.",
    probabilidad: "10/12/16",
    cooldown: "4/5/5",
    seAplica: [
        "hacha",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8307",
    nombre: "Kill Aura",
    maxLevel: "V",
    info: "Probabilidad de matar múltiples mobs hostiles en un radio.",
    probabilidad: "5/8/12/15/18",
    cooldown: "3/4/5/5/6",
    seAplica: [
        "espada",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8308",
    nombre: "Inquisitivo",
    maxLevel: "IV",
    info: "Probabilidad de incrementar el drop de los mobs.",
    probabilidad: "30/35/40/45",
    cooldown: "4",
    seAplica: [
        "espada",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8309",
    nombre: "Lifesteal",
    maxLevel: "V",
    info: "Probabilidad de robar la salud al atacar.",
    probabilidad: "9/13/17/21/25",
    cooldown: "15",
    seAplica: [
        "espada",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d830a",
    nombre: "Sobre Carga",
    maxLevel: "III",
    info: "Te añade corazones adicionales.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d830b",
    nombre: "Armored",
    maxLevel: "IV",
    info: "Reduce el daño recibido de las espadas enemigas un 2% por nivel.",
    probabilidad: "6/12/16/20",
    cooldown: "8",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d830c",
    nombre: "Blacksmith",
    maxLevel: "V",
    info: "Repara tu arma a cambio de inflingir menos daño.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "hacha",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d830d",
    nombre: "Irrompible",
    maxLevel: "I",
    info: "Las armas se hacen irrompibles.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "espada",
        "arco"
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d830e",
    nombre: "Disarmor",
    maxLevel: "VIII",
    info: "Probabilidad de desequipar una parte aleatoria de la armadura del oponente.",
    probabilidad: "0.4/0.8/1/1.2/1.4/1.6/1.8/2",
    cooldown: "6",
    seAplica: [
        "espada",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d830f",
    nombre: "Deadshot",
    maxLevel: "V",
    info: "Los headshots con el tridente hacen el doble de daño.",
    probabilidad: "15/20/25/30/35",
    cooldown: "5",
    seAplica: [
        "tridente",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8310",
    nombre: "Strife",
    maxLevel: "III",
    info: "Probabilidad de desequipar una parte aleatoria de la armadura del oponente.",
    probabilidad: "5/10/15",
    cooldown: "3/6/8",
    seAplica: [
        "tridente",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8311",
    nombre: "Launch",
    maxLevel: "III",
    info: "Propúlsate al hacer click derecho.",
    probabilidad: "20/27/35",
    cooldown: "15/15/10",
    seAplica: [
        "espada",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8312",
    nombre: "Slingshot",
    maxLevel: "III",
    info: "Te da un impulso mientras vuelas (al pulsar click derecho).",
    probabilidad: "20/40/50",
    cooldown: "15/10/5",
    seAplica: [
        "elytras",
    ],
    calidad: "Legendary"
},
{
    enchantId: "64e88ff14708667b390d8313",
    nombre: "Deranged",
    maxLevel: "III",
    info: "Lanza un rayo a jugadores cercanos.",
    probabilidad: "5/8/12",
    cooldown: "10/12/14",
    seAplica: [
        "espada",
    ],
    calidad: "Legendary"
},

/* -- A PARTIR DE AQUÍ SON ENCANTAMIENTOS 'FABLED' -- */
{
    enchantId: "64e88ff14708667b390d8314",
    nombre: "Haste",
    maxLevel: "III",
    info: "Te permite equipar tus herramientas más rápido.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "pico",
        "pala",
        "hacha"
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8315",
    nombre: "Deranged",
    maxLevel: "IV",
    info: "Al romperse un ítem, este tiene la posibilidad de perder el encantamiento y repararse hasta la mitad de su durabilidad.",
    probabilidad: "40/60/80/100",
    cooldown: "0",
    seAplica: [
        "pico",
        "pala",
        "hacha"
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8316",
    nombre: "Inmortal",
    maxLevel: "IV",
    info: "Probabilidad de que tu armadura no pierda durabilidad.",
    probabilidad: "12/18/25/31",
    cooldown: "40",
    seAplica: [
        "casco",
        "pechera",
        "pantalones",
        "botas"
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8317",
    nombre: "Irrompible",
    maxLevel: "I",
    info: "Las herramientas con este encantamiento son irrompibles.",
    probabilidad: "100",
    cooldown: "0",
    seAplica: [
        "pico",
        "pala",
        "hacha"
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8318",
    nombre: "Ligado",
    maxLevel: "III",
    info: "Probabilidad de mantener un ítem al morir.",
    probabilidad: "4/6/8",
    cooldown: "300",
    seAplica: [
        "pico",
        "pala",
        "hacha",
        "espada",
        "ballesta",
        "tridente"
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8319",
    nombre: "Neutralizar",
    maxLevel: "II",
    info: "Probabilidad de desarmar al oponente.",
    probabilidad: "5/10",
    cooldown: "20",
    seAplica: [
        "arco",
        "ballesta",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d831a",
    nombre: "Disarm",
    maxLevel: "III",
    info: "Probabilidad de desarmar al oponente.",
    probabilidad: "2/4/5",
    cooldown: "20",
    seAplica: [
        "espada",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d831b",
    nombre: "Fénix",
    maxLevel: "III",
    info: "Probabilidad revivir cuando eres asesinado.",
    probabilidad: "5/7/9",
    cooldown: "20",
    seAplica: [
        "pechera",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d831c",
    nombre: "Nulify",
    maxLevel: "IV",
    info: "Probabilidad de dañar el doble al enemigo cuando esté con el efecto de ceguera. Cuesta almas activarlo. <br><i>Costo de almas: 40</i>",
    probabilidad: "8/10/12/14",
    cooldown: "10",
    seAplica: [
        "espada",
        "hacha"
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d831d",
    nombre: "Rush",
    maxLevel: "III",
    info: "Probabilidad de aumentar la velocidad al despegar con las elytras. Cuesta 10 almas por activación.<br><i>Costo de almas: 10</i>",
    probabilidad: "15/25/26",
    cooldown: "5",
    seAplica: [
        "elytras",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d831e",
    nombre: "Diploid",
    maxLevel: "V",
    info: "Probabilidad de multiplicar los drops. Cuesta 10 almas por activación.<br><i>Costo de almas: 5</i>",
    probabilidad: "15/20/25/28/30",
    cooldown: "5/5/6/7/8",
    seAplica: [
        "espada",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d831f",
    nombre: "Multiplicación",
    maxLevel: "V",
    info: "Probabilidad de multiplicar los drops de minerales. Cuesta 10 almas por activación.<br><i>Costo de almas: 5</i>",
    probabilidad: "15/20/25/28/30",
    cooldown: "5/5/6/7/8",
    seAplica: [
        "pico",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8320",
    nombre: "Maestro de Espíritus",
    maxLevel: "III",
    info: "Probabilidad de obtener más almas al matar jugadores.",
    probabilidad: "25/35/45",
    cooldown: "0",
    seAplica: [
        "espada",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8321",
    nombre: "Axe of Spirits",
    maxLevel: "III",
    info: "Probabilidad de obtener más almas al matar jugadores.",
    probabilidad: "45/65/75",
    cooldown: "0",
    seAplica: [
        "hacha",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8322",
    nombre: "Soulminer",
    maxLevel: "III",
    info: "Probabilidad de obtener almas al minar.",
    probabilidad: "5/10/15",
    cooldown: "0",
    seAplica: [
        "pico",
    ],
    calidad: "Fabled"
},
{
    enchantId: "64e88ff14708667b390d8323",
    nombre: "Soulgrind",
    maxLevel: "III",
    info: "Probabilidad de obtener almas al matar mobs.",
    probabilidad: "30/60/90",
    cooldown: "0",
    seAplica: [
        "espada",
    ],
    calidad: "Fabled"
},
]
