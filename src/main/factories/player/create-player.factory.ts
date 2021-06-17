import { PlayerPhaser } from "../../../api";
import { CreatePlayerUseCase } from "../../../usecases";

export const makeCreatePlayer = () => {
  const createPlayerAdapter = new PlayerPhaser();
  const createPlayer = new CreatePlayerUseCase(createPlayerAdapter);
  return createPlayer;
};

export const createPlayer = makeCreatePlayer();
