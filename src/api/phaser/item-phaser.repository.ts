import {
  DisableItem,
  CreateItemRepository,
  DisableItemRepository,
} from "../../data";
import { Items } from "../../entities";
import { itemHelper } from "./helper";

export class ItemPhaser implements CreateItemRepository, DisableItemRepository {
  create(itemData: Items): void {
    itemHelper.createItems(itemData);
  }

  disableItem(itemData: DisableItem.Params): void {
    const { groupName, itemName } = itemData;
    itemHelper.disableItem(groupName, itemName);
  }
}
