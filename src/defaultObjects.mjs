// Game classes
import Player from "./classes/Player.mjs";
import Farmer from "./classes/Farmer.mjs";
import Blacksmith from "./classes/Blacksmith.mjs";
import statsTracker from "./classes/StatsTracker.mjs"

// Functioms
import { clone } from "./carrot_utilities.mjs";

// Assets
import { billPNG, bellePNG, gregPNG } from "./assets/assets.js";


// Player
export const playerPrestigeTemplate = {
    carrots: 0,
    cpc_carrots: 0,
    cps_carrots: 0,
    bonus_carrots: 0,

    // cash: 0,
    falling_carrots_grabbed: 0,

    // golden_carrots: 0,
    // prestige_count: 0,
    clicks: 0,
    hoes: {
        crafted: [0, 0, 0, 0, 0, 0],
        craftedTotal: 0,
    },
    boosts_used: 0,
};

export const defaultStatTracker = new statsTracker(0,0,0,0,0,0,0,0,0,{crafted: [0, 0, 0, 0, 0, 0],craftedTotal: 0},0,0,0)
  
export const default_player = new Player(
    16,//data_version; needs to be incremented by 1 any time any game object is changed
    0, //carrots
    1, //cpc; Carrots per click
    0, //cps; Carrots per Second
    0, //equippedHoes
    0, //cash
    0, //clickSpeedRecord
    0, //fallingConsecRecord
    '0/0', //trinket_completion,
    0, //pages; tome pages that increase prestige potential
    0, //golden_carrots
    0, //prestige_potential; golden carrots recived upon prestige
    0, //prestige_potential_cap
    false, //prestige_available; wether you can prestige
    clone(playerPrestigeTemplate), //prestige

    // Unlocked characters
    { bill: true }, //characters; unlocked
    {}, //achievements
    0, //internal

    // Unlockables
    ['theme_dark', 'theme_light', "theme_oled"], // themes
    {
        'bundle':   ['default'],
        'farmable': ['default'],
        'bill':     ['default'],
        'belle':    ['default'],
        'greg':     ['default'],
        'charles': ['default'],
        'carl':     ['default'],
        'jared':    ['default'],
        'tools':    ['default'],
    }, // cosmetics

    false, //new_theme
    false, //new_cosmetic


    {},  //flags
    clone(defaultStatTracker)
)

//default keybinds
export const keybinds_default = {
    // Gameplay
    key_carrot:         'Spacebar',
    key_multibuy:       'Shift',
    key_bill_lvlup:     '1',
    key_belle_lvlup:    '2',
    key_greg_lvlup:     '3',

    // Tools
    key_craft_0:        '4',
    key_craft_1:        '5',
    key_craft_2:        '6',
    key_craft_3:        '7',
    key_craft_4:        '8',
    key_craft_5:        '9',
    // modifier_equip: 'Shift',

    // Settings
    key_full_numbers:   'F',

    // Interface
    key_cleartoasts:    'X',

    // Menus
    key_tips_menu:      'H',
    key_prestige:       'P',
    key_inventory:      'E',
    key_themes:         'Not set',
    key_cosmetics:      'Not set',

    // Tripane
    key_pane_achievements: 'A',
    key_pane_statistics:   'S',
    key_pane_settings:     'D',
}

//default settings
export const default_settings={
    notificationLength: 6,      // number - Time in seconds
    enable_keybinds: true,     // boolean
    autosave_interval: 5,

    tutorial_messages: true,    // boolean
    carl_shop_toasts: true,     // boolean
    cosmetic_auto_equip: false, // boolean

    master_volume: 0.8,         // number - Between 0 and 1
    enableSounds: true,         // boolean
    enableMusic: false,         // boolean
    enableCarrotSounds: false,  // boolean

    full_numbers: false,        // boolean
    enableMainProgress: true,   // boolean
    confetti_effects: true,     // boolean

    // UI
    theme: 'theme_dark',        // string
    cosmetics: {
        farmable: 'default',
        bill:     'default',
        belle:    'default',
        greg:     'default',
        charles:  'default',
        carl:     'default',
        jared:    'default',
        tools:    'default',
    },
    openpanel: null,            // string
    show_nav: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)), // boolean
    cosmetics_grid: true,       // boolean
    achievements_grid: false,   // boolean
    compact_achievements: false,// boolean
    fun_tip_percentage: 40,     // number - between 0 and 100

    keybinds: keybinds_default, // object
}

//default tips
export { default as tips } from "./gamedata/tips.json";


//Boomer Bill
export const default_Boomer_Bill = new Farmer(
    "Boomer_Bill", //name -- for refrence in code, if you want to display name use .fullName
    "Boomer Bill", //Full Name
    "Bill", //Nickname
    billPNG, //avatar (img)
    false, //Wether Locked or not
    1, //lvl (integer)
    100, //lvl up price (float)
    100, //Base price
    [ // Price scaling
        { min: 1,   modifier: 0.11  },
        { min: 75,  modifier: 0.13  },
        { min: 100, modifier: 0.09  },
        { min: 300, modifier: 0.08  },
        { min: 500, modifier: 0.065 },
    ],
    [0,1,2,3,0,5] //Hoe Array
)

//Boomer Bill
export const default_Belle_Boomerette = new Farmer(
    "Belle_Boomerette", //name -- for reference in code, if you want to display name use .fullName
    "Belle Boomerette", //Full Name
    "Belle", //Nickname
    bellePNG, //avatar (img)
    false, //Wether Locked or not
    0, //lvl (integer)
    250, //lvl up price (float)
    250, //Base Price
    [ // Price scaling
        { min: 0,   modifier: 0.058 },
        { min: 100, modifier: 0.11  },
        { min: 125, modifier: 0.07  },
        { min: 200, modifier: 0.08  },
    ],
    [0,0,0,0,0,0], //Hoe Array
)

//Greg
export const default_Greg = new Blacksmith(
    "Greg", //name -- for refrence in code, if you want to display name use .fullName
    "Greg The Black", //Full Name
    "Greg", //Nickname
    false, //Wether Locked or not
    gregPNG, //avatar (img)
    0, //lvl (int)
    5000, //lvl up price (float)
    5000, //basePrice
    [ // Price scaling
        { min: 0,   modifier: 0.17706 },
        { min: 25,  modifier: 0.1874  },
        { min: 50,  modifier: 0.227   },
        { min: 75,  modifier: 0.284   },
        { min: 100, modifier: 0.409   },
        { min: 125, modifier: 0.25    },
    ],
    [5,0,0,0,0,10], //Hoe Array
    [15000,750000,55000000,9000000000,5000000000000,25000000000000000], //Hoe Pricing
    false, //Currently Crafting

)