import { PlayerPhaser } from "../../../api";
import { PlayAnimationUseCase } from "../../../usecases";

const makePlayAnimation = () => {
  const playAnimationAdapter = new PlayerPhaser();
  return new PlayAnimationUseCase(playAnimationAdapter);
};

export const playAnimation = makePlayAnimation();
