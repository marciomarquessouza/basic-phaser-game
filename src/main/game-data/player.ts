import { ANIMATION_KEY, ANIMATION_TYPE, DUDE } from "../../constants";
import { Player } from "../../entities";

export const player: Player = {
  name: DUDE,
  bounce: 0.2,
  sprite: {
    x: 100,
    y: 450,
    image: DUDE,
  },
  isCollideWorldBounds: true,
  animations: [
    {
      key: ANIMATION_KEY.LEFT,
      frames: {
        type: ANIMATION_TYPE.MULTI,
        key: DUDE,
        start: 0,
        end: 3,
      },
      frameRate: 10,
      repeat: -1,
    },
    {
      key: ANIMATION_KEY.TURN,
      frames: {
        type: ANIMATION_TYPE.UNO,
        frame: [{ key: DUDE, frame: 4 }],
      },
      frameRate: 20,
    },
    {
      key: ANIMATION_KEY.RIGHT,
      frames: {
        type: ANIMATION_TYPE.MULTI,
        key: DUDE,
        start: 5,
        end: 8,
      },
      frameRate: 10,
      repeat: -1,
    },
  ],
};
