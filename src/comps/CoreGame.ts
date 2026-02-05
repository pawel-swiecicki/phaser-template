import {Score} from "./Score.ts";

export class CoreGame extends Phaser.Game
{
    debug: boolean = false;
    score: Score;

    constructor() {
        super();
        this.score = new Score();
        this.debug = import.meta.env.MODE === 'development';
        // console.log(import.meta.env.MODE)
    }
}