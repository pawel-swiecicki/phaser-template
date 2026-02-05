// TextButton.ts

type ButtonConfig = {
    text: string
    width?: number
    height?: number
    x: number
    y: number
    radius?: number
    onClick: () => void
    scene: Phaser.Scene
}

export class TextButton extends Phaser.GameObjects.Container {

    private bg: Phaser.GameObjects.Graphics
    private label: Phaser.GameObjects.Text
    private widthBtn: number
    private heightBtn: number
    private radius: number
    private enabled = true
    private onClick: () => void
    private hitZone: Phaser.GameObjects.Zone

    private styles = {
        default: { fill: -1, stroke: 0x000000, alpha: 0 },
        hover:   { fill: 0xFFFFFF, stroke: 0xFDD929, alpha: .2 },
        down:    { fill: 0xFFFFFF, stroke: 0xFDD929, alpha: .5 },
        disabled:{ fill: -1, stroke: 0x999999, alpha: 0 }
    }

    constructor(cfg: ButtonConfig) {
        super(cfg.scene, cfg.x, cfg.y)

        this.scene = cfg.scene
        this.widthBtn = cfg.width ?? 450
        this.heightBtn = cfg.height ?? 90
        this.radius = cfg.radius ?? 45
        this.onClick = cfg.onClick

        // const hw = this.widthBtn / 2
        // const hh = this.heightBtn / 2

        this.hitZone = cfg.scene.add.zone(0, 0, this.widthBtn, this.heightBtn)
            .setOrigin(0.5)   // centrum!
            .setInteractive({ useHandCursor: true })

        this.add(this.hitZone) // musi być w containerze
        // BG
        this.bg = cfg.scene.add.graphics()
        this.add(this.bg)

        // TEXT
        this.label = cfg.scene.add.text(0, 0, cfg.text, {
            fontSize: '36px',
            letterSpacing: 2,
            color: '#000000',
            fontFamily: 'CenturyBold'
        }).setOrigin(0.5)

        this.add(this.label)

        this.draw(this.styles.default)
        this.registerEvents()

        cfg.scene.add.existing(this)
    }
    private draw(style: { fill: number; stroke: number, alpha: number }) {

        this.bg.clear()

        //this.label.setColor(style.fill)
        if(style.alpha > 0) {
            this.bg.fillStyle(style.fill,style.alpha);
            this.bg.fillRoundedRect(this.widthBtn * -.5, this.heightBtn * -.5, this.widthBtn, this.heightBtn, this.radius)
        }
        this.bg.lineStyle(3, style.stroke)
        this.bg.fillStyle(0,0)
        this.bg.strokeRoundedRect(this.widthBtn * -.5, this.heightBtn * -.5, this.widthBtn, this.heightBtn, this.radius)

    }

    private registerEvents() {
        this.hitZone.on('pointerover', () => {
            if (!this.enabled) return
            this.draw(this.styles.hover)
        })

        this.hitZone.on('pointerout', () => {
            if (!this.enabled) return
            this.draw(this.styles.default)
        })

        this.hitZone.on('pointerdown', () => {
            if (!this.enabled) return
            this.scene.sound.play("flip")
            this.draw(this.styles.down)
        })

        this.hitZone.on('pointerup', () => {
            if (!this.enabled) return
            this.draw(this.styles.hover)
            this.onClick()
        })
    }

    public setEnabled(value: boolean) {
        this.enabled = value
        this.draw(value ? this.styles.default : this.styles.disabled)
    }
    public isEnabled() {
        return this.enabled
    }
    public setText(text: string) {
        this.label.setText(text)
    }
}