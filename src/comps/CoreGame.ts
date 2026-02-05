import {Score} from "./Score.ts";
import GameConfig = Phaser.Types.Core.GameConfig;

export class CoreGame extends Phaser.Game
{
    debug: boolean = false;
    score: Score;

    constructor(config: GameConfig) {
        super(config);
        this.score = new Score();
        this.debug = import.meta.env.MODE === 'development';
        // console.log(import.meta.env.MODE)
    }
}