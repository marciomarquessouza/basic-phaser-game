import {
  CreatePlayerRepository,
  GetTouchingRepository,
  PlayAnimationRepository,
  SetVelocityRepository,
  GetTouching,
  PlayAnimation,
  SetVelocity,
} from "../../data";
import { Player } from "../../entities";
import { playerHelper } from "./helper";

export class PlayerPhaser
  implements
    CreatePlayerRepository,
    SetVelocityRepository,
    PlayAnimationRepository,
    GetTouchingRepository
{
  create(player: Player) {
    playerHelper.createPlayer(player);
  }

  play(animation: PlayAnimation.Params): void {
    const { player, key, ignoreIfPlaying } = animation;
    playerHelper.playAnimation(player, key, ignoreIfPlaying);
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
    return playerHelper.getTouching(player);
  }
}
