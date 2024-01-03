export default class StatsTracker{
    constructor(carrots,click_carrots,idle_carrots,bonus_carrots,cash,falling_carrots_grabbed,golden_carrots,prestige_count,clicks,hoes,tomes_bought,trinkets_complete,boosts_used) {
        this.carrots=carrots;
        this.cpc_carrots=click_carrots;
        this.cps_carrots= idle_carrots;
        this.bonus_carrots=bonus_carrots;
        this.cash=cash;
        this.falling_carrots_grabbed=falling_carrots_grabbed;
        this.golden_carrots=golden_carrots;
        this.prestige_count=prestige_count;
        this.clicks=clicks;
        this.hoes=hoes;
        this.tomes_bought=tomes_bought;
        this.trinkets_complete=trinkets_complete;
        this.boosts_used=boosts_used;
        this.version = 1;
    }
}