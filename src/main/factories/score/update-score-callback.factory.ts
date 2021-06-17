import { ScorePhaser } from "../../../api";
import { UpdateScoreUsecase } from "../../../usecases";
import { OverlapCallback } from "../../adapters";
import { score } from "../../game-data";

const makeUpdateScore = () => {
  const updateScoreAdapter = new ScorePhaser();
  return new UpdateScoreUsecase(updateScoreAdapter);
};

const updateScore = makeUpdateScore();

export const updateScoreCallback: OverlapCallback = () => {
  updateScore.execute(score);
};
