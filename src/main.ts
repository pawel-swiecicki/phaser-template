import {AUTO} from 'phaser';
import {CoreGame} from "./comps/CoreGame.ts";
import {Boot, Preloader} from "./Loader.ts";
import {Home} from './scenes/Home.ts';
import {Play} from "./scenes/Play.ts";
import {End} from './scenes/End.ts';

/** @see  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig */
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#000000',
    scene: [
        Boot,
        Preloader,
        Home,
        Play,
        End
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    new CoreGame(config)
});
