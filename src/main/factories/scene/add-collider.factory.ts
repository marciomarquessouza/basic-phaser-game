import { ScenePhaser } from "../../../api";
import { AddColliderUseCase } from "../../../usecases";

export const makeAddColliders = () => {
  const addColliderRepository = new ScenePhaser();
  const addColliders = new AddColliderUseCase(addColliderRepository);
  return addColliders;
};

export const addColliders = makeAddColliders();
