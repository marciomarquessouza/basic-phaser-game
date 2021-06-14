import { AddCollider, AddColliderRepository } from "../../data";

export class AddColliderUseCase implements AddCollider {
  constructor(private addColliderRepository: AddColliderRepository) {}

  execute(collidersElements: AddCollider.Params): void {
    this.addColliderRepository.add(collidersElements);
  }
}
