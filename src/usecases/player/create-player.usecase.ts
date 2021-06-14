import { CreatePlayer, CreatePlayerRepository } from "../../data";

export class CreatePlayerUseCase implements CreatePlayer {
  constructor(private createPlayerRepository: CreatePlayerRepository) {}

  execute(data: CreatePlayer.Params) {
    return this.createPlayerRepository.create(data);
  }
}
