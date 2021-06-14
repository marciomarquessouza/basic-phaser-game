import { PlayerPhaser } from "../../../api";
import { SetVelocityUseCase } from "../../../usecases";

const makeSetVelocity = () => {
  const setVelocityRepository = new PlayerPhaser();
  return new SetVelocityUseCase(setVelocityRepository);
};

export const setVelocity = makeSetVelocity();
