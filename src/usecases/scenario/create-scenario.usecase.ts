import { CreateScenario, CreateScenarioRepository } from "../../data";
import { Scenario } from "../../entities";

export class CreateScenarioUseCase implements CreateScenario {
  constructor(private createScenarioRepository: CreateScenarioRepository) {}

  execute(data: Scenario): void {
    this.createScenarioRepository.create(data);
  }
}
