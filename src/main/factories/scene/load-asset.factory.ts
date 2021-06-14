import { ScenePhaser } from "../../../api";
import { LoadAssetUseCase } from "../../../usecases";

const makeLoadFactory = () => {
  const loadAssetRepository = new ScenePhaser();
  return new LoadAssetUseCase(loadAssetRepository);
};

export const loadAsset = makeLoadFactory();
