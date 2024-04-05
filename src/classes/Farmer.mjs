import Character from "./Character.mjs";

export default class Farmer extends Character{
    /**
     * Produces Carrots
     * @param {String} nickname Shortened Name
     * @param {String} img The image of the character
     * @param {Number} lvl starting level
     * @param {Number} lvlupPrice the starting level price
     * @param {Array} scaling the way the level up prices scale
     * @param {Array} Hoes Blank hoe array
     */
    constructor(name,fullName,nickname,img,locked,lvl,lvlupPrice,basePrice,scaling,Hoes){
        super(name,fullName,nickname,img,locked);
        this.lvl=lvl;
        this.lvlupPrice=lvlupPrice;
        this.basePrice=basePrice;
        this.scaling=scaling;
        this.Hoes=Hoes;
        this.version=1;
    }

    /** Calculates Carrots Per Click or Per Second Based on inputing Bill or Belle
     * @param {Object} character 
     * @returns Carrots per Click or Carrots per Second
     */
    calculateCarrots(scholar, boostModifer) {

        //A special bonus impelemented only if you have 10 gilded_hoes, It uses the power of the other hoes to give massive buffs
        //If the player does not have 10 gilded_hoes the multiplied defaults to 1
        let specialGildedHoeBonus = Math.floor(
            //finds how many gilded_hoes the player has. Each multiple of ten gives increases the buff
            Math.floor(this.Hoes[5]/10) * 
            
            //calculates the buff(Might want to make more powerful, is currently the cuberoot of all the other hoes multiplied together )
            Math.floor(
                Math.pow(this.Hoes[0]*this.Hoes[1]*this.Hoes[2]*this.Hoes[3]*this.Hoes[4],0.3)
            )
        ) || 1;
        
        //Charles Stuff

        //holy book Buff, Currently takes the tome value + 1 and cubes it, so a level 1 tome would give 9 and a level two tome would give 64..
        const holyBookBuff = Math.pow(scholar.bibleTome.value+1,3)
        
        //cheaper steel, currently uses a rational function to get a value(equivelent to a percentage) to multiply the better hoes by. 
        //curve at https://www.desmos.com/calculator/jh78yzukji  
        const cheaperSteelDebuff = 1/(0.03*scholar.cheaperSteelTome.value+1);

        //salary management
        //same curve as cheaper steel
        const salaryManagementDebuff = 1/(0.03*scholar.salaryManagementTome.value+1);
        
        //improved farming practices
        const farmingPracticeBuffs = 1 + scholar.improvedFarmingPracticeTome.value/20;

        //improved craftsmenship
        const craftsmenshipBuff = 1 + scholar.improveCraftsmanshipTome.value/20;

        /* Calculates the Hoe modifier by creating a shallow copy of this.Hoes and multiplying
           each entry by 10 to the power of that hoes index. Example 1, 10, 100, 1000
           then that shallow array is summed up with the base multiplier of 1
        */
        const hoeModifier = 1+this.Hoes.map((hoe,index)=> hoe * Math.pow(10,index)).reduce((a,b) => a+b);

        // Returns the correct value
        return this.lvl * specialGildedHoeBonus * boostModifer * hoeModifier * cheaperSteelDebuff * salaryManagementDebuff * farmingPracticeBuffs * craftsmenshipBuff * holyBookBuff;
    }
}