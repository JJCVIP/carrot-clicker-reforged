export default class CarlListing {
    constructor(price=1, currency='cash', available=false, bought=false) {
        this.price = price;
        this.currency = currency;
        this.available = available;
        this.bought = bought;
        this.version = 1;
    }
}