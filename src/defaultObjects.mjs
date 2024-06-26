// Game classes
import PlayerClass from "./classes/Player.mjs";
import Farmer from "./classes/Farmer.mjs";
import Blacksmith from "./classes/Blacksmith.mjs";
import Scholar from "./classes/Scholar.mjs";
// import Tome from "./classes/Tome.mjs";
import statsTracker from "./classes/StatsTracker.mjs"

// Functioms
import { clone } from "./carrot_utilities.mjs";

// Default keybinds
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

// Default settings
export const default_settings = {
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
    "/assets/characters/Bill.png", //avatar (img)
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
    "/assets/characters/Belle.png", //avatar (img)
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
    "/assets/characters/Greg.png", //avatar (img)
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
    [true,0,0,0,0,10], //Hoe Array
    [15000,750000,55000000,9000000000,5000000000000,25000000000000000], //Hoe Pricing
    false, //Currently Crafting

)

export const default_Charles = new Scholar("charles",'/assets/assets/characters/Charles.png',)
// default_Charles.improvedFarmingPracticeTome = new Tome(0,1,22025);
// default_Charles.improveCraftsmanshipTome    = new Tome(0,1,22025);
// default_Charles.cheaperSteelTome            = new Tome(0,1,22025);
// default_Charles.salaryManagementTome        = new Tome(0,1,22025);
// default_Charles.bibleTome                   = new Tome(0,100,1000,1.9);

export const default_Jared = {
    // Info
    name: "Jared",
    nickname: "Jared",
    img: '/assets/assets/characters/Jared.png',

    // Shop player data
    data: {
        'mp3_player': {
            available: true,
            level: 0,
            value: false,
        },
        'clickrate': {
            available: true,
            level: 0,
            value: 2,
        },
        'level_up_discount': {
            available: true,
            level: 0,
            value: 100,
        },
        'belle_bonus': {
            available: true,
            level: 0,
            value: 0,
        },
        // 'greg_slots': { // scrapped because of how craft speed works- may add later but probably wouldnt be any good
        //     available: true,
        //     level: 0,
        //     value: 1,
        // },
        'tool_slots': {
            available: true,
            level: 0,
            value: 0,
        },
        'greg_speed': {
            available: true,
            level: 0,
            value: 1,
        },
        'greg_min_start': {
            available: true,
            level: 0,
            value: 100,
        },
        'falling_bonus': {
            available: true,
            level: 0,
            value: 0,
        },
        'page_bonus': {
            available: true,
            level: 0,
            value: 1,
        },
        'magic_keyboard': {
            available: true,
            level: 0,
            value: false,
        },
        // 'paperclip': {
        //     available: true,
        //     level: 0,
        //     value: 0,
        // },
        // 'fake_trophy': {
        //     available: false,
        //     level: 0,
        //     value: false,
        // },
    },
}