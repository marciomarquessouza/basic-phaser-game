export namespace DisableItem {
  export type Params = {
    groupName: string;
    itemName: string;
  };
}

export interface DisableItem {
  execute(itemData: DisableItem.Params): void;
}

export interface DisableItemRepository {
  disableItem(itemData: DisableItem.Params): void;
}
