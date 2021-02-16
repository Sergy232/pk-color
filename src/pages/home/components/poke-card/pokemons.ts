export enum PokeType {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
};

export interface PokeConfig {
  pIndex: number;
  name: string;
  img: string;
  type?: [PokeType, PokeType?],
}

/** TODO finalize */
export const POKEMONS: PokeConfig[] = [
  {
    pIndex: 1,
    name: 'Bulbasaur',
    img: '1',
    type: [PokeType.Grass, PokeType.Poison],
  },
  {
    pIndex: 2,
    name: 'Ivysaur',
    img: '2',
    type: [PokeType.Grass, PokeType.Poison],
  },
  {
    pIndex: 3,
    name: 'Venusaur',
    img: '3',
    type: [PokeType.Grass, PokeType.Poison],
  },
  {
    pIndex: 4,
    name: 'Charmander',
    img: '4',
  },
  {
    pIndex: 5,
    name: 'Charmeleon',
    img: '5',
  },
  {
    pIndex: 6,
    name: 'Charizard',
    img: '6',
  },
  {
    pIndex: 7,
    name: 'Squirtle',
    img: '7',
  },
  {
    pIndex: 8,
    name: 'Wartortle',
    img: '8',
  },
  {
    pIndex: 9,
    name: 'Blastoise',
    img: '9',
  },
  {
    pIndex: 10,
    name: 'Caterpie',
    img: '10',
  },
  {
    pIndex: 11,
    name: 'Metapod',
    img: '11',
  },
  {
    pIndex: 12,
    name: 'Butterfree',
    img: '12',
  },
  {
    pIndex: 13,
    name: 'Weedle',
    img: '13',
  },
  {
    pIndex: 14,
    name: 'Kakuna',
    img: '14',
  },
  {
    pIndex: 15,
    name: 'Beedrill',
    img: '15',
  },
  {
    pIndex: 16,
    name: 'Pidgey',
    img: '16',
  },
  {
    pIndex: 17,
    name: 'Pidgeotto',
    img: '17',
  },
  {
    pIndex: 18,
    name: 'Pidgeot',
    img: '18',
  },
  {
    pIndex: 19,
    name: 'Rattata',
    img: '19',
  },
  {
    pIndex: 20,
    name: 'Raticate',
    img: '20',
  },
  {
    pIndex: 21,
    name: 'Spearow',
    img: '21',
  },
  {
    pIndex: 22,
    name: 'Fearow',
    img: '22',
  },
  {
    pIndex: 23,
    name: 'Ekans',
    img: '23',
  },
  {
    pIndex: 24,
    name: 'Arbok',
    img: '24',
  },
  {
    pIndex: 25,
    name: 'Pikachu',
    img: '25',
  },
  {
    pIndex: 26,
    name: 'Raichu',
    img: '26',
  },
  {
    pIndex: 27,
    name: 'Sandshrew',
    img: '27',
  },
  {
    pIndex: 28,
    name: 'Sandslash',
    img: '28',
  },
  {
    pIndex: 29,
    name: 'Nidoran♀',
    img: '29',
  },
  {
    pIndex: 30,
    name: 'Nidorina',
    img: '30',
  },
  {
    pIndex: 31,
    name: 'Nidoqueen',
    img: '31',
  },
  {
    pIndex: 32,
    name: 'Nidoran♂',
    img: '32',
  },
  {
    pIndex: 33,
    name: 'Nidorino',
    img: '33',
  },
  {
    pIndex: 34,
    name: 'Nidoking',
    img: '34',
  },
  {
    pIndex: 35,
    name: 'Clefairy',
    img: '35',
  },
  {
    pIndex: 36,
    name: 'Clefable',
    img: '36',
  },
  {
    pIndex: 37,
    name: 'Vulpix',
    img: '37',
  },
  {
    pIndex: 38,
    name: 'Ninetales',
    img: '38',
  },
  {
    pIndex: 39,
    name: 'Jigglypuff',
    img: '39',
  },
  {
    pIndex: 40,
    name: 'Wigglytuff',
    img: '40',
  },
  {
    pIndex: 41,
    name: 'Zubat',
    img: '41',
  },
  {
    pIndex: 42,
    name: 'Golbat',
    img: '42',
  },
  {
    pIndex: 43,
    name: 'Oddish',
    img: '43',
  },
  {
    pIndex: 44,
    name: 'Gloom',
    img: '44',
  },
  {
    pIndex: 45,
    name: 'Vileplume',
    img: '45',
  },
  {
    pIndex: 46,
    name: 'Paras',
    img: '46',
  },
  {
    pIndex: 47,
    name: 'Parasect',
    img: '47',
  },
  {
    pIndex: 48,
    name: 'Venonat',
    img: '48',
  },
  {
    pIndex: 49,
    name: 'Venomoth',
    img: '49',
  },
  {
    pIndex: 50,
    name: 'Diglett',
    img: '50',
  },
  {
    pIndex: 51,
    name: 'Dugtrio',
    img: '51',
  },
  {
    pIndex: 52,
    name: 'Meowth',
    img: '52',
  },
  {
    pIndex: 53,
    name: 'Persian',
    img: '53',
  },
  {
    pIndex: 54,
    name: 'Psyduck',
    img: '54',
  },
  {
    pIndex: 55,
    name: 'Golduck',
    img: '55',
  },
  {
    pIndex: 56,
    name: 'Mankey',
    img: '56',
  },
  {
    pIndex: 57,
    name: 'Primeape',
    img: '57',
  },
  {
    pIndex: 58,
    name: 'Growlithe',
    img: '58',
  },
  {
    pIndex: 59,
    name: 'Arcanine',
    img: '59',
  },
  {
    pIndex: 60,
    name: 'Poliwag',
    img: '60',
  },
  {
    pIndex: 61,
    name: 'Poliwhirl',
    img: '61',
  },
  {
    pIndex: 62,
    name: 'Poliwrath',
    img: '62',
  },
  {
    pIndex: 63,
    name: 'Abra',
    img: '63',
  },
  {
    pIndex: 64,
    name: 'Kadabra',
    img: '64',
  },
  {
    pIndex: 65,
    name: 'Alakazam',
    img: '65',
  },
  {
    pIndex: 66,
    name: 'Machop',
    img: '66',
  },
  {
    pIndex: 67,
    name: 'Machoke',
    img: '67',
  },
  {
    pIndex: 68,
    name: 'Machamp',
    img: '68',
  },
  {
    pIndex: 69,
    name: 'Bellsprout',
    img: '69',
  },
  {
    pIndex: 70,
    name: 'Weepinbell',
    img: '70',
  },
  {
    pIndex: 71,
    name: 'Victreebel',
    img: '71',
  },
  {
    pIndex: 72,
    name: 'Tentacool',
    img: '72',
  },
  {
    pIndex: 73,
    name: 'Tentacruel',
    img: '73',
  },
  {
    pIndex: 74,
    name: 'Geodude',
    img: '74',
  },
  {
    pIndex: 75,
    name: 'Graveler',
    img: '75',
  },
  {
    pIndex: 76,
    name: 'Golem',
    img: '76',
  },
  {
    pIndex: 77,
    name: 'Ponyta',
    img: '77',
  },
  {
    pIndex: 78,
    name: 'Rapidash',
    img: '78',
  },
  {
    pIndex: 79,
    name: 'Slowpoke',
    img: '79',
  },
  {
    pIndex: 80,
    name: 'Slowbro',
    img: '80',
  },
  {
    pIndex: 81,
    name: 'Magnemite',
    img: '81',
  },
  {
    pIndex: 82,
    name: 'Magneton',
    img: '82',
  },
  {
    pIndex: 83,
    name: 'Farfetch\'d',
    img: '83',
  },
  {
    pIndex: 84,
    name: 'Doduo',
    img: '84',
  },
  {
    pIndex: 85,
    name: 'Dodrio',
    img: '85',
  },
  {
    pIndex: 86,
    name: 'Seel',
    img: '86',
  },
  {
    pIndex: 87,
    name: 'Dewgong',
    img: '87',
  },
  {
    pIndex: 88,
    name: 'Grimer',
    img: '88',
  },
  {
    pIndex: 89,
    name: 'Muk',
    img: '89',
  },
  {
    pIndex: 90,
    name: 'Shellder',
    img: '90',
  },
  {
    pIndex: 91,
    name: 'Cloyster',
    img: '91',
  },
  {
    pIndex: 92,
    name: 'Gastly',
    img: '92',
  },
  {
    pIndex: 93,
    name: 'Haunter',
    img: '93',
  },
  {
    pIndex: 94,
    name: 'Gengar',
    img: '94',
  },
  {
    pIndex: 95,
    name: 'Onix',
    img: '95',
  },
  {
    pIndex: 96,
    name: 'Drowzee',
    img: '96',
  },
  {
    pIndex: 97,
    name: 'Hypno',
    img: '97',
  },
  {
    pIndex: 98,
    name: 'Krabby',
    img: '98',
  },
  {
    pIndex: 99,
    name: 'Kingler',
    img: '99',
  },
  {
    pIndex: 100,
    name: 'Voltorb',
    img: '100',
  },
  {
    pIndex: 101,
    name: 'Electrode',
    img: '101',
  },
  {
    pIndex: 102,
    name: 'Exeggcute',
    img: '102',
  },
  {
    pIndex: 103,
    name: 'Exeggutor',
    img: '103',
  },
  {
    pIndex: 104,
    name: 'Cubone',
    img: '104',
  },
  {
    pIndex: 105,
    name: 'Marowak',
    img: '105',
  },
  {
    pIndex: 106,
    name: 'Hitmonlee',
    img: '106',
  },
  {
    pIndex: 107,
    name: 'Hitmonchan',
    img: '107',
  },
  {
    pIndex: 108,
    name: 'Lickitung',
    img: '108',
  },
  {
    pIndex: 109,
    name: 'Koffing',
    img: '109',
  },
  {
    pIndex: 110,
    name: 'Weezing',
    img: '110',
  },
  {
    pIndex: 111,
    name: 'Rhyhorn',
    img: '111',
  },
  {
    pIndex: 112,
    name: 'Rhydon',
    img: '112',
  },
  {
    pIndex: 113,
    name: 'Chansey',
    img: '113',
  },
  {
    pIndex: 114,
    name: 'Tangela',
    img: '114',
  },
  {
    pIndex: 115,
    name: 'Kangaskhan',
    img: '115',
  },
  {
    pIndex: 116,
    name: 'Horsea',
    img: '116',
  },
  {
    pIndex: 117,
    name: 'Seadra',
    img: '117',
  },
  {
    pIndex: 118,
    name: 'Goldeen',
    img: '118',
  },
  {
    pIndex: 119,
    name: 'Seaking',
    img: '119',
  },
  {
    pIndex: 120,
    name: 'Staryu',
    img: '120',
  },
  {
    pIndex: 121,
    name: 'Starmie',
    img: '121',
  },
  {
    pIndex: 122,
    name: 'Mr. Mime',
    img: '122',
  },
  {
    pIndex: 123,
    name: 'Scyther',
    img: '123',
  },
  {
    pIndex: 124,
    name: 'Jynx',
    img: '124',
  },
  {
    pIndex: 125,
    name: 'Electabuzz',
    img: '125',
  },
  {
    pIndex: 126,
    name: 'Magmar',
    img: '126',
  },
  {
    pIndex: 127,
    name: 'Pinsir',
    img: '127',
  },
  {
    pIndex: 128,
    name: 'Tauros',
    img: '128',
  },
  {
    pIndex: 129,
    name: 'Magikarp',
    img: '129',
  },
  {
    pIndex: 130,
    name: 'Gyarados',
    img: '130',
  },
  {
    pIndex: 131,
    name: 'Lapras',
    img: '131',
  },
  {
    pIndex: 132,
    name: 'Ditto',
    img: '132',
  },
  {
    pIndex: 133,
    name: 'Eevee',
    img: '133',
  },
  {
    pIndex: 134,
    name: 'Vaporeon',
    img: '134',
  },
  {
    pIndex: 135,
    name: 'Jolteon',
    img: '135',
  },
  {
    pIndex: 136,
    name: 'Flareon',
    img: '136',
  },
  {
    pIndex: 137,
    name: 'Porygon',
    img: '137',
  },
  {
    pIndex: 138,
    name: 'Omanyte',
    img: '138',
  },
  {
    pIndex: 139,
    name: 'Omastar',
    img: '139',
  },
  {
    pIndex: 140,
    name: 'Kabuto',
    img: '140',
  },
  {
    pIndex: 141,
    name: 'Kabutops',
    img: '141',
  },
  {
    pIndex: 142,
    name: 'Aerodactyl',
    img: '142',
  },
  {
    pIndex: 143,
    name: 'Snorlax',
    img: '143',
  },
  {
    pIndex: 144,
    name: 'Articuno',
    img: '144',
  },
  {
    pIndex: 145,
    name: 'Zapdos',
    img: '145',
  },
  {
    pIndex: 146,
    name: 'Moltres',
    img: '146',
  },
  {
    pIndex: 147,
    name: 'Dratini',
    img: '147',
  },
  {
    pIndex: 148,
    name: 'Dragonair',
    img: '148',
  },
  {
    pIndex: 149,
    name: 'Dragonite',
    img: '149',
  },
  {
    pIndex: 150,
    name: 'Mewtwo',
    img: '150',
  },
  {
    pIndex: 151,
    name: 'Mew',
    img: '151',
  },
  {
    pIndex: 152,
    name: 'Chikorita',
    img: '152',
  },
  {
    pIndex: 153,
    name: 'Bayleef',
    img: '153',
  },
  {
    pIndex: 154,
    name: 'Meganium',
    img: '154',
  },
  {
    pIndex: 155,
    name: 'Cyndaquil',
    img: '155',
  },
  {
    pIndex: 156,
    name: 'Quilava',
    img: '156',
  },
  {
    pIndex: 157,
    name: 'Typhlosion',
    img: '157',
  },
  {
    pIndex: 158,
    name: 'Totodile',
    img: '158',
  },
  {
    pIndex: 159,
    name: 'Croconaw',
    img: '159',
  },
  {
    pIndex: 160,
    name: 'Feraligatr',
    img: '160',
  },
  {
    pIndex: 161,
    name: 'Sentret',
    img: '161',
  },
  {
    pIndex: 162,
    name: 'Furret',
    img: '162',
  },
  {
    pIndex: 163,
    name: 'Hoothoot',
    img: '163',
  },
  {
    pIndex: 164,
    name: 'Noctowl',
    img: '164',
  },
  {
    pIndex: 165,
    name: 'Ledyba',
    img: '165',
  },
  {
    pIndex: 166,
    name: 'Ledian',
    img: '166',
  },
  {
    pIndex: 167,
    name: 'Spinarak',
    img: '167',
  },
  {
    pIndex: 168,
    name: 'Ariados',
    img: '168',
  },
  {
    pIndex: 169,
    name: 'Crobat',
    img: '169',
  },
  {
    pIndex: 170,
    name: 'Chinchou',
    img: '170',
  },
  {
    pIndex: 171,
    name: 'Lanturn',
    img: '171',
  },
  {
    pIndex: 172,
    name: 'Pichu',
    img: '172',
  },
  {
    pIndex: 173,
    name: 'Cleffa',
    img: '173',
  },
  {
    pIndex: 174,
    name: 'Igglybuff',
    img: '174',
  },
  {
    pIndex: 175,
    name: 'Togepi',
    img: '175',
  },
  {
    pIndex: 176,
    name: 'Togetic',
    img: '176',
  },
  {
    pIndex: 177,
    name: 'Natu',
    img: '177',
  },
  {
    pIndex: 178,
    name: 'Xatu',
    img: '178',
  },
  {
    pIndex: 179,
    name: 'Mareep',
    img: '179',
  },
  {
    pIndex: 180,
    name: 'Flaaffy',
    img: '180',
  },
  {
    pIndex: 181,
    name: 'Ampharos',
    img: '181',
  },
  {
    pIndex: 182,
    name: 'Bellossom',
    img: '182',
  },
  {
    pIndex: 183,
    name: 'Marill',
    img: '183',
  },
  {
    pIndex: 184,
    name: 'Azumarill',
    img: '184',
  },
  {
    pIndex: 185,
    name: 'Sudowoodo',
    img: '185',
  },
  {
    pIndex: 186,
    name: 'Politoed',
    img: '186',
  },
  {
    pIndex: 187,
    name: 'Hoppip',
    img: '187',
  },
  {
    pIndex: 188,
    name: 'Skiploom',
    img: '188',
  },
  {
    pIndex: 189,
    name: 'Jumpluff',
    img: '189',
  },
  {
    pIndex: 190,
    name: 'Aipom',
    img: '190',
  },
  {
    pIndex: 191,
    name: 'Sunkern',
    img: '191',
  },
  {
    pIndex: 192,
    name: 'Sunflora',
    img: '192',
  },
  {
    pIndex: 193,
    name: 'Yanma',
    img: '193',
  },
  {
    pIndex: 194,
    name: 'Wooper',
    img: '194',
  },
  {
    pIndex: 195,
    name: 'Quagsire',
    img: '195',
  },
  {
    pIndex: 196,
    name: 'Espeon',
    img: '196',
  },
  {
    pIndex: 197,
    name: 'Umbreon',
    img: '197',
  },
  {
    pIndex: 198,
    name: 'Murkrow',
    img: '198',
  },
  {
    pIndex: 199,
    name: 'Slowking',
    img: '199',
  },
  {
    pIndex: 200,
    name: 'Misdreavus',
    img: '200',
  },
  {
    pIndex: 201,
    name: 'Unown',
    img: '201',
  },
  {
    pIndex: 202,
    name: 'Wobbuffet',
    img: '202',
  },
  {
    pIndex: 203,
    name: 'Girafarig',
    img: '203',
  },
  {
    pIndex: 204,
    name: 'Pineco',
    img: '204',
  },
  {
    pIndex: 205,
    name: 'Forretress',
    img: '205',
  },
  {
    pIndex: 206,
    name: 'Dunsparce',
    img: '206',
  },
  {
    pIndex: 207,
    name: 'Gligar',
    img: '207',
  },
  {
    pIndex: 208,
    name: 'Steelix',
    img: '208',
  },
  {
    pIndex: 209,
    name: 'Snubbull',
    img: '209',
  },
  {
    pIndex: 210,
    name: 'Granbull',
    img: '210',
  },
  {
    pIndex: 211,
    name: 'Qwilfish',
    img: '211',
  },
  {
    pIndex: 212,
    name: 'Scizor',
    img: '212',
  },
  {
    pIndex: 213,
    name: 'Shuckle',
    img: '213',
  },
  {
    pIndex: 214,
    name: 'Heracross',
    img: '214',
  },
  {
    pIndex: 215,
    name: 'Sneasel',
    img: '215',
  },
  {
    pIndex: 216,
    name: 'Teddiursa',
    img: '216',
  },
  {
    pIndex: 217,
    name: 'Ursaring',
    img: '217',
  },
  {
    pIndex: 218,
    name: 'Slugma',
    img: '218',
  },
  {
    pIndex: 219,
    name: 'Magcargo',
    img: '219',
  },
  {
    pIndex: 220,
    name: 'Swinub',
    img: '220',
  },
  {
    pIndex: 221,
    name: 'Piloswine',
    img: '221',
  },
  {
    pIndex: 222,
    name: 'Corsola',
    img: '222',
  },
  {
    pIndex: 223,
    name: 'Remoraid',
    img: '223',
  },
  {
    pIndex: 224,
    name: 'Octillery',
    img: '224',
  },
  {
    pIndex: 225,
    name: 'Delibird',
    img: '225',
  },
  {
    pIndex: 226,
    name: 'Mantine',
    img: '226',
  },
  {
    pIndex: 227,
    name: 'Skarmory',
    img: '227',
  },
  {
    pIndex: 228,
    name: 'Houndour',
    img: '228',
  },
  {
    pIndex: 229,
    name: 'Houndoom',
    img: '229',
  },
  {
    pIndex: 230,
    name: 'Kingdra',
    img: '230',
  },
  {
    pIndex: 231,
    name: 'Phanpy',
    img: '231',
  },
  {
    pIndex: 232,
    name: 'Donphan',
    img: '232',
  },
  {
    pIndex: 233,
    name: 'Porygon2',
    img: '233',
  },
  {
    pIndex: 234,
    name: 'Stantler',
    img: '234',
  },
  {
    pIndex: 235,
    name: 'Smeargle',
    img: '235',
  },
  {
    pIndex: 236,
    name: 'Tyrogue',
    img: '236',
  },
  {
    pIndex: 237,
    name: 'Hitmontop',
    img: '237',
  },
  {
    pIndex: 238,
    name: 'Smoochum',
    img: '238',
  },
  {
    pIndex: 239,
    name: 'Elekid',
    img: '239',
  },
  {
    pIndex: 240,
    name: 'Magby',
    img: '240',
  },
  {
    pIndex: 241,
    name: 'Miltank',
    img: '241',
  },
  {
    pIndex: 242,
    name: 'Blissey',
    img: '242',
  },
  {
    pIndex: 243,
    name: 'Raikou',
    img: '243',
  },
  {
    pIndex: 244,
    name: 'Entei',
    img: '244',
  },
  {
    pIndex: 245,
    name: 'Suicune',
    img: '245',
  },
  {
    pIndex: 246,
    name: 'Larvitar',
    img: '246',
  },
  {
    pIndex: 247,
    name: 'Pupitar',
    img: '247',
  },
  {
    pIndex: 248,
    name: 'Tyranitar',
    img: '248',
  },
  {
    pIndex: 249,
    name: 'Lugia',
    img: '249',
  },
  {
    pIndex: 250,
    name: 'Ho-Oh',
    img: '250',
  },
  {
    pIndex: 251,
    name: 'Celebi',
    img: '251',
  },
  {
    pIndex: 252,
    name: 'Treecko',
    img: '252',
  },
  {
    pIndex: 253,
    name: 'Grovyle',
    img: '253',
  },
  {
    pIndex: 254,
    name: 'Sceptile',
    img: '254',
  },
  {
    pIndex: 255,
    name: 'Torchic',
    img: '255',
  },
  {
    pIndex: 256,
    name: 'Combusken',
    img: '256',
  },
  {
    pIndex: 257,
    name: 'Blaziken',
    img: '257',
  },
  {
    pIndex: 258,
    name: 'Mudkip',
    img: '258',
  },
  {
    pIndex: 259,
    name: 'Marshtomp',
    img: '259',
  },
  {
    pIndex: 260,
    name: 'Swampert',
    img: '260',
  },
  {
    pIndex: 261,
    name: 'Poochyena',
    img: '261',
  },
  {
    pIndex: 262,
    name: 'Mightyena',
    img: '262',
  },
  {
    pIndex: 263,
    name: 'Zigzagoon',
    img: '263',
  },
  {
    pIndex: 263,
    name: 'Zigzagoon (Galarian form)',
    img: '263',
  },
  {
    pIndex: 264,
    name: 'Linoone',
    img: '264',
  },
  {
    pIndex: 264,
    name: 'Linoone (Galarian form)',
    img: '264',
  },
  {
    pIndex: 265,
    name: 'Wurmple',
    img: '265',
  },
  {
    pIndex: 266,
    name: 'Silcoon',
    img: '266',
  },
  {
    pIndex: 267,
    name: 'Beautifly',
    img: '267',
  },
  {
    pIndex: 268,
    name: 'Cascoon',
    img: '268',
  },
  {
    pIndex: 269,
    name: 'Dustox',
    img: '269',
  },
  {
    pIndex: 270,
    name: 'Lotad',
    img: '270',
  },
  {
    pIndex: 271,
    name: 'Lombre',
    img: '271',
  },
  {
    pIndex: 272,
    name: 'Ludicolo',
    img: '272',
  },
  {
    pIndex: 273,
    name: 'Seedot',
    img: '273',
  },
  {
    pIndex: 274,
    name: 'Nuzleaf',
    img: '274',
  },
  {
    pIndex: 275,
    name: 'Shiftry',
    img: '275',
  },
  {
    pIndex: 276,
    name: 'Taillow',
    img: '276',
  },
  {
    pIndex: 277,
    name: 'Swellow',
    img: '277',
  },
  {
    pIndex: 278,
    name: 'Wingull',
    img: '278',
  },
  {
    pIndex: 279,
    name: 'Pelipper',
    img: '279',
  },
  {
    pIndex: 280,
    name: 'Ralts',
    img: '280',
  },
  {
    pIndex: 281,
    name: 'Kirlia',
    img: '281',
  },
  {
    pIndex: 282,
    name: 'Gardevoir',
    img: '282',
  },
  {
    pIndex: 283,
    name: 'Surskit',
    img: '283',
  },
  {
    pIndex: 284,
    name: 'Masquerain',
    img: '284',
  },
  {
    pIndex: 285,
    name: 'Shroomish',
    img: '285',
  },
  {
    pIndex: 286,
    name: 'Breloom',
    img: '286',
  },
  {
    pIndex: 287,
    name: 'Slakoth',
    img: '287',
  },
  {
    pIndex: 288,
    name: 'Vigoroth',
    img: '288',
  },
  {
    pIndex: 289,
    name: 'Slaking',
    img: '289',
  },
  {
    pIndex: 290,
    name: 'Nincada',
    img: '290',
  },
  {
    pIndex: 291,
    name: 'Ninjask',
    img: '291',
  },
  {
    pIndex: 292,
    name: 'Shedinja',
    img: '292',
  },
  {
    pIndex: 293,
    name: 'Whismur',
    img: '293',
  },
  {
    pIndex: 294,
    name: 'Loudred',
    img: '294',
  },
  {
    pIndex: 295,
    name: 'Exploud',
    img: '295',
  },
  {
    pIndex: 296,
    name: 'Makuhita',
    img: '296',
  },
  {
    pIndex: 297,
    name: 'Hariyama',
    img: '297',
  },
  {
    pIndex: 298,
    name: 'Azurill',
    img: '298',
  },
  {
    pIndex: 299,
    name: 'Nosepass',
    img: '299',
  },
  {
    pIndex: 300,
    name: 'Skitty',
    img: '300',
  },
  {
    pIndex: 301,
    name: 'Delcatty',
    img: '301',
  },
  {
    pIndex: 302,
    name: 'Sableye',
    img: '302',
  },
  {
    pIndex: 303,
    name: 'Mawile',
    img: '303',
  },
  {
    pIndex: 304,
    name: 'Aron',
    img: '304',
  },
  {
    pIndex: 305,
    name: 'Lairon',
    img: '305',
  },
  {
    pIndex: 306,
    name: 'Aggron',
    img: '306',
  },
  {
    pIndex: 307,
    name: 'Meditite',
    img: '307',
  },
  {
    pIndex: 308,
    name: 'Medicham',
    img: '308',
  },
  {
    pIndex: 309,
    name: 'Electrike',
    img: '309',
  },
  {
    pIndex: 310,
    name: 'Manectric',
    img: '310',
  },
  {
    pIndex: 311,
    name: 'Plusle',
    img: '311',
  },
  {
    pIndex: 312,
    name: 'Minun',
    img: '312',
  },
  {
    pIndex: 313,
    name: 'Volbeat',
    img: '313',
  },
  {
    pIndex: 314,
    name: 'Illumise',
    img: '314',
  },
  {
    pIndex: 315,
    name: 'Roselia',
    img: '315',
  },
  {
    pIndex: 316,
    name: 'Gulpin',
    img: '316',
  },
  {
    pIndex: 317,
    name: 'Swalot',
    img: '317',
  },
  {
    pIndex: 318,
    name: 'Carvanha',
    img: '318',
  },
  {
    pIndex: 319,
    name: 'Sharpedo',
    img: '319',
  },
  {
    pIndex: 320,
    name: 'Wailmer',
    img: '320',
  },
  {
    pIndex: 321,
    name: 'Wailord',
    img: '321',
  },
  {
    pIndex: 322,
    name: 'Numel',
    img: '322',
  },
  {
    pIndex: 323,
    name: 'Camerupt',
    img: '323',
  },
  {
    pIndex: 324,
    name: 'Torkoal',
    img: '324',
  },
  {
    pIndex: 325,
    name: 'Spoink',
    img: '325',
  },
  {
    pIndex: 326,
    name: 'Grumpig',
    img: '326',
  },
  {
    pIndex: 327,
    name: 'Spinda',
    img: '327',
  },
  {
    pIndex: 328,
    name: 'Trapinch',
    img: '328',
  },
  {
    pIndex: 329,
    name: 'Vibrava',
    img: '329',
  },
  {
    pIndex: 330,
    name: 'Flygon',
    img: '330',
  },
  {
    pIndex: 331,
    name: 'Cacnea',
    img: '331',
  },
  {
    pIndex: 332,
    name: 'Cacturne',
    img: '332',
  },
  {
    pIndex: 333,
    name: 'Swablu',
    img: '333',
  },
  {
    pIndex: 334,
    name: 'Altaria',
    img: '334',
  },
  {
    pIndex: 335,
    name: 'Zangoose',
    img: '335',
  },
  {
    pIndex: 336,
    name: 'Seviper',
    img: '336',
  },
  {
    pIndex: 337,
    name: 'Lunatone',
    img: '337',
  },
  {
    pIndex: 338,
    name: 'Solrock',
    img: '338',
  },
  {
    pIndex: 339,
    name: 'Barboach',
    img: '339',
  },
  {
    pIndex: 340,
    name: 'Whiscash',
    img: '340',
  },
  {
    pIndex: 341,
    name: 'Corphish',
    img: '341',
  },
  {
    pIndex: 342,
    name: 'Crawdaunt',
    img: '342',
  },
  {
    pIndex: 343,
    name: 'Baltoy',
    img: '343',
  },
  {
    pIndex: 344,
    name: 'Claydol',
    img: '344',
  },
  {
    pIndex: 345,
    name: 'Lileep',
    img: '345',
  },
  {
    pIndex: 346,
    name: 'Cradily',
    img: '346',
  },
  {
    pIndex: 347,
    name: 'Anorith',
    img: '347',
  },
  {
    pIndex: 348,
    name: 'Armaldo',
    img: '348',
  },
  {
    pIndex: 349,
    name: 'Feebas',
    img: '349',
  },
  {
    pIndex: 350,
    name: 'Milotic',
    img: '350',
  },
  {
    pIndex: 351,
    name: 'Castform',
    img: '351',
  },
  {
    pIndex: 351,
    name: 'Castform (Rainy)',
    img: '351',
  },
  {
    pIndex: 351,
    name: 'Castform (Snowy)',
    img: '351',
  },
  {
    pIndex: 351,
    name: 'Castform (Sunny)',
    img: '351',
  },
  {
    pIndex: 352,
    name: 'Kecleon',
    img: '352',
  },
  {
    pIndex: 353,
    name: 'Shuppet',
    img: '353',
  },
  {
    pIndex: 354,
    name: 'Banette',
    img: '354',
  },
  {
    pIndex: 355,
    name: 'Duskull',
    img: '355',
  },
  {
    pIndex: 356,
    name: 'Dusclops',
    img: '356',
  },
  {
    pIndex: 357,
    name: 'Tropius',
    img: '357',
  },
  {
    pIndex: 358,
    name: 'Chimecho',
    img: '358',
  },
  {
    pIndex: 359,
    name: 'Absol',
    img: '359',
  },
  {
    pIndex: 360,
    name: 'Wynaut',
    img: '360',
  },
  {
    pIndex: 361,
    name: 'Snorunt',
    img: '361',
  },
  {
    pIndex: 362,
    name: 'Glalie',
    img: '362',
  },
  {
    pIndex: 363,
    name: 'Spheal',
    img: '363',
  },
  {
    pIndex: 364,
    name: 'Sealeo',
    img: '364',
  },
  {
    pIndex: 365,
    name: 'Walrein',
    img: '365',
  },
  {
    pIndex: 366,
    name: 'Clamperl',
    img: '366',
  },
  {
    pIndex: 367,
    name: 'Huntail',
    img: '367',
  },
  {
    pIndex: 368,
    name: 'Gorebyss',
    img: '368',
  },
  {
    pIndex: 369,
    name: 'Relicanth',
    img: '369',
  },
  {
    pIndex: 370,
    name: 'Luvdisc',
    img: '370',
  },
  {
    pIndex: 371,
    name: 'Bagon',
    img: '371',
  },
  {
    pIndex: 372,
    name: 'Shelgon',
    img: '372',
  },
  {
    pIndex: 373,
    name: 'Salamence',
    img: '373',
  },
  {
    pIndex: 374,
    name: 'Beldum',
    img: '374',
  },
  {
    pIndex: 375,
    name: 'Metang',
    img: '375',
  },
  {
    pIndex: 376,
    name: 'Metagross',
    img: '376',
  },
  {
    pIndex: 377,
    name: 'Regirock',
    img: '377',
  },
  {
    pIndex: 378,
    name: 'Regice',
    img: '378',
  },
  {
    pIndex: 379,
    name: 'Registeel',
    img: '379',
  },
  {
    pIndex: 380,
    name: 'Latias',
    img: '380',
  },
  {
    pIndex: 381,
    name: 'Latios',
    img: '381',
  },
  {
    pIndex: 382,
    name: 'Kyogre',
    img: '382',
  },
  {
    pIndex: 383,
    name: 'Groudon',
    img: '383',
  },
  {
    pIndex: 384,
    name: 'Rayquaza',
    img: '384',
  },
  {
    pIndex: 385,
    name: 'Jirachi',
    img: '385',
  },
  {
    pIndex: 386,
    name: 'Deoxys (Attack Forme)',
    img: '386',
  },
  {
    pIndex: 386,
    name: 'Deoxys (Defense Forme)',
    img: '386',
  },
  {
    pIndex: 386,
    name: 'Deoxys (Normal Forme)',
    img: '386',
  },
  {
    pIndex: 386,
    name: 'Deoxys (Speed Forme)',
    img: '386',
  },
  {
    pIndex: 387,
    name: 'Turtwig',
    img: '387',
  },
  {
    pIndex: 388,
    name: 'Grotle',
    img: '388',
  },
  {
    pIndex: 389,
    name: 'Torterra',
    img: '389',
  },
  {
    pIndex: 390,
    name: 'Chimchar',
    img: '390',
  },
  {
    pIndex: 391,
    name: 'Monferno',
    img: '391',
  },
  {
    pIndex: 392,
    name: 'Infernape',
    img: '392',
  },
  {
    pIndex: 393,
    name: 'Piplup',
    img: '393',
  },
  {
    pIndex: 394,
    name: 'Prinplup',
    img: '394',
  },
  {
    pIndex: 395,
    name: 'Empoleon',
    img: '395',
  },
  {
    pIndex: 396,
    name: 'Starly',
    img: '396',
  },
  {
    pIndex: 397,
    name: 'Staravia',
    img: '397',
  },
  {
    pIndex: 398,
    name: 'Staraptor',
    img: '398',
  },
  {
    pIndex: 399,
    name: 'Bidoof',
    img: '399',
  },
  {
    pIndex: 400,
    name: 'Bibarel',
    img: '400',
  },
  {
    pIndex: 401,
    name: 'Kricketot',
    img: '401',
  },
  {
    pIndex: 402,
    name: 'Kricketune',
    img: '402',
  },
  {
    pIndex: 403,
    name: 'Shinx',
    img: '403',
  },
  {
    pIndex: 404,
    name: 'Luxio',
    img: '404',
  },
  {
    pIndex: 405,
    name: 'Luxray',
    img: '405',
  },
  {
    pIndex: 406,
    name: 'Budew',
    img: '406',
  },
  {
    pIndex: 407,
    name: 'Roserade',
    img: '407',
  },
  {
    pIndex: 408,
    name: 'Cranidos',
    img: '408',
  },
  {
    pIndex: 409,
    name: 'Rampardos',
    img: '409',
  },
  {
    pIndex: 410,
    name: 'Shieldon',
    img: '410',
  },
  {
    pIndex: 411,
    name: 'Bastiodon',
    img: '411',
  },
  {
    pIndex: 412,
    name: 'Burmy',
    img: '412',
  },
  {
    pIndex: 413,
    name: 'Wormadam (Plant Cloak)',
    img: '413',
  },
  {
    pIndex: 413,
    name: 'Wormadam (Sandy Cloak)',
    img: '413',
  },
  {
    pIndex: 413,
    name: 'Wormadam (Trash Cloak)',
    img: '413',
  },
  {
    pIndex: 414,
    name: 'Mothim',
    img: '414',
  },
  {
    pIndex: 415,
    name: 'Combee',
    img: '415',
  },
  {
    pIndex: 416,
    name: 'Vespiquen',
    img: '416',
  },
  {
    pIndex: 417,
    name: 'Pachirisu',
    img: '417',
  },
  {
    pIndex: 418,
    name: 'Buizel',
    img: '418',
  },
  {
    pIndex: 419,
    name: 'Floatzel',
    img: '419',
  },
  {
    pIndex: 420,
    name: 'Cherubi',
    img: '420',
  },
  {
    pIndex: 421,
    name: 'Cherrim',
    img: '421',
  },
  {
    pIndex: 422,
    name: 'Shellos',
    img: '422',
  },
  {
    pIndex: 423,
    name: 'Gastrodon',
    img: '423',
  },
  {
    pIndex: 424,
    name: 'Ambipom',
    img: '424',
  },
  {
    pIndex: 425,
    name: 'Drifloon',
    img: '425',
  },
  {
    pIndex: 426,
    name: 'Drifblim',
    img: '426',
  },
  {
    pIndex: 427,
    name: 'Buneary',
    img: '427',
  },
  {
    pIndex: 428,
    name: 'Lopunny',
    img: '428',
  },
  {
    pIndex: 429,
    name: 'Mismagius',
    img: '429',
  },
  {
    pIndex: 430,
    name: 'Honchkrow',
    img: '430',
  },
  {
    pIndex: 431,
    name: 'Glameow',
    img: '431',
  },
  {
    pIndex: 432,
    name: 'Purugly',
    img: '432',
  },
  {
    pIndex: 433,
    name: 'Chingling',
    img: '433',
  },
  {
    pIndex: 434,
    name: 'Stunky',
    img: '434',
  },
  {
    pIndex: 435,
    name: 'Skuntank',
    img: '435',
  },
  {
    pIndex: 436,
    name: 'Bronzor',
    img: '436',
  },
  {
    pIndex: 437,
    name: 'Bronzong',
    img: '437',
  },
  {
    pIndex: 438,
    name: 'Bonsly',
    img: '438',
  },
  {
    pIndex: 439,
    name: 'Mime Jr.',
    img: '439',
  },
  {
    pIndex: 440,
    name: 'Happiny',
    img: '440',
  },
  {
    pIndex: 441,
    name: 'Chatot',
    img: '441',
  },
  {
    pIndex: 442,
    name: 'Spiritomb',
    img: '442',
  },
  {
    pIndex: 443,
    name: 'Gible',
    img: '443',
  },
  {
    pIndex: 444,
    name: 'Gabite',
    img: '444',
  },
  {
    pIndex: 445,
    name: 'Garchomp',
    img: '445',
  },
  {
    pIndex: 446,
    name: 'Munchlax',
    img: '446',
  },
  {
    pIndex: 447,
    name: 'Riolu',
    img: '447',
  },
  {
    pIndex: 448,
    name: 'Lucario',
    img: '448',
  },
  {
    pIndex: 449,
    name: 'Hippopotas',
    img: '449',
  },
  {
    pIndex: 450,
    name: 'Hippowdon',
    img: '450',
  },
  {
    pIndex: 451,
    name: 'Skorupi',
    img: '451',
  },
  {
    pIndex: 452,
    name: 'Drapion',
    img: '452',
  },
  {
    pIndex: 453,
    name: 'Croagunk',
    img: '453',
  },
  {
    pIndex: 454,
    name: 'Toxicroak',
    img: '454',
  },
  {
    pIndex: 455,
    name: 'Carnivine',
    img: '455',
  },
  {
    pIndex: 456,
    name: 'Finneon',
    img: '456',
  },
  {
    pIndex: 457,
    name: 'Lumineon',
    img: '457',
  },
  {
    pIndex: 458,
    name: 'Mantyke',
    img: '458',
  },
  {
    pIndex: 459,
    name: 'Snover',
    img: '459',
  },
  {
    pIndex: 460,
    name: 'Abomasnow',
    img: '460',
  },
  {
    pIndex: 461,
    name: 'Weavile',
    img: '461',
  },
  {
    pIndex: 462,
    name: 'Magnezone',
    img: '462',
  },
  {
    pIndex: 463,
    name: 'Lickilicky',
    img: '463',
  },
  {
    pIndex: 464,
    name: 'Rhyperior',
    img: '464',
  },
  {
    pIndex: 465,
    name: 'Tangrowth',
    img: '465',
  },
  {
    pIndex: 466,
    name: 'Electivire',
    img: '466',
  },
  {
    pIndex: 467,
    name: 'Magmortar',
    img: '467',
  },
  {
    pIndex: 468,
    name: 'Togekiss',
    img: '468',
  },
  {
    pIndex: 469,
    name: 'Yanmega',
    img: '469',
  },
  {
    pIndex: 470,
    name: 'Leafeon',
    img: '470',
  },
  {
    pIndex: 471,
    name: 'Glaceon',
    img: '471',
  },
  {
    pIndex: 472,
    name: 'Gliscor',
    img: '472',
  },
  {
    pIndex: 473,
    name: 'Mamoswine',
    img: '473',
  },
  {
    pIndex: 474,
    name: 'Porygon-Z',
    img: '474',
  },
  {
    pIndex: 475,
    name: 'Gallade',
    img: '475',
  },
  {
    pIndex: 476,
    name: 'Probopass',
    img: '476',
  },
  {
    pIndex: 477,
    name: 'Dusknoir',
    img: '477',
  },
  {
    pIndex: 478,
    name: 'Froslass',
    img: '478',
  },
  {
    pIndex: 479,
    name: 'Rotom',
    img: '479',
  },
  {
    pIndex: 479,
    name: 'Rotom (Fan)',
    img: '479',
  },
  {
    pIndex: 479,
    name: 'Rotom (Frost)',
    img: '479',
  },
  {
    pIndex: 479,
    name: 'Rotom (Heat)',
    img: '479',
  },
  {
    pIndex: 479,
    name: 'Rotom (Mow)',
    img: '479',
  },
  {
    pIndex: 479,
    name: 'Rotom (Wash)',
    img: '479',
  },
  {
    pIndex: 480,
    name: 'Uxie',
    img: '480',
  },
  {
    pIndex: 481,
    name: 'Mesprit',
    img: '481',
  },
  {
    pIndex: 482,
    name: 'Azelf',
    img: '482',
  },
  {
    pIndex: 483,
    name: 'Dialga',
    img: '483',
  },
  {
    pIndex: 484,
    name: 'Palkia',
    img: '484',
  },
  {
    pIndex: 485,
    name: 'Heatran',
    img: '485',
  },
  {
    pIndex: 486,
    name: 'Regigigas',
    img: '486',
  },
  {
    pIndex: 487,
    name: 'Giratina (Altered Forme)',
    img: '487',
  },
  {
    pIndex: 487,
    name: 'Giratina (Origin Forme)',
    img: '487',
  },
  {
    pIndex: 488,
    name: 'Cresselia',
    img: '488',
  },
  {
    pIndex: 489,
    name: 'Phione',
    img: '489',
  },
  {
    pIndex: 490,
    name: 'Manaphy',
    img: '490',
  },
  {
    pIndex: 491,
    name: 'Darkrai',
    img: '491',
  },
  {
    pIndex: 492,
    name: 'Shaymin (Land Forme)',
    img: '492',
  },
  {
    pIndex: 492,
    name: 'Shaymin (Sky Forme)',
    img: '492',
  },
  {
    pIndex: 493,
    name: 'Arceus',
    img: '493',
  },
  {
    pIndex: 494,
    name: 'Victini',
    img: '494',
  },
  {
    pIndex: 495,
    name: 'Snivy',
    img: '495',
  },
  {
    pIndex: 496,
    name: 'Servine',
    img: '496',
  },
  {
    pIndex: 497,
    name: 'Serperior',
    img: '497',
  },
  {
    pIndex: 498,
    name: 'Tepig',
    img: '498',
  },
  {
    pIndex: 499,
    name: 'Pignite',
    img: '499',
  },
  {
    pIndex: 500,
    name: 'Emboar',
    img: '500',
  },
  {
    pIndex: 501,
    name: 'Oshawott',
    img: '501',
  },
  {
    pIndex: 502,
    name: 'Dewott',
    img: '502',
  },
  {
    pIndex: 503,
    name: 'Samurott',
    img: '503',
  },
  {
    pIndex: 504,
    name: 'Patrat',
    img: '504',
  },
  {
    pIndex: 505,
    name: 'Watchog',
    img: '505',
  },
  {
    pIndex: 506,
    name: 'Lillipup',
    img: '506',
  },
  {
    pIndex: 507,
    name: 'Herdier',
    img: '507',
  },
  {
    pIndex: 508,
    name: 'Stoutland',
    img: '508',
  },
  {
    pIndex: 509,
    name: 'Purrloin',
    img: '509',
  },
  {
    pIndex: 510,
    name: 'Liepard',
    img: '510',
  },
  {
    pIndex: 511,
    name: 'Pansage',
    img: '511',
  },
  {
    pIndex: 512,
    name: 'Simisage',
    img: '512',
  },
  {
    pIndex: 513,
    name: 'Pansear',
    img: '513',
  },
  {
    pIndex: 514,
    name: 'Simisear',
    img: '514',
  },
  {
    pIndex: 515,
    name: 'Panpour',
    img: '515',
  },
  {
    pIndex: 516,
    name: 'Simipour',
    img: '516',
  },
  {
    pIndex: 517,
    name: 'Munna',
    img: '517',
  },
  {
    pIndex: 518,
    name: 'Musharna',
    img: '518',
  },
  {
    pIndex: 519,
    name: 'Pidove',
    img: '519',
  },
  {
    pIndex: 520,
    name: 'Tranquill',
    img: '520',
  },
  {
    pIndex: 521,
    name: 'Unfezant',
    img: '521',
  },
  {
    pIndex: 522,
    name: 'Blitzle',
    img: '522',
  },
  {
    pIndex: 523,
    name: 'Zebstrika',
    img: '523',
  },
  {
    pIndex: 524,
    name: 'Roggenrola',
    img: '524',
  },
  {
    pIndex: 525,
    name: 'Boldore',
    img: '525',
  },
  {
    pIndex: 526,
    name: 'Gigalith',
    img: '526',
  },
  {
    pIndex: 527,
    name: 'Woobat',
    img: '527',
  },
  {
    pIndex: 528,
    name: 'Swoobat',
    img: '528',
  },
  {
    pIndex: 529,
    name: 'Drilbur',
    img: '529',
  },
  {
    pIndex: 530,
    name: 'Excadrill',
    img: '530',
  },
  {
    pIndex: 531,
    name: 'Audino',
    img: '531',
  },
  {
    pIndex: 532,
    name: 'Timburr',
    img: '532',
  },
  {
    pIndex: 533,
    name: 'Gurdurr',
    img: '533',
  },
  {
    pIndex: 534,
    name: 'Conkeldurr',
    img: '534',
  },
  {
    pIndex: 535,
    name: 'Tympole',
    img: '535',
  },
  {
    pIndex: 536,
    name: 'Palpitoad',
    img: '536',
  },
  {
    pIndex: 537,
    name: 'Seismitoad',
    img: '537',
  },
  {
    pIndex: 538,
    name: 'Throh',
    img: '538',
  },
  {
    pIndex: 539,
    name: 'Sawk',
    img: '539',
  },
  {
    pIndex: 540,
    name: 'Sewaddle',
    img: '540',
  },
  {
    pIndex: 541,
    name: 'Swadloon',
    img: '541',
  },
  {
    pIndex: 542,
    name: 'Leavanny',
    img: '542',
  },
  {
    pIndex: 543,
    name: 'Venipede',
    img: '543',
  },
  {
    pIndex: 544,
    name: 'Whirlipede',
    img: '544',
  },
  {
    pIndex: 545,
    name: 'Scolipede',
    img: '545',
  },
  {
    pIndex: 546,
    name: 'Cottonee',
    img: '546',
  },
  {
    pIndex: 547,
    name: 'Whimsicott',
    img: '547',
  },
  {
    pIndex: 548,
    name: 'Petilil',
    img: '548',
  },
  {
    pIndex: 549,
    name: 'Lilligant',
    img: '549',
  },
  {
    pIndex: 550,
    name: 'Basculin',
    img: '550',
  },
  {
    pIndex: 551,
    name: 'Sandile',
    img: '551',
  },
  {
    pIndex: 552,
    name: 'Krokorok',
    img: '552',
  },
  {
    pIndex: 553,
    name: 'Krookodile',
    img: '553',
  },
  {
    pIndex: 554,
    name: 'Darumaka',
    img: '554',
  },
  {
    pIndex: 554,
    name: 'Darumaka (Galarian form)',
    img: '554',
  },
  {
    pIndex: 555,
    name: 'Darmanitan (Standard Mode)',
    img: '555',
  },
  {
    pIndex: 555,
    name: 'Darmanitan (Standard Mode (Galarian form)',
    img: '555',
  },
  {
    pIndex: 555,
    name: 'Darmanitan (Zen Mode)',
    img: '555',
  },
  {
    pIndex: 555,
    name: 'Darmanitan (Zen Mode (Galarian form)',
    img: '555',
  },
  {
    pIndex: 556,
    name: 'Maractus',
    img: '556',
  },
  {
    pIndex: 557,
    name: 'Dwebble',
    img: '557',
  },
  {
    pIndex: 558,
    name: 'Crustle',
    img: '558',
  },
  {
    pIndex: 559,
    name: 'Scraggy',
    img: '559',
  },
  {
    pIndex: 560,
    name: 'Scrafty',
    img: '560',
  },
  {
    pIndex: 561,
    name: 'Sigilyph',
    img: '561',
  },
  {
    pIndex: 562,
    name: 'Yamask',
    img: '562',
  },
  {
    pIndex: 562,
    name: 'Yamask (Galarian form)',
    img: '562',
  },
  {
    pIndex: 563,
    name: 'Cofagrigus',
    img: '563',
  },
  {
    pIndex: 564,
    name: 'Tirtouga',
    img: '564',
  },
  {
    pIndex: 565,
    name: 'Carracosta',
    img: '565',
  },
  {
    pIndex: 566,
    name: 'Archen',
    img: '566',
  },
  {
    pIndex: 567,
    name: 'Archeops',
    img: '567',
  },
  {
    pIndex: 568,
    name: 'Trubbish',
    img: '568',
  },
  {
    pIndex: 569,
    name: 'Garbodor',
    img: '569',
  },
  {
    pIndex: 570,
    name: 'Zorua',
    img: '570',
  },
  {
    pIndex: 571,
    name: 'Zoroark',
    img: '571',
  },
  {
    pIndex: 572,
    name: 'Minccino',
    img: '572',
  },
  {
    pIndex: 573,
    name: 'Cinccino',
    img: '573',
  },
  {
    pIndex: 574,
    name: 'Gothita',
    img: '574',
  },
  {
    pIndex: 575,
    name: 'Gothorita',
    img: '575',
  },
  {
    pIndex: 576,
    name: 'Gothitelle',
    img: '576',
  },
  {
    pIndex: 577,
    name: 'Solosis',
    img: '577',
  },
  {
    pIndex: 578,
    name: 'Duosion',
    img: '578',
  },
  {
    pIndex: 579,
    name: 'Reuniclus',
    img: '579',
  },
  {
    pIndex: 580,
    name: 'Ducklett',
    img: '580',
  },
  {
    pIndex: 581,
    name: 'Swanna',
    img: '581',
  },
  {
    pIndex: 582,
    name: 'Vanillite',
    img: '582',
  },
  {
    pIndex: 583,
    name: 'Vanillish',
    img: '583',
  },
  {
    pIndex: 584,
    name: 'Vanilluxe',
    img: '584',
  },
  {
    pIndex: 585,
    name: 'Deerling',
    img: '585',
  },
  {
    pIndex: 586,
    name: 'Sawsbuck',
    img: '586',
  },
  {
    pIndex: 587,
    name: 'Emolga',
    img: '587',
  },
  {
    pIndex: 588,
    name: 'Karrablast',
    img: '588',
  },
  {
    pIndex: 589,
    name: 'Escavalier',
    img: '589',
  },
  {
    pIndex: 590,
    name: 'Foongus',
    img: '590',
  },
  {
    pIndex: 591,
    name: 'Amoonguss',
    img: '591',
  },
  {
    pIndex: 592,
    name: 'Frillish',
    img: '592',
  },
  {
    pIndex: 593,
    name: 'Jellicent',
    img: '593',
  },
  {
    pIndex: 594,
    name: 'Alomomola',
    img: '594',
  },
  {
    pIndex: 595,
    name: 'Joltik',
    img: '595',
  },
  {
    pIndex: 596,
    name: 'Galvantula',
    img: '596',
  },
  {
    pIndex: 597,
    name: 'Ferroseed',
    img: '597',
  },
  {
    pIndex: 598,
    name: 'Ferrothorn',
    img: '598',
  },
  {
    pIndex: 599,
    name: 'Klink',
    img: '599',
  },
  {
    pIndex: 600,
    name: 'Klang',
    img: '600',
  },
  {
    pIndex: 601,
    name: 'Klinklang',
    img: '601',
  },
  {
    pIndex: 602,
    name: 'Tynamo',
    img: '602',
  },
  {
    pIndex: 603,
    name: 'Eelektrik',
    img: '603',
  },
  {
    pIndex: 604,
    name: 'Eelektross',
    img: '604',
  },
  {
    pIndex: 605,
    name: 'Elgyem',
    img: '605',
  },
  {
    pIndex: 606,
    name: 'Beheeyem',
    img: '606',
  },
  {
    pIndex: 607,
    name: 'Litwick',
    img: '607',
  },
  {
    pIndex: 608,
    name: 'Lampent',
    img: '608',
  },
  {
    pIndex: 609,
    name: 'Chandelure',
    img: '609',
  },
  {
    pIndex: 610,
    name: 'Axew',
    img: '610',
  },
  {
    pIndex: 611,
    name: 'Fraxure',
    img: '611',
  },
  {
    pIndex: 612,
    name: 'Haxorus',
    img: '612',
  },
  {
    pIndex: 613,
    name: 'Cubchoo',
    img: '613',
  },
  {
    pIndex: 614,
    name: 'Beartic',
    img: '614',
  },
  {
    pIndex: 615,
    name: 'Cryogonal',
    img: '615',
  },
  {
    pIndex: 616,
    name: 'Shelmet',
    img: '616',
  },
  {
    pIndex: 617,
    name: 'Accelgor',
    img: '617',
  },
  {
    pIndex: 618,
    name: 'Stunfisk',
    img: '618',
  },
  {
    pIndex: 618,
    name: 'Stunfisk (Galarian form)',
    img: '618',
  },
  {
    pIndex: 619,
    name: 'Mienfoo',
    img: '619',
  },
  {
    pIndex: 620,
    name: 'Mienshao',
    img: '620',
  },
  {
    pIndex: 621,
    name: 'Druddigon',
    img: '621',
  },
  {
    pIndex: 622,
    name: 'Golett',
    img: '622',
  },
  {
    pIndex: 623,
    name: 'Golurk',
    img: '623',
  },
  {
    pIndex: 624,
    name: 'Pawniard',
    img: '624',
  },
  {
    pIndex: 625,
    name: 'Bisharp',
    img: '625',
  },
  {
    pIndex: 626,
    name: 'Bouffalant',
    img: '626',
  },
  {
    pIndex: 627,
    name: 'Rufflet',
    img: '627',
  },
  {
    pIndex: 628,
    name: 'Braviary',
    img: '628',
  },
  {
    pIndex: 629,
    name: 'Vullaby',
    img: '629',
  },
  {
    pIndex: 630,
    name: 'Mandibuzz',
    img: '630',
  },
  {
    pIndex: 631,
    name: 'Heatmor',
    img: '631',
  },
  {
    pIndex: 632,
    name: 'Durant',
    img: '632',
  },
  {
    pIndex: 633,
    name: 'Deino',
    img: '633',
  },
  {
    pIndex: 634,
    name: 'Zweilous',
    img: '634',
  },
  {
    pIndex: 635,
    name: 'Hydreigon',
    img: '635',
  },
  {
    pIndex: 636,
    name: 'Larvesta',
    img: '636',
  },
  {
    pIndex: 637,
    name: 'Volcarona',
    img: '637',
  },
  {
    pIndex: 638,
    name: 'Cobalion',
    img: '638',
  },
  {
    pIndex: 639,
    name: 'Terrakion',
    img: '639',
  },
  {
    pIndex: 640,
    name: 'Virizion',
    img: '640',
  },
  {
    pIndex: 641,
    name: 'Tornadus (Incarnate Forme)',
    img: '641',
  },
  {
    pIndex: 641,
    name: 'Tornadus (Therian Forme)',
    img: '641',
  },
  {
    pIndex: 642,
    name: 'Thundurus (Incarnate Forme)',
    img: '642',
  },
  {
    pIndex: 642,
    name: 'Thundurus (Therian Forme)',
    img: '642',
  },
  {
    pIndex: 643,
    name: 'Reshiram',
    img: '643',
  },
  {
    pIndex: 644,
    name: 'Zekrom',
    img: '644',
  },
  {
    pIndex: 645,
    name: 'Landorus (Incarnate Forme)',
    img: '645',
  },
  {
    pIndex: 645,
    name: 'Landorus (Therian Forme)',
    img: '645',
  },
  {
    pIndex: 646,
    name: 'Kyurem',
    img: '646',
  },
  {
    pIndex: 646,
    name: 'Kyurem (Black Kyurem)',
    img: '646',
  },
  {
    pIndex: 646,
    name: 'Kyurem (White Kyurem)',
    img: '646',
  },
  {
    pIndex: 647,
    name: 'Keldeo',
    img: '647',
  },
  {
    pIndex: 648,
    name: 'Meloetta (Aria Forme)',
    img: '648',
  },
  {
    pIndex: 648,
    name: 'Meloetta (Pirouette Forme)',
    img: '648',
  },
  {
    pIndex: 649,
    name: 'Genesect',
    img: '649',
  },
  // {
  //   pIndex: 650,
  //   name: 'Chespin',
  //   img: '650',
  // },
  // {
  //   pIndex: 651,
  //   name: 'Quilladin',
  //   img: '651',
  // },
  // {
  //   pIndex: 652,
  //   name: 'Chesnaught',
  //   img: '652',
  // },
  // {
  //   pIndex: 653,
  //   name: 'Fennekin',
  //   img: '653',
  // },
  // {
  //   pIndex: 654,
  //   name: 'Braixen',
  //   img: '654',
  // },
  // {
  //   pIndex: 655,
  //   name: 'Delphox',
  //   img: '655',
  // },
  // {
  //   pIndex: 656,
  //   name: 'Froakie',
  //   img: '656',
  // },
  // {
  //   pIndex: 657,
  //   name: 'Frogadier',
  //   img: '657',
  // },
  // {
  //   pIndex: 658,
  //   name: 'Greninja',
  //   img: '658',
  // },
  // {
  //   pIndex: 658,
  //   name: 'Greninja (Ash-Greninja)',
  //   img: '658',
  // },
  // {
  //   pIndex: 659,
  //   name: 'Bunnelby',
  //   img: '659',
  // },
  // {
  //   pIndex: 660,
  //   name: 'Diggersby',
  //   img: '660',
  // },
  // {
  //   pIndex: 661,
  //   name: 'Fletchling',
  //   img: '661',
  // },
  // {
  //   pIndex: 662,
  //   name: 'Fletchinder',
  //   img: '662',
  // },
  // {
  //   pIndex: 663,
  //   name: 'Talonflame',
  //   img: '663',
  // },
  // {
  //   pIndex: 664,
  //   name: 'Scatterbug',
  //   img: '664',
  // },
  // {
  //   pIndex: 665,
  //   name: 'Spewpa',
  //   img: '665',
  // },
  // {
  //   pIndex: 666,
  //   name: 'Vivillon',
  //   img: '666',
  // },
  // {
  //   pIndex: 667,
  //   name: 'Litleo',
  //   img: '667',
  // },
  // {
  //   pIndex: 668,
  //   name: 'Pyroar',
  //   img: '668',
  // },
  // {
  //   pIndex: 669,
  //   name: 'Flabébé',
  //   img: '669',
  // },
  // {
  //   pIndex: 670,
  //   name: 'Floette',
  //   img: '670',
  // },
  // {
  //   pIndex: 671,
  //   name: 'Florges',
  //   img: '671',
  // },
  // {
  //   pIndex: 672,
  //   name: 'Skiddo',
  //   img: '672',
  // },
  // {
  //   pIndex: 673,
  //   name: 'Gogoat',
  //   img: '673',
  // },
  // {
  //   pIndex: 674,
  //   name: 'Pancham',
  //   img: '674',
  // },
  // {
  //   pIndex: 675,
  //   name: 'Pangoro',
  //   img: '675',
  // },
  // {
  //   pIndex: 676,
  //   name: 'Furfrou',
  //   img: '676',
  // },
  // {
  //   pIndex: 677,
  //   name: 'Espurr',
  //   img: '677',
  // },
  // {
  //   pIndex: 678,
  //   name: 'Meowstic',
  //   img: '678',
  // },
  // {
  //   pIndex: 679,
  //   name: 'Honedge',
  //   img: '679',
  // },
  // {
  //   pIndex: 680,
  //   name: 'Doublade',
  //   img: '680',
  // },
  // {
  //   pIndex: 681,
  //   name: 'Aegislash (Blade Forme)',
  //   img: '681',
  // },
  // {
  //   pIndex: 681,
  //   name: 'Aegislash (Shield Forme)',
  //   img: '681',
  // },
  // {
  //   pIndex: 682,
  //   name: 'Spritzee',
  //   img: '682',
  // },
  // {
  //   pIndex: 683,
  //   name: 'Aromatisse',
  //   img: '683',
  // },
  // {
  //   pIndex: 684,
  //   name: 'Swirlix',
  //   img: '684',
  // },
  // {
  //   pIndex: 685,
  //   name: 'Slurpuff',
  //   img: '685',
  // },
  // {
  //   pIndex: 686,
  //   name: 'Inkay',
  //   img: '686',
  // },
  // {
  //   pIndex: 687,
  //   name: 'Malamar',
  //   img: '687',
  // },
  // {
  //   pIndex: 688,
  //   name: 'Binacle',
  //   img: '688',
  // },
  // {
  //   pIndex: 689,
  //   name: 'Barbaracle',
  //   img: '689',
  // },
  // {
  //   pIndex: 690,
  //   name: 'Skrelp',
  //   img: '690',
  // },
  // {
  //   pIndex: 691,
  //   name: 'Dragalge',
  //   img: '691',
  // },
  // {
  //   pIndex: 692,
  //   name: 'Clauncher',
  //   img: '692',
  // },
  // {
  //   pIndex: 693,
  //   name: 'Clawitzer',
  //   img: '693',
  // },
  // {
  //   pIndex: 694,
  //   name: 'Helioptile',
  //   img: '694',
  // },
  // {
  //   pIndex: 695,
  //   name: 'Heliolisk',
  //   img: '695',
  // },
  // {
  //   pIndex: 696,
  //   name: 'Tyrunt',
  //   img: '696',
  // },
  // {
  //   pIndex: 697,
  //   name: 'Tyrantrum',
  //   img: '697',
  // },
  // {
  //   pIndex: 698,
  //   name: 'Amaura',
  //   img: '698',
  // },
  // {
  //   pIndex: 699,
  //   name: 'Aurorus',
  //   img: '699',
  // },
  // {
  //   pIndex: 700,
  //   name: 'Sylveon',
  //   img: '700',
  // },
  // {
  //   pIndex: 701,
  //   name: 'Hawlucha',
  //   img: '701',
  // },
  // {
  //   pIndex: 702,
  //   name: 'Dedenne',
  //   img: '702',
  // },
  // {
  //   pIndex: 703,
  //   name: 'Carbink',
  //   img: '703',
  // },
  // {
  //   pIndex: 704,
  //   name: 'Goomy',
  //   img: '704',
  // },
  // {
  //   pIndex: 705,
  //   name: 'Sliggoo',
  //   img: '705',
  // },
  // {
  //   pIndex: 706,
  //   name: 'Goodra',
  //   img: '706',
  // },
  // {
  //   pIndex: 707,
  //   name: 'Klefki',
  //   img: '707',
  // },
  // {
  //   pIndex: 708,
  //   name: 'Phantump',
  //   img: '708',
  // },
  // {
  //   pIndex: 709,
  //   name: 'Trevenant',
  //   img: '709',
  // },
  // {
  //   pIndex: 710,
  //   name: 'Pumpkaboo (Average Size)',
  //   img: '710',
  // },
  // {
  //   pIndex: 710,
  //   name: 'Pumpkaboo (Large Size)',
  //   img: '710',
  // },
  // {
  //   pIndex: 710,
  //   name: 'Pumpkaboo (Small Size)',
  //   img: '710',
  // },
  // {
  //   pIndex: 710,
  //   name: 'Pumpkaboo (Super Size)',
  //   img: '710',
  // },
  // {
  //   pIndex: 711,
  //   name: 'Gourgeist (Average Size)',
  //   img: '711',
  // },
  // {
  //   pIndex: 711,
  //   name: 'Gourgeist (Large Size)',
  //   img: '711',
  // },
  // {
  //   pIndex: 711,
  //   name: 'Gourgeist (Small Size)',
  //   img: '711',
  // },
  // {
  //   pIndex: 711,
  //   name: 'Gourgeist (Super Size)',
  //   img: '711',
  // },
  // {
  //   pIndex: 712,
  //   name: 'Bergmite',
  //   img: '712',
  // },
  // {
  //   pIndex: 713,
  //   name: 'Avalugg',
  //   img: '713',
  // },
  // {
  //   pIndex: 714,
  //   name: 'Noibat',
  //   img: '714',
  // },
  // {
  //   pIndex: 715,
  //   name: 'Noivern',
  //   img: '715',
  // },
  // {
  //   pIndex: 716,
  //   name: 'Xerneas',
  //   img: '716',
  // },
  // {
  //   pIndex: 717,
  //   name: 'Yveltal',
  //   img: '717',
  // },
  // {
  //   pIndex: 718,
  //   name: 'Zygarde',
  //   img: '718',
  // },
  // {
  //   pIndex: 718,
  //   name: 'Zygarde (10% Forme)',
  //   img: '718',
  // },
  // {
  //   pIndex: 718,
  //   name: 'Zygarde (Complete Forme)',
  //   img: '718',
  // },
  // {
  //   pIndex: 719,
  //   name: 'Diancie',
  //   img: '719',
  // },
  // {
  //   pIndex: 720,
  //   name: 'Hoopa (Hoopa Confined)',
  //   img: '720',
  // },
  // {
  //   pIndex: 720,
  //   name: 'Hoopa (Hoopa Unbound)',
  //   img: '720',
  // },
  // {
  //   pIndex: 721,
  //   name: 'Volcanion',
  //   img: '721',
  // },
  // {
  //   pIndex: 722,
  //   name: 'Rowlet',
  //   img: '722',
  // },
  // {
  //   pIndex: 723,
  //   name: 'Dartrix',
  //   img: '723',
  // },
  // {
  //   pIndex: 724,
  //   name: 'Decidueye',
  //   img: '724',
  // },
  // {
  //   pIndex: 725,
  //   name: 'Litten',
  //   img: '725',
  // },
  // {
  //   pIndex: 726,
  //   name: 'Torracat',
  //   img: '726',
  // },
  // {
  //   pIndex: 727,
  //   name: 'Incineroar',
  //   img: '727',
  // },
  // {
  //   pIndex: 728,
  //   name: 'Popplio',
  //   img: '728',
  // },
  // {
  //   pIndex: 729,
  //   name: 'Brionne',
  //   img: '729',
  // },
  // {
  //   pIndex: 730,
  //   name: 'Primarina',
  //   img: '730',
  // },
  // {
  //   pIndex: 731,
  //   name: 'Pikipek',
  //   img: '731',
  // },
  // {
  //   pIndex: 732,
  //   name: 'Trumbeak',
  //   img: '732',
  // },
  // {
  //   pIndex: 733,
  //   name: 'Toucannon',
  //   img: '733',
  // },
  // {
  //   pIndex: 734,
  //   name: 'Yungoos',
  //   img: '734',
  // },
  // {
  //   pIndex: 735,
  //   name: 'Gumshoos',
  //   img: '735',
  // },
  // {
  //   pIndex: 736,
  //   name: 'Grubbin',
  //   img: '736',
  // },
  // {
  //   pIndex: 737,
  //   name: 'Charjabug',
  //   img: '737',
  // },
  // {
  //   pIndex: 738,
  //   name: 'Vikavolt',
  //   img: '738',
  // },
  // {
  //   pIndex: 739,
  //   name: 'Crabrawler',
  //   img: '739',
  // },
  // {
  //   pIndex: 740,
  //   name: 'Crabominable',
  //   img: '740',
  // },
  // {
  //   pIndex: 741,
  //   name: 'Oricorio (Baile Style)',
  //   img: '741',
  // },
  // {
  //   pIndex: 741,
  //   name: 'Oricorio (Pa\'u Style)',
  //   img: '741',
  // },
  // {
  //   pIndex: 741,
  //   name: 'Oricorio (Pom-Pom Style)',
  //   img: '741',
  // },
  // {
  //   pIndex: 741,
  //   name: 'Oricorio (Sensu Style)',
  //   img: '741',
  // },
  // {
  //   pIndex: 742,
  //   name: 'Cutiefly',
  //   img: '742',
  // },
  // {
  //   pIndex: 743,
  //   name: 'Ribombee',
  //   img: '743',
  // },
  // {
  //   pIndex: 744,
  //   name: 'Rockruff',
  //   img: '744',
  // },
  // {
  //   pIndex: 745,
  //   name: 'Lycanroc (Midday Form)',
  //   img: '745',
  // },
  // {
  //   pIndex: 745,
  //   name: 'Lycanroc (Midnight Form)',
  //   img: '745',
  // },
  // {
  //   pIndex: 746,
  //   name: 'Wishiwashi',
  //   img: '746',
  // },
  // {
  //   pIndex: 746,
  //   name: 'Wishiwashi (School Form)',
  //   img: '746',
  // },
  // {
  //   pIndex: 747,
  //   name: 'Mareanie',
  //   img: '747',
  // },
  // {
  //   pIndex: 748,
  //   name: 'Toxapex',
  //   img: '748',
  // },
  // {
  //   pIndex: 749,
  //   name: 'Mudbray',
  //   img: '749',
  // },
  // {
  //   pIndex: 750,
  //   name: 'Mudsdale',
  //   img: '750',
  // },
  // {
  //   pIndex: 751,
  //   name: 'Dewpider',
  //   img: '751',
  // },
  // {
  //   pIndex: 752,
  //   name: 'Araquanid',
  //   img: '752',
  // },
  // {
  //   pIndex: 753,
  //   name: 'Fomantis',
  //   img: '753',
  // },
  // {
  //   pIndex: 754,
  //   name: 'Lurantis',
  //   img: '754',
  // },
  // {
  //   pIndex: 755,
  //   name: 'Morelull',
  //   img: '755',
  // },
  // {
  //   pIndex: 756,
  //   name: 'Shiinotic',
  //   img: '756',
  // },
  // {
  //   pIndex: 757,
  //   name: 'Salandit',
  //   img: '757',
  // },
  // {
  //   pIndex: 758,
  //   name: 'Salazzle',
  //   img: '758',
  // },
  // {
  //   pIndex: 759,
  //   name: 'Stufful',
  //   img: '759',
  // },
  // {
  //   pIndex: 760,
  //   name: 'Bewear',
  //   img: '760',
  // },
  // {
  //   pIndex: 761,
  //   name: 'Bounsweet',
  //   img: '761',
  // },
  // {
  //   pIndex: 762,
  //   name: 'Steenee',
  //   img: '762',
  // },
  // {
  //   pIndex: 763,
  //   name: 'Tsareena',
  //   img: '763',
  // },
  // {
  //   pIndex: 764,
  //   name: 'Comfey',
  //   img: '764',
  // },
  // {
  //   pIndex: 765,
  //   name: 'Oranguru',
  //   img: '765',
  // },
  // {
  //   pIndex: 766,
  //   name: 'Passimian',
  //   img: '766',
  // },
  // {
  //   pIndex: 767,
  //   name: 'Wimpod',
  //   img: '767',
  // },
  // {
  //   pIndex: 768,
  //   name: 'Golisopod',
  //   img: '768',
  // },
  // {
  //   pIndex: 769,
  //   name: 'Sandygast',
  //   img: '769',
  // },
  // {
  //   pIndex: 770,
  //   name: 'Palossand',
  //   img: '770',
  // },
  // {
  //   pIndex: 771,
  //   name: 'Pyukumuku',
  //   img: '771',
  // },
  // {
  //   pIndex: 772,
  //   name: 'TODO',
  //   img: '772',
  // },
  // {
  //   pIndex: 773,
  //   name: 'Silvally',
  //   img: '773',
  // },
  // {
  //   pIndex: 774,
  //   name: 'Minior',
  //   img: '774',
  // },
  // {
  //   pIndex: 774,
  //   name: 'Minior (Core)',
  //   img: '774',
  // },
  // {
  //   pIndex: 775,
  //   name: 'Komala',
  //   img: '775',
  // },
  // {
  //   pIndex: 776,
  //   name: 'Turtonator',
  //   img: '776',
  // },
  // {
  //   pIndex: 777,
  //   name: 'Togedemaru',
  //   img: '777',
  // },
  // {
  //   pIndex: 778,
  //   name: 'Mimikyu',
  //   img: '778',
  // },
  // {
  //   pIndex: 779,
  //   name: 'Bruxish',
  //   img: '779',
  // },
  // {
  //   pIndex: 780,
  //   name: 'Drampa',
  //   img: '780',
  // },
  // {
  //   pIndex: 781,
  //   name: 'Dhelmise',
  //   img: '781',
  // },
  // {
  //   pIndex: 782,
  //   name: 'Jangmo -o',
  //   img: '782',
  // },
  // {
  //   pIndex: 783,
  //   name: 'Hakamo -o',
  //   img: '783',
  // },
  // {
  //   pIndex: 784,
  //   name: 'Kommo -o',
  //   img: '784',
  // },
  // {
  //   pIndex: 785,
  //   name: 'Tapu  Koko',
  //   img: '785',
  // },
  // {
  //   pIndex: 786,
  //   name: 'Tapu  Lele',
  //   img: '786',
  // },
  // {
  //   pIndex: 787,
  //   name: 'Tapu  Bulu',
  //   img: '787',
  // },
  // {
  //   pIndex: 788,
  //   name: 'Tapu  Fini',
  //   img: '788',
  // },
  // {
  //   pIndex: 789,
  //   name: 'Cosmog',
  //   img: '789',
  // },
  // {
  //   pIndex: 790,
  //   name: 'Cosmoem',
  //   img: '790',
  // },
  // {
  //   pIndex: 791,
  //   name: 'Solgaleo',
  //   img: '791',
  // },
  // {
  //   pIndex: 792,
  //   name: 'Lunala',
  //   img: '792',
  // },
  // {
  //   pIndex: 793,
  //   name: 'Nihilego',
  //   img: '793',
  // },
  // {
  //   pIndex: 794,
  //   name: 'Buzzwole',
  //   img: '794',
  // },
  // {
  //   pIndex: 795,
  //   name: 'Pheromosa',
  //   img: '795',
  // },
  // {
  //   pIndex: 796,
  //   name: 'Xurkitree',
  //   img: '796',
  // },
  // {
  //   pIndex: 797,
  //   name: 'Celesteela',
  //   img: '797',
  // },
  // {
  //   pIndex: 798,
  //   name: 'Kartana',
  //   img: '798',
  // },
  // {
  //   pIndex: 799,
  //   name: 'Guzzlord',
  //   img: '799',
  // },
  // {
  //   pIndex: 800,
  //   name: 'Necrozma',
  //   img: '800',
  // },
  // {
  //   pIndex: 801,
  //   name: 'Magearna',
  //   img: '801',
  // },
  // {
  //   pIndex: 802,
  //   name: 'Marshadow',
  //   img: '802',
  // },
  // {
  //   pIndex: 803,
  //   name: 'Poipole',
  //   img: '803',
  // },
  // {
  //   pIndex: 804,
  //   name: 'Naganadel',
  //   img: '804',
  // },
  // {
  //   pIndex: 805,
  //   name: 'Stakataka',
  //   img: '805',
  // },
  // {
  //   pIndex: 806,
  //   name: 'Blacephalon',
  //   img: '806',
  // },
  // {
  //   pIndex: 807,
  //   name: 'Zeraora',
  //   img: '807',
  // },
  // {
  //   pIndex: 808,
  //   name: 'Meltan',
  //   img: '808',
  // },
  // {
  //   pIndex: 809,
  //   name: 'Melmetal',
  //   img: '809',
  // },
  // {
  //   pIndex: 810,
  //   name: 'Grookey',
  //   img: '810',
  // },
  // {
  //   pIndex: 811,
  //   name: 'Thwackey',
  //   img: '811',
  // },
  // {
  //   pIndex: 812,
  //   name: 'Rillaboom',
  //   img: '812',
  // },
  // {
  //   pIndex: 813,
  //   name: 'Scorbunny',
  //   img: '813',
  // },
  // {
  //   pIndex: 814,
  //   name: 'Raboot',
  //   img: '814',
  // },
  // {
  //   pIndex: 815,
  //   name: 'Cinderace',
  //   img: '815',
  // },
  // {
  //   pIndex: 816,
  //   name: 'Sobble',
  //   img: '816',
  // },
  // {
  //   pIndex: 817,
  //   name: 'Drizzile',
  //   img: '817',
  // },
  // {
  //   pIndex: 818,
  //   name: 'Inteleon',
  //   img: '818',
  // },
  // {
  //   pIndex: 819,
  //   name: 'Skwovet',
  //   img: '819',
  // },
  // {
  //   pIndex: 820,
  //   name: 'Greedent',
  //   img: '820',
  // },
  // {
  //   pIndex: 821,
  //   name: 'Rookidee',
  //   img: '821',
  // },
  // {
  //   pIndex: 822,
  //   name: 'Corvisquire',
  //   img: '822',
  // },
  // {
  //   pIndex: 823,
  //   name: 'Corviknight',
  //   img: '823',
  // },
  // {
  //   pIndex: 824,
  //   name: 'Blipbug',
  //   img: '824',
  // },
  // {
  //   pIndex: 825,
  //   name: 'Dottler',
  //   img: '825',
  // },
  // {
  //   pIndex: 826,
  //   name: 'Orbeetle',
  //   img: '826',
  // },
  // {
  //   pIndex: 827,
  //   name: 'Nickit',
  //   img: '827',
  // },
  // {
  //   pIndex: 828,
  //   name: 'Thievul',
  //   img: '828',
  // },
  // {
  //   pIndex: 829,
  //   name: 'Gossifleur',
  //   img: '829',
  // },
  // {
  //   pIndex: 830,
  //   name: 'Eldegoss',
  //   img: '830',
  // },
  // {
  //   pIndex: 831,
  //   name: 'Wooloo',
  //   img: '831',
  // },
  // {
  //   pIndex: 832,
  //   name: 'Dubwool',
  //   img: '832',
  // },
  // {
  //   pIndex: 833,
  //   name: 'Chewtle',
  //   img: '833',
  // },
  // {
  //   pIndex: 834,
  //   name: 'Drednaw',
  //   img: '834',
  // },
  // {
  //   pIndex: 835,
  //   name: 'Yamper',
  //   img: '835',
  // },
  // {
  //   pIndex: 836,
  //   name: 'Boltund',
  //   img: '836',
  // },
  // {
  //   pIndex: 837,
  //   name: 'Rolycoly',
  //   img: '837',
  // },
  // {
  //   pIndex: 838,
  //   name: 'Carkol',
  //   img: '838',
  // },
  // {
  //   pIndex: 839,
  //   name: 'Coalossal',
  //   img: '839',
  // },
  // {
  //   pIndex: 840,
  //   name: 'Applin',
  //   img: '840',
  // },
  // {
  //   pIndex: 841,
  //   name: 'Flapple',
  //   img: '841',
  // },
  // {
  //   pIndex: 842,
  //   name: 'Appletun',
  //   img: '842',
  // },
  // {
  //   pIndex: 843,
  //   name: 'Silicobra',
  //   img: '843',
  // },
  // {
  //   pIndex: 844,
  //   name: 'Sandaconda',
  //   img: '844',
  // },
  // {
  //   pIndex: 845,
  //   name: 'Cramorant',
  //   img: '845',
  // },
  // {
  //   pIndex: 846,
  //   name: 'Arrokuda',
  //   img: '846',
  // },
  // {
  //   pIndex: 847,
  //   name: 'Barraskewda',
  //   img: '847',
  // },
  // {
  //   pIndex: 848,
  //   name: 'Toxel',
  //   img: '848',
  // },
  // {
  //   pIndex: 849,
  //   name: 'Toxtricity',
  //   img: '849',
  // },
  // {
  //   pIndex: 850,
  //   name: 'Sizzlipede',
  //   img: '850',
  // },
  // {
  //   pIndex: 851,
  //   name: 'Centiskorch',
  //   img: '851',
  // },
  // {
  //   pIndex: 852,
  //   name: 'Clobbopus',
  //   img: '852',
  // },
  // {
  //   pIndex: 853,
  //   name: 'Grapploct',
  //   img: '853',
  // },
  // {
  //   pIndex: 854,
  //   name: 'Sinistea',
  //   img: '854',
  // },
  // {
  //   pIndex: 855,
  //   name: 'Polteageist',
  //   img: '855',
  // },
  // {
  //   pIndex: 856,
  //   name: 'Hatenna',
  //   img: '856',
  // },
  // {
  //   pIndex: 857,
  //   name: 'Hattrem',
  //   img: '857',
  // },
  // {
  //   pIndex: 858,
  //   name: 'Hatterene',
  //   img: '858',
  // },
  // {
  //   pIndex: 859,
  //   name: 'Impidimp',
  //   img: '859',
  // },
  // {
  //   pIndex: 860,
  //   name: 'Morgrem',
  //   img: '860',
  // },
  // {
  //   pIndex: 861,
  //   name: 'Grimmsnarl',
  //   img: '861',
  // },
  // {
  //   pIndex: 862,
  //   name: 'Obstagoon',
  //   img: '862',
  // },
  // {
  //   pIndex: 863,
  //   name: 'Perrserker',
  //   img: '863',
  // },
  // {
  //   pIndex: 864,
  //   name: 'Cursola',
  //   img: '864',
  // },
  // {
  //   pIndex: 865,
  //   name: 'Sirfetch\'d',
  //   img: '865',
  // },
  // {
  //   pIndex: 866,
  //   name: 'Mr. Rime',
  //   img: '866',
  // },
  // {
  //   pIndex: 867,
  //   name: 'Runerigus',
  //   img: '867',
  // },
  // {
  //   pIndex: 868,
  //   name: 'Milcery',
  //   img: '868',
  // },
  // {
  //   pIndex: 869,
  //   name: 'Alcremie',
  //   img: '869',
  // },
  // {
  //   pIndex: 870,
  //   name: 'Falinks',
  //   img: '870',
  // },
  // {
  //   pIndex: 871,
  //   name: 'Pincurchin',
  //   img: '871',
  // },
  // {
  //   pIndex: 872,
  //   name: 'Snom',
  //   img: '872',
  // },
  // {
  //   pIndex: 873,
  //   name: 'Frosmoth',
  //   img: '873',
  // },
  // {
  //   pIndex: 874,
  //   name: 'Stonjourner',
  //   img: '874',
  // },
  // {
  //   pIndex: 875,
  //   name: 'Eiscue (Ice Face)',
  //   img: '875',
  // },
  // {
  //   pIndex: 875,
  //   name: 'Eiscue (Noice Face)',
  //   img: '875',
  // },
  // {
  //   pIndex: 876,
  //   name: 'Indeedee (Female)',
  //   img: '876',
  // },
  // {
  //   pIndex: 876,
  //   name: 'Indeedee (Male)',
  //   img: '876',
  // },
  // {
  //   pIndex: 877,
  //   name: 'Morpeko',
  //   img: '877',
  // },
  // {
  //   pIndex: 878,
  //   name: 'Cufant',
  //   img: '878',
  // },
  // {
  //   pIndex: 879,
  //   name: 'Copperajah',
  //   img: '879',
  // },
  // {
  //   pIndex: 880,
  //   name: 'Dracozolt',
  //   img: '880',
  // },
  // {
  //   pIndex: 881,
  //   name: 'Arctozolt',
  //   img: '881',
  // },
  // {
  //   pIndex: 882,
  //   name: 'Dracovish',
  //   img: '882',
  // },
  // {
  //   pIndex: 883,
  //   name: 'Arctovish',
  //   img: '883',
  // },
  // {
  //   pIndex: 884,
  //   name: 'Duraludon',
  //   img: '884',
  // },
  // {
  //   pIndex: 885,
  //   name: 'Dreepy',
  //   img: '885',
  // },
  // {
  //   pIndex: 886,
  //   name: 'Drakloak',
  //   img: '886',
  // },
  // {
  //   pIndex: 887,
  //   name: 'Dragapult',
  //   img: '887',
  // },
  // {
  //   pIndex: 888,
  //   name: 'Zacian (Crowned)',
  //   img: '888',
  // },
  // {
  //   pIndex: 888,
  //   name: 'Zacian (Hero)',
  //   img: '888',
  // },
  // {
  //   pIndex: 889,
  //   name: 'Zamazenta (Crowned)',
  //   img: '889',
  // },
  // {
  //   pIndex: 889,
  //   name: 'Zamazenta (Hero)',
  //   img: '889',
  // },
  // {
  //   pIndex: 890,
  //   name: 'Eternatus',
  //   img: '890',
  // },
  // {
  //   pIndex: 891,
  //   name: 'Kubfu',
  //   img: '891',
  // },
  // {
  //   pIndex: 892,
  //   name: 'Urshifu (Rapid Strike Style)',
  //   img: '892',
  // },
  // {
  //   pIndex: 892,
  //   name: 'Urshifu (Single Strike Style)',
  //   img: '892',
  // },
  // {
  //   pIndex: 893,
  //   name: 'Zarude',
  //   img: '893',
  // },
];
