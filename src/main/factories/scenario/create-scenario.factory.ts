import { ScenarioPhaser } from "../../../api";
import { CreateScenarioUseCase } from "../../../usecases";

export const makeCreateScenario = () => {
  const crateSceneAdapter = new ScenarioPhaser();
  const createScene = new CreateScenarioUseCase(crateSceneAdapter);
  return createScene;
};

export const createScenario = makeCreateScenario();
