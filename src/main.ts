import {AUTO} from 'phaser';
import {CoreGame} from "./comps/CoreGame.ts";
import {Boot, Preloader} from "./Loader.ts";
import {Home} from './scenes/Home.ts';
import {Play} from "./scenes/Play.ts";
import {End} from './scenes/End.ts';

document.addEventListener('DOMContentLoaded', () => {
    new CoreGame({
        type: AUTO,
        width: 1920,
        height: 1080,
        parent: 'game-container',
        backgroundColor: '#000000',
        autoCenter: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT
        },
        scene: [
            Boot,
            Preloader,
            Home,
            Play,
            End
        ]
    })
});
