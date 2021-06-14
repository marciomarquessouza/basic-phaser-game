import { ANIMATION_KEY, ANIMATION_TYPE } from "../../../constants";
import { Player, PlayerAnimation } from "../../../entities";
import { GetTouching } from "../../../data";
import { PhaserHelper } from "./phaser-helper.protocol";
import { sceneHelper } from "./Scene.helper";

type PlayerElement = Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

class PlayerHelper implements PhaserHelper {
  private playersPhaser: PhaserHelper.PhaserElement[] = [];

  getElements(): PhaserHelper.PhaserElement[] {
    return this.playersPhaser;
  }

  getElementByName(name: string): PlayerElement {
    const { element } = this.playersPhaser.find(
      (player) => player.name === name
    );
    return element as PlayerElement;
  }

  createPlayer(player: Player): void {
    const { sprite, bounce, isCollideWorldBounds, name } = player;
    const { x, y, image } = sprite;
    const { scene } = sceneHelper;
    const playerPhaser = scene.physics.add.sprite(x, y, image);
    playerPhaser.setBounce(bounce);
    playerPhaser.setCollideWorldBounds(isCollideWorldBounds);
    playerPhaser.setName(name);
    this.playersPhaser.push({ name, element: playerPhaser });
    this.createAnimation(player);
  }

  private createFrames(animation: PlayerAnimation) {
    const { frames } = animation;
    const { scene } = sceneHelper;
    return frames.type === ANIMATION_TYPE.UNO
      ? frames.frame
      : scene.anims.generateFrameNumbers(frames.key, {
          start: frames.start,
          end: frames.end,
        });
  }

  createAnimation(player: Player): void {
    const { scene } = sceneHelper;
    player.animations.map((animation) => {
      const { key, frameRate, repeat } = animation;
      const frames = this.createFrames(animation);
      scene.anims.create({ key, frames, frameRate, repeat });
    });
  }

  setVelocityX(playerName: string, x: number): void {
    const playerElement = this.getElementByName(playerName);
    playerElement.setVelocityX(x);
  }

  setVelocityY(playerName: string, y: number): void {
    const playerElement = this.getElementByName(playerName);
    playerElement.setVelocityY(y);
  }

  playAnimation(player: Player, key: ANIMATION_KEY, ignoreIfPlaying?: boolean) {
    const playerElement = this.getElementByName(player.name);
    playerElement.anims.play(key, ignoreIfPlaying);
  }

  getTouching(player: Player): GetTouching.Result {
    const playerElement = this.getElementByName(player.name);
    const touching = playerElement.body.touching;
    return { ...touching };
  }
}

export const playerHelper = new PlayerHelper();
