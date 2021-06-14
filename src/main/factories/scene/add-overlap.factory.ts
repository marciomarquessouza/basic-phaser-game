import { ScenePhaser } from "../../../api";
import { AddOverlapUseCase } from "../../../usecases";

const makeAddOverlap = () => {
  const addOverlapRepository = new ScenePhaser();
  return new AddOverlapUseCase(addOverlapRepository);
};

export const addOverlap = makeAddOverlap();
