import { ScenarioPhaser } from "../../../api";
import { CreateScenarioUseCase } from "../../../usecases";

export const makeCreateScenario = () => {
  const crateSceneRepository = new ScenarioPhaser();
  const createScene = new CreateScenarioUseCase(crateSceneRepository);
  return createScene;
};

export const createScenario = makeCreateScenario();
