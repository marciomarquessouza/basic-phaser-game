import { ScenePhaser } from "../../../api";
import { LoadAssetUseCase } from "../../../usecases";

const makeLoadFactory = () => {
  const loadAssetAdapter = new ScenePhaser();
  return new LoadAssetUseCase(loadAssetAdapter);
};

export const loadAsset = makeLoadFactory();
