/**
 * A special array that holds the prices of upgrades
 * @constructor
 * @version 1.0
 */
export default class PriceArray{
    #defaultPrice;
    #priceScaling;
    #Charles;
    #Jared;
    #content;
    #size;
    #Owner;

    constructor(Owner, Charles, Jared){
        this.#defaultPrice = Owner.basePrice;
        this.#priceScaling = Owner.scaling;
        this.#Charles = Charles || null;
        this.#Jared = Jared || null;
        this.#size = Number(2000);
        this.#Owner = Owner;
        console.log(this);
        this.#content=this.#constructArray();
        

    }


    /**
     * Gets the size
     */
    get size(){
        return this.#size;
    }

    get content(){
        return this.#content;
    }
    
    /**
     * finds the price of one or more upgrades
     * @param {Number} amount 
     * @returns {Number}
     */
    queryPrice(amount=1){
        return this.#content.slice(0,this.amount).reduce((a,b) => a+b);
    }

    /**
     * 
     * @param {Number} index 
     * @param {Object} scaling object
     * @returns {Number} modifier between 0 and 1 exclusive
     */
    static #readScaling(index, scalingObj){
        //initial modifier
        let modifier = 0;
        const constantModifier = 1;
        //run through the scaling object to find the right modifier
        for(const entry of scalingObj){
            if(entry.min >= index) return modifier;
            modifier = entry.modifier*constantModifier;
        }  
        //if it reaches its final tier then return that
        return modifier;
    }
    
    /**
     * @returns {Array}
     */
    #constructArray(){
         console.log(BigInt(1));

        if(this.#content) throw Error("Content Already Initilized");
        //create Array
        const newArray = new Array(this.#size);
        newArray[0]=this.#defaultPrice;

        //loops through the array filling it out
        for(let i = 1; i<this.#size; ++i){
            //find the scaling modifier
            const scalingModifier = 1+PriceArray.#readScaling(i, this.#priceScaling);
            //set the index's value
            newArray[i]=Math.floor(newArray[i-1] * (scalingModifier));
        }
        return newArray;
    };
}


/**                                                     
 * --------------------Test Code ----------------------- *
 */
//If I called a new instance...
// const priceScale = [ // Price scaling
// { min: 1,   modifier: 0.11  },
// { min: 75,  modifier: 0.13  },
// { min: 100, modifier: 0.09  },
// { min: 300, modifier: 0.08  },
// { min: 500, modifier: 0.065 },
// ]
// let Charles=0;
// let Jared=0;

// const owner = {
//     basePrice:100,
//     scaling: priceScale
// }


// const PriceArrayExample = new PriceArray(owner);
// //then what would PriceArrayExample's #content look like?
// console.log(BigInt(1));
// try {
//     console.log(PriceArrayExample.queryPrice(100));
//   } catch (error) {
//     console.error(error);
//   }