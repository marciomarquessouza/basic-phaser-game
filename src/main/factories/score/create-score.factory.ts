import { ScorePhaser } from "../../../api";
import { CreateScoreUseCase } from "../../../usecases";

const makeCreateScore = () => {
  const createScoreRepository = new ScorePhaser();
  return new CreateScoreUseCase(createScoreRepository);
};

export const createScore = makeCreateScore();
