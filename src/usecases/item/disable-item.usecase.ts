import { DisableItemRepository, DisableItem } from "../../data";

export class DisabeItemUseCase implements DisableItem {
  constructor(private disableItemRepository: DisableItemRepository) {}

  execute(itemData: DisableItem.Params): void {
    this.disableItemRepository.disableItem(itemData);
  }
}
