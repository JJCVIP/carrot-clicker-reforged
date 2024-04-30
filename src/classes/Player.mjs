//creates a player class
import StatsTracker from "./StatsTracker.mjs"
import { defaultStatTracker } from "../defaultObjects.mjs"

// Functioms
import { clone } from "../carrot_utilities.mjs"


// Defaults
const playerPrestigeTemplate = {
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
const current_data_version = 16;

/** Player class */
export default class PlayerClass {
    /** Player constructor
     * @param {Object} data Any key/value pairs will be replace the default values. Leave undefined for a new player object with defaults
     */
    constructor(data={}){
        // Default values

        // data_version - Needs to be incremented by 1 any time any game object is changed
        this.data_version = current_data_version; 
        this.flags = {};

        // Values
        this.carrots = 0;
        this.cpc = 1; // Carrots per click
        this.cps = 0; // Carrots per Second
        this.equippedHoes = 0;
        this.cash = 0;
        this.pages = 0;

        // Prestiging
        this.golden_carrots = 0;
        this.prestige_potential = 0; // Golden carrots the player will receive upon prestige
        this.prestige_potential_cap = 0;
        this.prestige_available = false; // Whether you can prestige
        this.prestige = clone(playerPrestigeTemplate);

        // Trackers
        this.clickSpeedRecord = 0;
        this.fallingConsecRecord = 0;
        this.trinket_completion = '0/0';

        // Unlocks
        this.characters = { bill: true };
        this.achievements = {};
        this.internal = 0; // Internal achievements unlocked?
        this.themes = ['theme_dark', 'theme_light', "theme_oled"];
        this.cosmetics = {
            'bundle':   ['default'],
            'farmable': ['default'],
            'bill':     ['default'],
            'belle':    ['default'],
            'greg':     ['default'],
            'charles':  ['default'],
            'carl':     ['default'],
            'jared':    ['default'],
            'tools':    ['default'],
        };
        this.new_theme = false;
        this.new_cosmetic = false;

        this.lifetime = new StatsTracker();

        // Tips
        this.tip_tracker = {
            number: 0,
            // random:0,
            tracker: 0, // Tip level
            best: 0, // highest tip level reached
            type: false
        }

        // Override default values with paramaters from "data" object
        for(let [key, value] of Object.entries(data)) this[key] = value;
    }

    // hasTheme(key) {
    //     return this.themes.includes(key);
    // }

    speak(){
        console.log('hello world');
    }
}

//to Turn to methods

// /** Earn currency
//  * @param {number} amount Amount of cash to be earned
//  * @param {string} type 'bonus' will use mouse position
//  */
// function earnCash(amount, type) {
//     popupHandler((type === 'bonus'), amount, 'cash');
//     player.cash += amount;
//     player.lifetime.cash += amount;
//     cashCount(true);
// }

// /** Performs a prestige, which gives Golden Carrots and resets attributes
//  * @returns If unable to Prestige
//  */
// function prestige() {
//     console.log('Prestiging...');
//     if(player.prestige_potential < 1) {
//         console.warn('Insufficient prestige potential');
//         return toast('Cannot Prestige', 'Insufficient prestige potential. Try again later.');
//     }

//     window.scrollTo(0, 0);
//     clearInterval(cpsInterval);

//     // Reset statistics
//     player.prestige = clone(playerPrestigeTemplate);
//     // Give golden carrots
//     player.golden_carrots += player.prestige_potential;
//     player.lifetime.golden_carrots += player.prestige_potential;
//     player.lifetime.prestige_count += 1;

//     // Stop any tools from crafting
//     clearInterval(craftingInterval);
//     setTimeout(updateCraftingBar, 90);

//     // Reset characters to default
//     [
//         Boomer_Bill.lvlupPrice,
//         Belle_Boomerette.lvlupPrice,
//         Gregory.lvlupPrice
//     ] = [
//         clone(Default_Boomer_Bill.lvlupPrice),
//         clone(Default_Belle_Boomerette.lvlupPrice),
//         clone(Default_Gregory.lvlupPrice),
//     ];
//     [
//         Boomer_Bill.lvl,
//         Belle_Boomerette.lvl,
//         Gregory.lvl
//     ] = [
//         clone(Default_Boomer_Bill.lvl),
//         clone(Default_Belle_Boomerette.lvl),
//         clone(Default_Gregory.lvl),
//     ];
//     for(i=0;i<6;i++){
//         Boomer_Bill.Hoes[i] = 0;
//         Belle_Boomerette.Hoes[i] = 0;
//         Gregory.Hoes[i]=0;
//         Gregory.HoePrices[i] = Default_Gregory.HoePrices[i];
//     }
//     player.equippedHoes=0;
//     player.carrots = 0;
//     cpsInterval = setInterval(carrotsPerSecond, 100);
//     tips.tracker=0;

//     // Save
//     saveGame();

//     // Tutorial message
//     if(player.lifetime.prestige_count === 1) {
//         let toaster = toast(...toasts.tutorial_charles, () => { closeToast(toaster); }, "Got it");
//     }

//     // // Recalculate & update prestige potential
//     // recalculateCarrotsPer();
//     // calculatePrestigePotential();
//     // seeButton('prestige');

//     // // Update page
//     // carrotCount();
//     // characterPrices();
//     // characterButtons();
//     // updateCharlesShop();
//     // showPrestigeStats();

//     // // Prompt player to use Charles
//     // setTimeout(() => { characterInfo('charles') }, 100);
// }