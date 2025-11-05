namespace SpriteKind {
    export const 玩家2 = SpriteKind.create()
    export const 玩家1 = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Sirèna_von_Aquanox_Belladonna_Éclat_de_la_Lune_Noire,
    assets.animation`我的動畫4`,
    100,
    false
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Sirèna_von_Aquanox_Belladonna_Éclat_de_la_Lune_Noire,
    assets.animation`我的動畫3`,
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Sirèna_von_Aquanox_Belladonna_Éclat_de_la_Lune_Noire,
    assets.animation`我的動畫0`,
    100,
    false
    )
})
let Sirèna_von_Aquanox_Belladonna_Éclat_de_la_Lune_Noire: Sprite = null
scene.setBackgroundColor(11)
scene.setBackgroundImage(assets.image`我的影像`)
Sirèna_von_Aquanox_Belladonna_Éclat_de_la_Lune_Noire = sprites.create(assets.image`我的影像0`, SpriteKind.玩家1)
let Clawdius_Nocturne_de_Marrowine = sprites.create(assets.image`我的影像1`, SpriteKind.玩家2)
Sirèna_von_Aquanox_Belladonna_Éclat_de_la_Lune_Noire.setPosition(30, 93)
Sirèna_von_Aquanox_Belladonna_Éclat_de_la_Lune_Noire.setBounceOnWall(true)
controller.player2.moveSprite(Clawdius_Nocturne_de_Marrowine)
Clawdius_Nocturne_de_Marrowine.setPosition(8, 106)
Clawdius_Nocturne_de_Marrowine.setBounceOnWall(true)
