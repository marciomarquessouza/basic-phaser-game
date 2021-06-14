import { PlayerPhaser } from "../../../api";
import { PlayAnimationUseCase } from "../../../usecases";

const makePlayAnimation = () => {
  const playAnimationRepository = new PlayerPhaser();
  return new PlayAnimationUseCase(playAnimationRepository);
};

export const playAnimation = makePlayAnimation();
