// Game classes
import Player from "./classes/Player.mjs";
import Farmer from "./classes/Farmer.mjs";
import Blacksmith from "./classes/Blacksmith.mjs";
import statsTracker from "./classes/StatsTracker.mjs"

// Functioms
import { clone } from "./carrot_utilities.mjs";

// Assets
import { billPNG, bellePNG, gregPNG } from "./assets/assets.js";


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
    {bill:true}, //characters; unlocked
    {}, //achievements
    0, //internal

    // Unlockables
    ['theme_dark','theme_light',"theme_oled"], // themes
    {
        'bundle':   ['default'],
        'farmable': ['default'],
        'bill':     ['default'],
        'belle':    ['default'],
        'greg':     ['default'],
        'charles':  ['default'], 
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
export const default_tips = {
    number: 0,
    // random:0,
    tracker: 0, // Tip level
    best: 0, // highest tip level reached
    type: false,

    // Practical tips
    starter: [ // 0
        "Tip: Click the carrot",
        "Click here to cycle through available tips!",
        "Click the level up arrow to upgrade your characters",
        "Click a character's \"i\" symbol to learn more about them",
        "Greg can craft tools that will buff your other characters",
        "If you see a ? near something you can click it to get a more detailed description of what it does",
        "You can also press amd hold the carrot as a slower alternative to clicking",
    ],
    beginner: [ // 1
        "To equip a tool, you must first craft one, then click the corresponding tool type under Bill or Belle",
        "Each character can only hold up to 1 tool (per type) for every level Greg has reached",
        "By completing achievements you will earn mysterious tome pages",
        "Completing achievements will give you additional themes and cosmetics to buy",
        "When clicking the carrot, cash will sometimes drop. Make sure to grab it!",
    ],
    intermediate: [ // 2
        "When you're ready, click the prestige button. You will start over but gain the ability to buy tomes",
        "Golden carrots can be used to buy tomes, which give you permanent buffs",
        "Every Tome Page you have will give you a +1% golden carrot (or more!) bonus when prestiging",
        "Some achievements will change the game icon in the top left to indicate your progress",
        "The more tools the better!",
    ],
    advanced: [ // 3
        "You've earned more than 1 billion carrots this prestige. That's a lot!",
        "Good luck!", // placeholder?
        "Buy tomes from Charles to buff your farm",
        "Make sure to spend your golden carrots on tomes before you start farming",
        "There is a merchant who sells powerful trinkets",
        // "Unlocking every theme will make a special theme available", // (Referring to theme_custom)
    ],

    // Fun tips
    fun_starter: [
        "Carrots can end world hunger",
        "Only YOU can save the carrots!",
        "Carrots have been proven to improve eyesight by 150%. It's true!",
        "Carrots are your friend",
        "Only the best code", // originally "JJ broke it",
        "Carrot Clicker is mobile-friendly!",
        "Click the carrot, Bill.",
        "Wait for the carrot to grow, Belle.",
        `Only on ${window.location.href.split('#')[0]}`,
        "Now in HD",
    ],
    fun_beginner: [
        "On the internet",
        "Fun fact: baby carrots are just shaved down regular carrots",
        "\"Game development is hard\" clicker game developer says",
        "Carrot?!",
        "Drink carrot juice",
        "Spaghetti code!",
    ],
    fun_intermediate: [
        "\"I have night vision now,\" says man who has eaten exclusively carrots for 3 days",
        "Tired of eating carrots? Make carrot cake!",
        "Carrots have been proven to improve eyesight by 1000%. It's true!",
        "Carrots love you ♥",
        "Studies are being done to determine if carrots can cure the common cold",
        "Also play Cookie Clicker",
        "Also play Egg, Inc.",
        "Craft the carrot, Greg.",
        "Study the carrot, Charles.",
        "Paint the carrot, Carl.",
        "Sell carrot knicknacks, Jared",
    ],
    fun_advanced: [
        "World hunger has been cured, but there must be more we can do.",
        "Carrots have never been found at a crime scene because they are the direct cause of peace and friendship.",
        "Carrots have received 7,000,000,000 (★★★★★) 5-star ratings on ebay",
        "Eating carrots cures cancer",
        "Studies done on people eating only carrots for 90 days have proven that they are the only food required for human survival.",
        "Report any anti-carrot propaganda you see on the internet to your local carrot police",
        "Public Service Announcement: Reminder to eat more carrots. That is all.",
        "People who regularly eat carrots have been known to exceed a life expectancy of 200 years",
        "Carrots are people too",
        "Carrots have been proven to improve eyesight by 9000%. It's true!",
    ],

    // Mark as seen
    seen: {
        starter: {
            0: true,
        },
        beginner: {},
        intermediate: {},
        advanced: {},
    
        // Fun tips
        fun_starter: {},
        fun_beginner: {},
        fun_intermediate: {},
        fun_advanced: {},
    }
}

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
    "Belle_Boomerette", //name -- for refrence in code, if you want to display name use .fullName
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
    gregPNG, //avatar (img)
    false, //Wether Locked or not
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