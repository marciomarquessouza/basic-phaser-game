import {
  getCursorState,
  setVelocity,
  playAnimation,
  getTouching,
} from "../../factories";
import { player } from "../../game-data";
import {
  ANIMATION_KEY,
  PLAYER_JUMP,
  PLAYER_VELOCITY,
} from "../../../constants";
import { Player, Velocity } from "../../../entities";

const velocity = (velocity: Velocity) => {
  setVelocity.execute({ player, velocity });
};

const touching = (player: Player) => {
  return getTouching.execute(player);
};

export function update() {
  const cursor = getCursorState.execute();

  if (cursor.left.isDown) {
    velocity({ x: -PLAYER_VELOCITY });
    playAnimation.execute({
      player,
      key: ANIMATION_KEY.LEFT,
      ignoreIfPlaying: true,
    });
  } else if (cursor.right.isDown) {
    velocity({ x: PLAYER_VELOCITY });
    playAnimation.execute({
      player,
      key: ANIMATION_KEY.RIGHT,
      ignoreIfPlaying: true,
    });
  } else {
    velocity({ x: 0 });
    playAnimation.execute({
      player,
      key: ANIMATION_KEY.TURN,
    });
  }

  if (cursor.up.isDown && touching(player).down) {
    velocity({ y: -PLAYER_JUMP });
  }
}
