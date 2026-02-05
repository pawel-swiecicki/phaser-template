export class Score {
    private coins: number;
    private time: number;
    constructor() {
        this.coins = 0;
        this.time = 0;
    }
    reset() {
        this.coins = 0;
        this.time = 0;
    }
    getCoins(): number {
        return this.coins;
    }
    getTime(): number {
        return Date.now() - this.time;
    }
    setCoins(coins:number) {
        this.coins = coins;
    }
    addCoin() {
        this.coins += 1;
    }
}