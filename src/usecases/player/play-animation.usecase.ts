import { PlayAnimation, PlayAnimationRepository } from "../../data";

export class PlayAnimationUseCase implements PlayAnimation {
  constructor(private playAnimation: PlayAnimationRepository) {}

  execute(animation: PlayAnimation.Params): void {
    this.playAnimation.play(animation);
  }
}
