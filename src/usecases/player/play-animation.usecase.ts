import { PlayAnimation, PlayAnimationAdapter } from "../../data";

export class PlayAnimationUseCase implements PlayAnimation {
  constructor(private playAnimation: PlayAnimationAdapter) {}

  execute(animation: PlayAnimation.Params): void {
    this.playAnimation.play(animation);
  }
}
