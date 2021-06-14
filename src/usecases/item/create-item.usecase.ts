import { CreateItem, CreateItemRepository } from "../../data";
import { Items } from "../../entities";

export class CreateItemUseCase implements CreateItem {
  constructor(private createItemRepository: CreateItemRepository) {}

  execute(data: Items): void {
    this.createItemRepository.create(data);
  }
}
