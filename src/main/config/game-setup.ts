import { preload } from "./preload";
import { create } from "./create";
import { update } from "./update";
import { GRAVITY, HEIGHT, WIDTH } from "../../constants";

export const config = (): Phaser.Types.Core.GameConfig => {
  return {
    width: WIDTH,
    height: HEIGHT,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: GRAVITY },
        debug: false,
      },
    },
    scene: { preload, create, update },
  };
};
