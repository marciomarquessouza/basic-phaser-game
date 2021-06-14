import { UpdateScore, UpdateScoreRepository } from "../../data";
import { GameScore } from "../../entities";
import { STAR_VALUE } from "../../constants";

export class UpdateScoreUsecase implements UpdateScore {
  constructor(private updateScoreRepository: UpdateScoreRepository) {}

  execute(scoreData: GameScore): void {
    scoreData.score += STAR_VALUE;
    scoreData.text = `SCORE ${scoreData.score}`;
    this.updateScoreRepository.updateScore(scoreData);
  }
}
