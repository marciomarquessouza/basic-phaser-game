import { Player, Velocity } from "../../entities";

export namespace SetVelocity {
  export type Params = {
    player: Player;
    velocity: Velocity;
  };
}

export interface SetVelocity {
  execute(player: SetVelocity.Params): void;
}

export interface SetVelocityRepository {
  setVelocity(playerVelocity: SetVelocity.Params): void;
}
