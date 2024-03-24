//creates a player class
import StatsTracker from "./StatsTracker.mjs";

export default class Player{
    constructor(data_version,carrots,cpc,cps,equippedHoes,cash,
        clickSpeedRecord,fallingConsecRecord,trinket_completion,pages,golden_carrots,
        prestige_potential,prestige_potential_cap,prestige_available,
        prestige,characters,achievements, internal,themes,cosmetics,
        new_theme,new_cosmetic,flags,lifetimeStats){
        this.data_version=data_version;
        this.carrots=carrots;
        this.cpc=cpc;
        this.cps=cps;
        this.equippedHoes=equippedHoes;
        this.cash=cash;
        this.clickSpeedRecord=clickSpeedRecord;
        this.fallingConsecRecord=fallingConsecRecord;
        this.trinket_completion=trinket_completion;
        this.pages=pages;
        this.golden_carrots=golden_carrots;
        this.prestige_potential=prestige_potential;
        this.prestige_potential_cap=prestige_potential_cap;
        this.prestige_available=prestige_available;
        this.prestige=prestige;
        this.characters=characters;
        this.achievements=achievements;
        this.internal=internal;
        this.themes=themes;
        this.cosmetics=cosmetics;
        this.new_theme=new_theme;
        this.new_cosmetic=new_cosmetic;
        this.flags=flags;
        this.lifetime=lifetimeStats;

        this.tip_tracker = {
            number: 0,
            // random:0,
            tracker: 0, // Tip level
            best: 0, // highest tip level reached
            type: false
        }
    }

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