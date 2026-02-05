import {Score} from "./Score.ts";
import GameConfig = Phaser.Types.Core.GameConfig;
import {settings} from "../settings.ts";

export class CoreGame extends Phaser.Game
{
    debug: boolean = false;
    score: Score;

    screen = {
        width: settings.screen.width,
        height: settings.screen.height,
        center: {
            x: settings.screen.width/2,
            y: settings.screen.height/2,
        }
    }

    constructor(config: GameConfig) {
        super(config);
        this.score = new Score();
        this.debug = import.meta.env.MODE === 'development';
        // console.log(import.meta.env.MODE)
    }
}