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
    constructor(nickname,img,lvl,lvlupPrice,scaling,Hoes,HoePrices,crafting){
        super(nickname,img);
        this.lvl=lvl;
        this.lvlupPrice=lvlupPrice;
        this.scaling=scaling;
        this.Hoes=Hoes;
        this.HoePrices=HoePrices;
        this.crafting=crafting;
        this.version = 1;
    }
}