import { PlayerPhaser } from "../../../api";
import { SetVelocityUseCase } from "../../../usecases";

const makeSetVelocity = () => {
  const setVelocityAdapter = new PlayerPhaser();
  return new SetVelocityUseCase(setVelocityAdapter);
};

export const setVelocity = makeSetVelocity();
