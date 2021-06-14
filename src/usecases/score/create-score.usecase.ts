import { CreateScore, CreateScoreRepository } from "../../data";
import { GameScore } from "../../entities";

export class CreateScoreUseCase implements CreateScore {
  constructor(private createScoreRepository: CreateScoreRepository) {}
  execute(data: GameScore): void {
    this.createScoreRepository.create(data);
  }
}
