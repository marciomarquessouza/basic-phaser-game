import { ANIMATION_KEY } from "../../../constants";
import {
  CreatePlayerAdapter,
  GetTouchingAdapter,
  PlayAnimationAdapter,
  SetVelocityAdapter,
  GetTouching,
  SetVelocity,
} from "../../../data";
import { Player } from "../../../entities";
import { playerHelper } from "../helper";

export class PlayerPhaser
  implements
    CreatePlayerAdapter,
    SetVelocityAdapter,
    PlayAnimationAdapter,
    GetTouchingAdapter
{
  create(player: Player) {
    playerHelper
      .createPlayer(player)
      .then(() => {
        playerHelper.createAnimation(player);
        player.status = "created";
      })
      .catch(() => {
        player.status = "error";
      });
  }

  play(player: Player, key: ANIMATION_KEY, ignoreIfPlaying?: boolean): void {
    playerHelper
      .playAnimation(player.name, key, ignoreIfPlaying)
      .then(() => {
        player.key = key;
        player.ignoreIfPlaying = ignoreIfPlaying;
      })
      .catch(() => {
        player.status = "error";
      });
  }

  setVelocity(playerVelocity: SetVelocity.Params): void {
    const { player, velocity } = playerVelocity;
    const { name } = player;
    try {
      if (!isNaN(velocity.x)) {
        playerHelper.setVelocityX(name, velocity.x).then(() => {
          player.velocityX = velocity.x;
        });
      }
      if (!isNaN(velocity.y)) {
        playerHelper.setVelocityY(name, velocity.y).then(() => {
          player.velocityY = velocity.y;
        });
      }
    } catch (error) {
      player.status = "error";
    }
  }

  getTouching(player: Player): GetTouching.Result {
    const touching = playerHelper.getTouching(player.name);
    Object.assign(player, touching);
    return touching;
  }
}
