import { ScenePhaser } from "../../../api";
import { AddOverlapUseCase } from "../../../usecases";

const makeAddOverlap = () => {
  const addOverlapAdapter = new ScenePhaser();
  return new AddOverlapUseCase(addOverlapAdapter);
};

export const addOverlap = makeAddOverlap();
