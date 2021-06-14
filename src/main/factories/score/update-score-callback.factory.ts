import { ScorePhaser } from "../../../api";
import { UpdateScoreUsecase } from "../../../usecases";
import { OverlapCallback } from "../../adapters";
import { score } from "../../game-data";

const makeUpdateScore = () => {
  const updateScoreRepository = new ScorePhaser();
  return new UpdateScoreUsecase(updateScoreRepository);
};

const updateScore = makeUpdateScore();

export const updateScoreCallback: OverlapCallback = () => {
  updateScore.execute(score);
};
