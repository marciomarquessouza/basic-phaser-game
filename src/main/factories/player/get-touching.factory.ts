import { PlayerPhaser } from "../../../api";
import { GetTouchingUseCase } from "../../../usecases";

const makeGetTouching = () => {
  const getTouchingAdapter = new PlayerPhaser();
  return new GetTouchingUseCase(getTouchingAdapter);
};

export const getTouching = makeGetTouching();
