import { ANIMATION_KEY } from "../../constants";
import { Player } from "../../entities";

export namespace PlayAnimation {
  export type Params = {
    player: Player;
    key: ANIMATION_KEY;
    ignoreIfPlaying?: boolean;
  };
}

export interface PlayAnimation {
  execute(animation: PlayAnimation.Params): void;
}

export interface PlayAnimationRepository {
  play(animation: PlayAnimation.Params): void;
}
