import { GetTouching, GetTouchingRepository } from "../../data";
import { Player } from "../../entities";

export class GetTouchingUseCase implements GetTouching {
  constructor(private getTouchingRepository: GetTouchingRepository) {}

  execute(player: Player): GetTouching.Result {
    return this.getTouchingRepository.getTouching(player);
  }
}
