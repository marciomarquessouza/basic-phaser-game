import {
  CreatePlayerAdapter,
  GetTouchingAdapter,
  PlayAnimationAdapter,
  SetVelocityAdapter,
  GetTouching,
  PlayAnimation,
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
      .then(() => playerHelper.createAnimation(player))
      .finally(() => {
        player.status = "created";
      });
  }

  play(animation: PlayAnimation.Params): void {
    const { player, key, ignoreIfPlaying } = animation;
    playerHelper.playAnimation(player.name, key, ignoreIfPlaying);
  }

  setVelocity(playerVelocity: SetVelocity.Params): void {
    const { player, velocity } = playerVelocity;
    const { name } = player;
    if (!isNaN(velocity.x)) {
      playerHelper.setVelocityX(name, velocity.x);
    }
    if (!isNaN(velocity.y)) {
      playerHelper.setVelocityY(name, velocity.y);
    }
  }

  getTouching(player: Player): GetTouching.Result {
    return playerHelper.getTouching(player.name);
  }
}
