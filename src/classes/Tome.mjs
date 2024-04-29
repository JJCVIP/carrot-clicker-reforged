export default class Tome {
    constructor(value=0,price=1,max=25000,price_scaling=1.01){
        this.value=value;
        this.price=price;
        this.max=max;
        this.scaling=price_scaling;
        this.version = 1;
    }
    /**
     * 
     * @param {Number} amount number of items you want to buy. 
     * @param {Boolean} sendNewPrice if True it sends the price of the next tome otherwise it queries the price you 
     * @returns {Number|String}
     */
    priceQuery(amount=1, sendNewPrice=false){
        //handling cases where the tomes can not be bought
        if(typeof amount !=="number") return console.error("amount needs to be a number");
        if(this.value+amount>=this.max && sendNewPrice===false){console.warn("priceQuery: Value exceeded max"); return "∞"}

        //useful variables
        let valueDummy = this.value;
        let target = valueDummy+amount;
        let sum = this.price;
        let newPrice = this.price;
        let scaling = this.price_scaling
        //multibuy for loop
        for(let i=0; i<amount+10; i++){
            
            
            //scaling
            if(valueDummy>99)       scaling = this.scaling;
            else if(valueDummy>375) scaling = this.scaling*0.993069030;
            else if(valueDummy>1000)scaling = this.scaling*0.9910990099;

            //set new price
            newPrice=Math.ceil(newPrice*scaling);

            //check if target is met;
            if(target===valueDummy+1) break;
            
            //numbers go up
            sum+=newPrice;
            valueDummy+=1;
        }
        if(sendNewPrice) return newPrice;
        else return sum;
    } 


    add(amount=1){
        // Handling cases where the tomes can not be bought
        if(typeof amount !=="number") return console.error("amount needs to be a number");
        if(this.value+amount>this.max) return toast("Can not purchase", `There are only ${this.max} tomes containing knowledge on this subejct`, '', false, true);
        
        // Return if can't afford
        let price = this.priceQuery(amount)
        if(player.golden_carrots < price) return; 

        //updates values
        player.golden_carrots -= price;
        this.value += amount;
        this.price = this.priceQuery(amount,true);
        player.lifetime.tomes_bought += amount; // Statistics

        // Recalculate CPC/CPS/level up prices
        recalculateCarrotsPer();
        recalculatePrices();

        // Update page
        updateCharlesShop();
        updateCPC();
        updateGC();
        mouseConfetti([3, 8], ccWhite);
    }

}
