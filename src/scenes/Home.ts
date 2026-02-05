import {GameObjects} from 'phaser';
import {CoreScene} from "../comps/CoreScene.ts";
import {TextButton} from "../comps/TextButton.ts";

export class Home extends CoreScene {
    background: GameObjects.Image;
    logo: GameObjects.Image;

    constructor() {
        super('Home');
    }

    create() {
        this.background = this.add.image(this.game.screen.center.x, this.game.screen.center.y, 'background').setOrigin(.5, .5);

        this.logo = this.add.image(this.game.screen.center.x, this.game.screen.center.y, 'logo').setOrigin(.5);

        new TextButton({
            scene: this,
            x: this.cameras.main.width / 2,
            y: this.game.screen.height - 100,
            text: 'PLAY',
            onClick: () => {
                this.scene.start('Play');
            }
        })
    }
}
