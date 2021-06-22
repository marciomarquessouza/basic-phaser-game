import { ANIMATION_KEY } from "../../constants";
import { Player } from "../../entities";

export interface PlayAnimation {
  execute(player: Player, key: ANIMATION_KEY, ignoreIfPlaying?: boolean): void;
}

export interface PlayAnimationAdapter {
  play(player: Player, key: ANIMATION_KEY, ignoreIfPlaying?: boolean): void;
}
