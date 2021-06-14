import { SetVelocity, SetVelocityRepository } from "../../data";

export class SetVelocityUseCase implements SetVelocity {
  constructor(private setVelocityRepository: SetVelocityRepository) {}

  execute(player: SetVelocity.Params): void {
    if (!player.velocity) {
      throw new Error("Velocity data is mandatory");
    }
    this.setVelocityRepository.setVelocity(player);
  }
}
