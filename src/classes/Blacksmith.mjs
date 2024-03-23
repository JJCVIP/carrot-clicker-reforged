import Character from "./Character.mjs";

export default class Blacksmith extends Character{
    /**
     * Forges Tools
     * @param {String} nickname Shortened Name
     * @param {String} img The image of the character 
     * @param {Number} lvl starting level
     * @param {Number} lvlupPrice the level up prices
     * @param {Array} scaling the way the level up prices scale
     * @param {Array} Hoes Blank hoe array
     * @param {Array} HoePrices Prices of Hoes
     */
    constructor(name,fullName,nickname,locked,img,lvl,lvlupPrice,basePrice,scaling,Hoes,HoePrices,crafting){
        super(name,fullName,nickname,img,locked);
        this.lvl=lvl;
        this.lvlupPrice=lvlupPrice;
        this.basePrice=basePrice;
        this.scaling=scaling;
        this.Hoes=Hoes;
        this.HoePrices=HoePrices;
        this.crafting=crafting;
        this.version = 1;
    }
}