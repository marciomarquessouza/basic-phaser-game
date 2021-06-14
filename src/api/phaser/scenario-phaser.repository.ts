import { CreateScenarioRepository } from "../../data";
import { Scenario } from "../../entities";
import { scenarioHelper } from "./helper";

export class ScenarioPhaser implements CreateScenarioRepository {
  create(scenario: Scenario): void {
    scenarioHelper.createBackground(scenario);
    scenarioHelper.createPlatforms(scenario);
  }
}
