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
    #currentPosition;
    #size;

    constructor(defaultPrice, priceScaling, currentPosition, Charles=null, Jared=null){
        this.#defaultPrice = defaultPrice;
        this.#priceScaling = priceScaling;
        this.#Charles = Charles;
        this.#Jared = Jared;
        this.#currentPosition = currentPosition;
        this.#size = (this.currentPosition+2000);
        if(this.#Charles && this.#Jared) this.#content=this.#constructArray();
    }

    /**
     * Gets the current position of the array
     */
    get currentPosition(){
        return this.#currentPosition;
    }

    /**
     * Gets the size
     */
    get size(){
        return this.#size;
    }

    /**
     * Gets the array
     */
    get content(){
        return this.#content;
    }
    
    initializeCharlesAndJared(Charles, Jared){
        if(!this.#Charles) this.#Charles = Charles;
        else console.warn("Charles already initialized");
        if(!this.#Jared) this.#Jared = Jared;
        else console.warn("Jared already initialized");

        this.#constructArray();
    }

    /**
     * finds the price of one or more upgrades
     * @param {Number} amount 
     * @returns {Number}
     */
    queryPrice(amount=1){
        return this.#content.slice(this.#currentPosition,this.#currentPosition+amount).reduce((a,b) => a+b);
    }

    movePosition(amount=1, backwards=false){
        //if backwards then move the position back(idk why you would want to but it's an option)
        if(backwards) this.#currentPosition -= amount;
        //Else move forward by the amount
        else this.#currentPosition += amount;

        //checks to see if the array needs to change sizes
        if(this.currentPosition>this.size-100){
            this.#size = this.#currentPosition+2000;
            this.#content = this.#constructArray();
        } 
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
     * @returns {Float64Array}
     */
    #constructArray(){
        //create Array
        const newArray = new Float64Array(this.#size);
        //sets initial value (or copies the older smaller array if resizing)
        if(this.#content instanceof Float64Array) newArray.set(this.#content);
        else newArray[0]=this.#defaultPrice;

        //loops through the array filling it out
        for(let i = (this.#content instanceof Float64Array) ? this.#content.length : 1; i<this.#size; ++i){
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
const priceScale = [ // Price scaling
{ min: 1,   modifier: 0.11  },
{ min: 75,  modifier: 0.13  },
{ min: 100, modifier: 0.09  },
{ min: 300, modifier: 0.08  },
{ min: 500, modifier: 0.065 },
]
let Charles=0;
let Jared=0;
const PriceArrayExample = new PriceArray(100,priceScale,1,Charles,Jared);
//then what would PriceArrayExample's #content look like?
try {
    console.log(PriceArrayExample.queryPrice(100));
  } catch (error) {
    console.error(error);
  }