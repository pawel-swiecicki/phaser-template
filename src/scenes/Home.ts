import {GameObjects} from 'phaser';
import {CoreScene} from "../comps/CoreScene.ts";
import {TextButton} from "../comps/PushButton.ts";

export class Home extends CoreScene {
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor() {
        super('Home');
    }

    create() {
        this.background = this.add.image(512, 384, 'background');

        this.logo = this.add.image(512, 300, 'logo');

        new TextButton({
            scene: this,
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2,
            text: 'PLAY',
            onClick: () => {
                this.scene.start('Play');
            }
        })
    }
}
