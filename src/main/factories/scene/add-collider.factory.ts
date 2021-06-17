import { ScenePhaser } from "../../../api";
import { AddColliderUseCase } from "../../../usecases";

export const makeAddColliders = () => {
  const addColliderAdapter = new ScenePhaser();
  const addColliders = new AddColliderUseCase(addColliderAdapter);
  return addColliders;
};

export const addColliders = makeAddColliders();
