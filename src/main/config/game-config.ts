import Phaser from "phaser";
import { GRAVITY, HEIGHT, WIDTH } from "../../constants";

export const config = (
  scene: Phaser.Types.Scenes.CreateSceneFromObjectConfig
): Phaser.Types.Core.GameConfig => {
  return {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: GRAVITY },
        debug: false,
      },
    },
    scene,
  };
};
