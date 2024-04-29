export default class StatsTracker{
    constructor(data={}) {
        this.carrots=0;
        this.cpc_carrots=0;
        this.cps_carrots= 0;
        this.bonus_carrots=0;
        this.cash=0;
        this.falling_carrots_grabbed=0;
        this.golden_carrots=0;
        this.prestige_count=0;
        this.clicks=0;
        this.hoes={crafted: [0, 0, 0, 0, 0, 0],craftedTotal: 0};
        this.tomes_bought=0;
        this.trinkets_complete=0;
        this.boosts_used=0;

        // this.version = 1;

        // Override default values with paramaters from "data" object
        for(let [key, value] of Object.entries(data)) this[key] = value;
    }
}