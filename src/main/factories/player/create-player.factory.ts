import { PlayerPhaser } from "../../../api";
import { CreatePlayerUseCase } from "../../../usecases";

export const makeCreatePlayer = () => {
  const createPlayerRepository = new PlayerPhaser();
  const createPlayer = new CreatePlayerUseCase(createPlayerRepository);
  return createPlayer;
};

export const createPlayer = makeCreatePlayer();
