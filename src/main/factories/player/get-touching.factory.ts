import { PlayerPhaser } from "../../../api";
import { GetTouchingUseCase } from "../../../usecases";

const makeGetTouching = () => {
  const getTouchingRepository = new PlayerPhaser();
  return new GetTouchingUseCase(getTouchingRepository);
};

export const getTouching = makeGetTouching();
