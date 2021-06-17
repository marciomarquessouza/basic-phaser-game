import { ScorePhaser } from "../../../api";
import { CreateScoreUseCase } from "../../../usecases";

const makeCreateScore = () => {
  const createScoreAdapter = new ScorePhaser();
  return new CreateScoreUseCase(createScoreAdapter);
};

export const createScore = makeCreateScore();
