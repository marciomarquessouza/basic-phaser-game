import { DisableItem, CreateItemAdapter, DisableItemAdapter } from "../../data";
import { Items } from "../../entities";
import { itemHelper } from "./helper";

export class ItemPhaser implements CreateItemAdapter, DisableItemAdapter {
  create(itemData: Items, createId: () => string): void {
    itemHelper.createItems(itemData, createId);
  }

  disableItem(itemData: DisableItem.Params): void {
    const { groupName, itemName } = itemData;
    itemHelper.disableItem(groupName, itemName);
  }
}
